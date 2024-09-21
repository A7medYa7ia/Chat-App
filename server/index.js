import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
  console.log("server running");
});

mongoose.connect(DATABASE_URL).then(() => {
  console.log("DB connected successfully");
});
