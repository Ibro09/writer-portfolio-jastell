import { NextRequest, NextResponse } from "next/server";
import connect from "../../../lib/mongodb";
import Post from "../../../models/Post";

export async function GET(req: NextRequest) {
  const start = Date.now();
  try {
    await connect();
    console.log("Connected in", Date.now() - start, "ms");

    // support ?limit=&page= for pagination
    const url = new URL(req.url);
    const limit = Math.min(Number(url.searchParams.get("limit") || "20"), 200);
    const page = Math.max(Number(url.searchParams.get("page") || "1"), 1);
    const skip = (page - 1) * limit;

    // IMPORTANT: exclude heavy fields (image base64) and use lean() for speed
    const posts = await Post.find({}, { image: 0 })
      .skip(skip)
      .limit(limit)
      .lean()
      .maxTimeMS(10000); // fail faster if server is slow

    console.log("Query finished in", Date.now() - start, "ms, returned:", posts.length);
    return NextResponse.json( posts);
  } catch (err) {
    console.error("GET /api/posts error after", Date.now() - start, "ms:", err);
    return NextResponse.json(
      { error: "Failed to fetch posts", details: String(err) },
      { status: 500 }
    );
  }
}


export async function POST(req: NextRequest) {
  await connect();

  try {
    let postData: any = {};
    const contentType = (req.headers.get("content-type") || "").toLowerCase();

    if (contentType.includes("multipart/form-data")) {
      const fd = await req.formData();
      for (const [k, v] of fd.entries()) {
        if (k === "sections") {
          try {
            // Parse sections JSON string to array
            const parsed = JSON.parse(v as string);
            postData[k] = Array.isArray(parsed) ? parsed : [];
          } catch (parseErr) {
            console.error("Error parsing sections JSON:", parseErr);
            postData[k] = [];
          }
        } else if (v instanceof File) {
          const bytes = await v.arrayBuffer();
          postData[k] = Buffer.from(bytes).toString("base64");
        } else {
          postData[k] = v;
        }
      }
    } else if (contentType.includes("application/json")) {
      postData = await req.json();
    }

    console.log("Post data:", postData);

    const newPost = new Post(postData);
    await newPost.save();

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("POST /api/posts error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: String(error) },
      { status: 500 }
    );
  }
}