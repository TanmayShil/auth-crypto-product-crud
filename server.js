require("dotenv").config();

const app = require("./src/app.js");
const connectDB = require("./src/config/db.js");

const PORT = process.env.PORT || 6899;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log("Server Started Successfully");
      console.log(`API: http://localhost:${PORT}`);
      console.log(`Swagger: http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();
