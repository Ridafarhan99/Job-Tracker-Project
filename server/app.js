import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("returning from get response");
});

app.listen(PORT, () => {
  console.log("server is running!");
});
