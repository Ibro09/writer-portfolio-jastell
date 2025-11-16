import connect from "../../../../lib/mongodb";
import Post from "../../../../models/Post";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  id: string;
}

// Define the shape of a Post document (leaned)
interface PostLean {
  _id: string;
  title?: string;
  content?: string;
  image?: string; // base64
  sections?: { title: string; content: string }[];
  [key: string]: string | number | boolean | undefined | { title: string; content: string }[]; // replace any
}

// Context type for Next.js App Router
interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  if (!id) return new NextResponse("Missing id", { status: 400 });

  await connect();

  const post = await Post.findById(id).lean<PostLean>();
  if (!post || !post.image) return new NextResponse("Not found", { status: 404 });

  const b64 = post.image;
  const mime = b64.startsWith("/9j/") ? "image/jpeg" : "image/png";
  const buffer = Buffer.from(b64.replace(/^data:.*;base64,/, ""), "base64");

  return new Response(buffer, { headers: { "Content-Type": mime } });
}
