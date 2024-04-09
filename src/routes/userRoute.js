import { Router } from "express";
import { loginUser, checkUserAsRegister, userDetails } from "../controllers/userController.js";

const router = Router();

router.post("/login", checkUserAsRegister);
router.get("/user-details/", userDetails);

export default router;
