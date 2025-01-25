import { Request, Response } from "express"
import { IPost, Post } from "../models/post-model"
import errorHandler from "../utils/errorHandler"

const postHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { avatar, username, link } = req.body
    if (!avatar || !username || !link) {
      res.status(400).json({ message: "Missing credentials!" })
      return
    }

    const post = await Post.findOne<IPost>({ link })
    if (post) {
      res.status(400).json({ message: "Post already exists!" })
      return
    }

    const newPost = new Post({
      avatar,
      username,
      link,
    })
    newPost.save()

    res.status(200).json({ message: "Post created successfully!" })
  } catch (error) {
    errorHandler(res, error)
  }
}

export { postHandler }
