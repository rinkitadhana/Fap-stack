import mongoose, { Document } from "mongoose"

interface IPost extends Document {
  avatar: string
  username: string
  link: string
  thumbnail: string
  banner: string
  createdAt: Date
  UpdatedAt: Date
}

const postSchema = new mongoose.Schema<IPost>(
  {
    avatar: {
      type: String,
    },
    username: {
      type: String,
    },
    link: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    thumbnail: {
      type: String,
    },
    banner: {
      type: String,
    },
  },
  { timestamps: true, collection: "post-data" }
)

const Post = mongoose.model<IPost>("Post", postSchema)

export default Post

export { IPost }
