import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../lib/mongodb";
import Post from "../../../../models/Post";

interface Section {
  title: string;
  content: string;
}

interface UpdateData {
  title?: string;
  content?: string;
  sections?: Section[];
  image?: string;
  [key: string]: string | Section[] | undefined;
}

// Dynamic route context type for Next.js App Router
interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, context: RouteContext) {
  const { id } = await context.params; // await the params promise
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await connect();

  try {
    const post = await Post.findById(id);
    if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
    return NextResponse.json(post);
  } catch (error) {
    console.error("GET /api/posts/[id] error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await connect();

  try {
    let updateData: UpdateData = {};
    const contentType = (req.headers.get("content-type") || "").toLowerCase();

    if (contentType.includes("multipart/form-data")) {
      const fd = await req.formData();
      for (const [key, value] of fd.entries()) {
        if (key === "sections" && typeof value === "string") {
          try {
            const parsed = JSON.parse(value) as Section[];
            updateData.sections = Array.isArray(parsed) ? parsed : [];
          } catch (err) {
            console.error("Error parsing sections JSON:", err);
            updateData.sections = [];
          }
        } else if (value instanceof File) {
          const bytes = await value.arrayBuffer();
          updateData.image = Buffer.from(bytes).toString("base64");
        } else if (typeof value === "string") {
          updateData[key] = value;
        }
      }
    } else if (contentType.includes("application/json")) {
      updateData = (await req.json()) as UpdateData;
    }

    const updatedPost = await Post.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedPost) return NextResponse.json({ error: "Post not found" }, { status: 404 });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("PUT /api/posts/[id] error:", error);
    return NextResponse.json({ error: "Internal Server Error", details: String(error) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await connect();

  try {
    const deleted = await Post.findByIdAndDelete(id);
    if (!deleted) return NextResponse.json({ error: "Post not found" }, { status: 404 });
    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    console.error("DELETE /api/posts/[id] error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
