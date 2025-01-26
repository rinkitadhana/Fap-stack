import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import router from "./routes/post-route";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("fap-stack");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
