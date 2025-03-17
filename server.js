import express from "express";
import morgan from "morgan";
import { configDotenv } from "dotenv";
import cors from "cors";
import { init } from "./src/index.router.js";
import dbConnection from "./DB/dbConnection.js";
configDotenv();
const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan("combined"));
dbConnection;
init(app);

// Error handling middleware
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   res
//     .status(statusCode)
//     .json({ message: err.message, statusCode, errors: err.errors });
// });
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
