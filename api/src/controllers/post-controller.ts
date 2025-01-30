import { Request, Response } from "express"
import Post from "../models/post-model"
import PostStats from "../models/postStats-model"
import errorHandler from "../utils/errorHandler"

const postHandler = async (req: Request, res: Response) => {
  try {
    const { username, link, avatar, thumbnail, banner } = req.body
    if (!link) {
      res.status(400).json({ message: "Link isn't provided!" })
      return
    }
    const linkCheck = await Post.findOne({ link })
    if (linkCheck) {
      res.status(400).json({ message: "Link already exists" })
      return
    }
    const newPost = new Post({
      username,
      link,
      avatar,
      thumbnail,
      banner,
    })
    await newPost.save()
    const newPostStats = new PostStats({
      postId: newPost._id,
    })
    await newPostStats.save()
    res.status(201).json({
      message: "Post created successfully!",
      post: newPost,
      stats: newPostStats,
    })
  } catch (error) {
    errorHandler(res, error)
  }
}

export { postHandler }
