import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../lib/mongodb";
import Post from "../../../../models/Post";

export async function GET(
  req: NextRequest,
  { params }: { params: any }
) {
  await connect();
  const { id } = await params;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  try {
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    console.error("GET /api/posts/[id] error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: any }
) {
  await connect();
  const { id } = await params;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  try {
    let updateData: any = {};
    const contentType = (req.headers.get("content-type") || "").toLowerCase();

    if (contentType.includes("multipart/form-data")) {
      const fd = await req.formData();
      for (const [k, v] of fd.entries()) {
        if (k === "sections") {
          try {
            // Parse sections JSON string to actual array
            const parsed = JSON.parse(v as string);
            updateData[k] = Array.isArray(parsed) ? parsed : [];
          } catch (parseErr) {
            console.error("Error parsing sections JSON:", parseErr);
            updateData[k] = [];
          }
        } else if (v instanceof File) {
          const bytes = await v.arrayBuffer();
          updateData[k] = Buffer.from(bytes).toString("base64");
        } else {
          updateData[k] = v;
        }
      }
    } else if (contentType.includes("application/json")) {
      updateData = await req.json();
    }

    console.log("Update data:", updateData);

    const updatedPost = await Post.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("PUT /api/posts/[id] error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: String(error) },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: any }
) {
  await connect();
  const { id } = await params;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  try {
    const deleted = await Post.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    console.error("DELETE /api/posts/[id] error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
