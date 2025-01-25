import { Response } from "express"

const errorHandler = async (res: Response, error: Error) => {
  console.log(error)
  res.status(500).json("Server Error!")
}

export default errorHandler
