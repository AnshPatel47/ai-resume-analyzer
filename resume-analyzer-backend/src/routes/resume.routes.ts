import { Router } from "express";
import { uploadResume } from "../controllers/resume.controller";
import { upload } from "../middlewares/upload.middleware";
import { verifyJWT } from "../middlewares/auth.middleware";

const router = Router();

router.post("/upload", verifyJWT, upload.single("resume"), uploadResume);

export default router;