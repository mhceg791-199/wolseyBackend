import express from "express";
import morgan from "morgan";
import { configDotenv } from "dotenv";
import cors from "cors";
import { init } from "./src/index.router.js";
import dbConnection from "./DB/dbConnection.js";
configDotenv();
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

app.use(express.json());

app.use(morgan("combined"));
dbConnection;

init(app);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res
    .status(statusCode)
    .json({ message: err.message, statusCode, errors: err.errors });
});

const port = process.env.PORT || 3010;
app.listen(port, "0.0.0.0", () => {
  console.log(`server is running on port : ${port}`);
});
