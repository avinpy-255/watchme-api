import mongoose from "mongoose";
import { MONGO_URI } from "../constansts/env";

const ConnectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("connected to database");
  } catch (error) {
    console.log("Could not set connection TO Database", error);
    process.exit(1);
  }
};

export default ConnectToDatabase;
