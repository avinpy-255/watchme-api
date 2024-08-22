import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ConnectToDatabase from "./config/db";
import { PORT } from "./constansts/env";
import errorHandler from "./middleware/errorHandler";
import { OK } from "./constansts/http";
import authRoutes from "./routes/authRoutes";

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
  res.status(OK).json({
    msg: "hello World",
  });
});

app.use("/api/v1", authRoutes);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`server is running on port ${PORT}`);
  await ConnectToDatabase();
});
