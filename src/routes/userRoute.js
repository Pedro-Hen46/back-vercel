import { Router } from "express";
import { loginUser, checkUserAsRegister, userDetails, checkUserhaveAKey, userConnection } from "../controllers/userController.js";

const router = Router();

router.post("/login", loginUser);
router.post("/checkuserhaveakey", checkUserhaveAKey);

router.post("/connection", userConnection);
router.get("/user-details", userDetails);


export default router;
