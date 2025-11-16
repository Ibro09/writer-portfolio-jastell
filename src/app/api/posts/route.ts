import { NextRequest, NextResponse } from "next/server";
import connect from "../../../lib/mongodb";
import Post from "../../../models/Post";

// Define Post fields
interface Section {
  title: string;
  content: string;
}

interface PostData {
  title?: string;
  content?: string;
  sections?: Section[];
  image?: string; // base64
  [key: string]: string | Section[] | undefined; // allow other string fields
}

export async function GET(req: NextRequest) {
  const start = Date.now();
  try {
    await connect();
    console.log("Connected in", Date.now() - start, "ms");

    const url = new URL(req.url);
    const limit = Math.min(Number(url.searchParams.get("limit") || "20"), 200);
    const page = Math.max(Number(url.searchParams.get("page") || "1"), 1);
    const skip = (page - 1) * limit;

    // Exclude image for speed
    const posts = await Post.find({}, { image: 0 })
      .skip(skip)
      .limit(limit)
      .lean()
      .maxTimeMS(10000);

    console.log("Query finished in", Date.now() - start, "ms, returned:", posts.length);
    return NextResponse.json(posts);
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
    let postData: PostData = {};
    const contentType = (req.headers.get("content-type") || "").toLowerCase();

    if (contentType.includes("multipart/form-data")) {
      const fd = await req.formData();
      for (const [key, value] of fd.entries()) {
        if (key === "sections" && typeof value === "string") {
          try {
            const parsed = JSON.parse(value) as Section[];
            postData.sections = Array.isArray(parsed) ? parsed : [];
          } catch (err) {
            console.error("Error parsing sections JSON:", err);
            postData.sections = [];
          }
        } else if (value instanceof File) {
          const bytes = await value.arrayBuffer();
          postData.image = Buffer.from(bytes).toString("base64");
        } else if (typeof value === "string") {
          postData[key] = value;
        }
      }
    } else if (contentType.includes("application/json")) {
      postData = (await req.json()) as PostData;
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
