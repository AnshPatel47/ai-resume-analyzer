import { Router } from "express";
import { createAnalysis } from "../controllers/analysis.controller";
import { verifyJWT } from "../middlewares/auth.middleware";

const router = Router();

router.post("/create", verifyJWT, createAnalysis);

export default router;