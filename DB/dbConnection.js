import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();
const dbConnection = mongoose.connect(process.env.DB_URL).then(() => {
  console.log("connection is done");
});

export default dbConnection;
