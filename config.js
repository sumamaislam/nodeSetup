import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()
const url = process.env.MONGO_URI
console.log(url);

export const connectionDataBase= mongoose.connect(url)