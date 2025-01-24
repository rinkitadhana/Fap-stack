import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database"
dotenv.config()
const app = express()
const PORT = process.env.PORT

connectDB()

app.get("/", (req, res) => {
  res.send("fap-stack")
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
