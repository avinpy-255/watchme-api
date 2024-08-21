import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ConnectToDatabase from "./config/db";
import { PORT } from "./constansts/env";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors(),
  //TODO:
  //DEFINIG ORIGIN AND CREDENTIALS
);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "hello World",
  });
});

app.use(errorHandler);

app.listen(6660, async () => {
  console.log(`server is running on port ${PORT}`);
  await ConnectToDatabase();
});
