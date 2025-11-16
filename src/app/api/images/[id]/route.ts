import connect from "../../../../lib/mongodb";
import Post from "../../../../models/Post";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: any }) {
  await connect();
  const { id } = await params;
  const post = await Post.findById(id).lean();
  if (!post || !post.image) return new Response("Not found", { status: 404 });

  const b64 = String(post.image);
  const mime = b64.startsWith("/9j/") ? "image/jpeg" : "image/png";
  const buffer = Buffer.from(b64.replace(/^data:.*;base64,/, ""), "base64");

  return new Response(buffer, { headers: { "Content-Type": mime } });
}