import { postHandler } from "../controllers/post-controller"
import express from "express"

const router = express.Router()

router.post("/post", postHandler)

export default router
