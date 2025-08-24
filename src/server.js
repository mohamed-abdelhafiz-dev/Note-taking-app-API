import express from "express";
import cors from "cors";

import "./config/dotenv.config.js";
import connectDB from "./config/db.config.js";
import notesRoutes from "./routes/notes.routes.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import rateLimiter from "./middlewares/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Global process error handlers
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.message);
  process.exit(1);
});
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:", err.message);
  process.exit(1);
});

// Middlewares
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(rateLimiter);
app.use(express.json());

// API Routes
app.use("/api/notes", notesRoutes);

// 404 API handler
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

// Connect DB & start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
