require("dotenv").config();

const app = require("../src/app");
const connectDB = require("../src/config/db");

let dbConnection;

module.exports = async (req, res) => {
  try {
    if (!dbConnection) {
      dbConnection = await connectDB();
    }

    return app(req, res);
  } catch (error) {
    console.error("Vercel Function Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server initialization failed",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
