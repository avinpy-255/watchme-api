import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(6660, () => {
  console.log(`server is running on port 6660`);
});
