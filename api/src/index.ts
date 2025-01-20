import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()
const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.send("fap-stack")
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
