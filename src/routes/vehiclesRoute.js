import { Router } from "express";
import { gettingAllVehicles } from "../controllers/vehiclesController.js";


const router = Router();

router.get("/vehicles", gettingAllVehicles);

export default router;

