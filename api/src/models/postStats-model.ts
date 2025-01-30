import mongoose, { Document, Schema } from "mongoose"

interface IStats extends Document {
  postId: Schema.Types.ObjectId
  like: number
  dislike: number
  share: number
  click: number
  report: number
}
const postStatsSchema = new mongoose.Schema<IStats>(
  {
    postId: Schema.Types.ObjectId,
    like: {
      type: Number,
      default: 0,
    },
    dislike: {
      type: Number,
      default: 0,
    },
    share: {
      type: Number,
      default: 0,
    },
    click: {
      type: Number,
      default: 0,
    },
    report: {
      type: Number,
      default: 0,
    },
  },
  { collection: "post-stats" }
)

const PostStats = mongoose.model<IStats>("PostStats", postStatsSchema)

export default PostStats
