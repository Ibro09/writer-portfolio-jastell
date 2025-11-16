import mongoose, { Schema, model, models } from "mongoose";

const sectionSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { _id: false }
);

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: null },
  sections: [sectionSchema],
  createdAt: { type: Date, default: Date.now },
});

const Post = models.JastellPost || model("JastellPost", postSchema);
export default Post;