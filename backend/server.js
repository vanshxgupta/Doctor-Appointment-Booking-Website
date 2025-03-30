import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import { uploadonCloudinary } from "./utils/cloudinary.js";
import adminRouter from "./routes/admin.route.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Connect to Database
connectDB();

//Connect Cloudinary
uploadonCloudinary()

//api endpoints
app.use("/api/admin", adminRouter);
//localhost:4000/api/admin/add-doctor

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});