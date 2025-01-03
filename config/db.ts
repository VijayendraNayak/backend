import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDb = async () => {
  const mongoUri = process.env.MONGO_URI as string; // Type assertion

  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in the environment variables");
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("Database connected successfully!!!");
  } catch (err) {
    console.error(`Error connecting to MongoDB:${err}`);
  }
};

export default connectDb;
