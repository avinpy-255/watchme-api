import "dotenv/config";
import express from "express";
import ConnectToDatabase from "./config/db";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "hello World",
  });
});

app.listen(6660, async () => {
  console.log(`server is running on port 6660`);
  await ConnectToDatabase();
});
