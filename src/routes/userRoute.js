import { Router } from "express";
import {
  loginUser,
  checkUserAsRegister,
} from "../controllers/userController.js";

const router = Router();

router.post("/test", checkUserAsRegister);
router.post("/login", loginUser);

export default router;
