import { Router } from "express";
import { gettingAllVehicles, getVehicleById } from "../controllers/vehiclesController.js";


const router = Router();

router.get("/vehicles", gettingAllVehicles);
router.get("/vehicle-filter", getVehicleById);


export default router;

