import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;

if (!DB_URI || !DB_NAME) {
  throw new Error("No DB found");
}

export async function connectToDb() {
  try {
    await mongoose.connect(DB_URI as string, {
      dbName: DB_NAME,
    });

    console.log("Connected to database...");
  } catch (error) {
    console.log(error);
    throw new Error("Database connection Error");
  }
}
