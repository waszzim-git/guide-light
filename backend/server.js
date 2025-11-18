import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint for Cloud Run
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({ message: "Guide-Light Backend API" });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Backend listening on port", PORT);
});
