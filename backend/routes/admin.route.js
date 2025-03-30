import express from "express";
import { addDoctor } from "../controllers/admin.controller.js";
import { upload } from "../middlewares/multer.middleware.js";


const adminRouter = express.Router();

// Route to add a doctor (with image upload middleware)
adminRouter.post("/add-doctor", upload.single("image"), addDoctor);

export default adminRouter;
