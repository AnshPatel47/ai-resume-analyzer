import { Router } from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller";
import { verifyJWT, AuthRequest } from "../middlewares/auth.middleware";
import { Response } from "express";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyJWT, logoutUser);

router.get("/current-user", verifyJWT, (req: AuthRequest, res: Response) => {
  res.status(200).json({ message: "User fetched successfully", user: req.user });
});

export default router;