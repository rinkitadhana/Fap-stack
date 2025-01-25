import { Request, Response } from "express"
import Post from "../models/post-model"
import errorHandler from "../utils/errorHandler"

const postHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { avatar, author, link } = req.body
    if (!avatar || !author || !link) {
      res.status(400).json({ message: "Missing credentials!" })
      return
    }

    const post = await Post.findOne({ link })
    if (post) {
      res.status(400).json({ message: "Post already exists!" })
      return
    }

    const newPost = new Post({
      avatar,
      author,
      link,
    })
    newPost.save()

    res.status(200).json({ message: "Post created successfully!" })
  } catch (error) {
    errorHandler(res, error)
  }
}

export { postHandler }
