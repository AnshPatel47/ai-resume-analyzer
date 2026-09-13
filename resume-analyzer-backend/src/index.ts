import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

const PORT = process.env.PORT || 7000;

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});