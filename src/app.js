const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Vercel Express API is working",
  });
});

module.exports = app;
