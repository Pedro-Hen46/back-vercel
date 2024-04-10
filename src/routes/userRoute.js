import { Router } from "express";
import { loginUser, checkUserAsRegister, userDetails, checkUserhaveAKey } from "../controllers/userController.js";

const router = Router();

router.post("/login", loginUser);
router.get("/user-details", userDetails);
router.post("/checkuserhaveakey", checkUserhaveAKey);


export default router;
