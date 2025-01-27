import mongoose, { Document } from "mongoose"

interface IStats extends Document {
  like: Number
  dislike: Number
  share: Number
  clicked: Number
}
const postStatsSchema = new mongoose.Schema<IStats>(
  {
    like: Number,
    dislike: Number,
    share: Number,
    clicked: Number,
  },
  { collection: "post-stats" }
)

const PostStats = mongoose.model<IStats>("PostStats", postStatsSchema)

export { PostStats, IStats }
