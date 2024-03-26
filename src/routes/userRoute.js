import { Router } from "express";
import { loginUser, checkUserAsRegister } from "../controllers/userController.js";

const router = Router();

router.post("/login", checkUserAsRegister);

export default router;
