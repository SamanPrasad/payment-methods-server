import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import payherRouter from "./routes/payhere";
import { connectToDb } from "./db/dataSource";
dotenv.config();

const app = express();

//connect to database
connectToDb();

//CORS handle
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.use(express.json());

app.use("/payhere", payherRouter);

let val: number[] = [];

app.get("/", (req, res) => {
  res.send("Welcome to Payment Samples...");
});
app.get("/test", (req, res) => {
  res.json(val);
});
app.post("/test", (req, res) => {
  const { num } = req.body;
  val.push(num);
});

app.listen(3000, () => {
  console.log("listening...");
});
