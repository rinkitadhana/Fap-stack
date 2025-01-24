import mongoose, { Document } from "mongoose"

interface IPost extends Document {
  avatar: string
  author: string
  link: string
  createdAt: Date
  UpdatedAt: Date
}

const postSchema = new mongoose.Schema<IPost>(
  {
    avatar: {
      type: String,
    },
    author: {
      type: String,
    },
    link: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
  },
  { timestamps: true, collection: "post-data" }
)

const Post = mongoose.model<IPost>("Post", postSchema)

export default Post
