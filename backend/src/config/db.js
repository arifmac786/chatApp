import mongoose from "mongoose";
import { mongoUri } from "../config.js";

const connectDb = async () => {
  try {
    const connectionInstanse = await mongoose.connect(mongoUri);
    console.log(
      `Mongo db connection successful !! DB HOST : ${connectionInstanse.connection.host}`
    );
  } catch (error) {
    console.log(`Mongo db Connection ERROR : ${error?.message}`);
  }
};

export default connectDb;
