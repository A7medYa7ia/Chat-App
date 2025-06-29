import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.DATABASE_URL)
      .then(() => {
        console.log("DB connected successfully");
      })
      .catch((err) => {
        console.log(err.message);
        throw new Error(err.message);
      });
  } catch (error) {
    console.log(error);
  }
};
