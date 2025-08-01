import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import payherRouter from "./routes/payhere";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.use(express.json());

app.use("/payhere", payherRouter);

app.listen(3000, () => {
  console.log("listening...");
});
