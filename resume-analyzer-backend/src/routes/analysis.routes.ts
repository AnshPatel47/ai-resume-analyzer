import { Router } from "express";
import { createAnalysis, getAnalysisById } from "../controllers/analysis.controller";
import { verifyJWT } from "../middlewares/auth.middleware";

const router = Router();

router.post("/create", verifyJWT, createAnalysis);
router.get("/:id", verifyJWT, getAnalysisById);

export default router;