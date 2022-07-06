import { Router } from "express";
import {
    createVehicleController,
    getAllVehicleController,
    getOneVehicleController,
    updateVehicleController,
} from "../../core/useCases";

const vehicleRoutes = Router();

vehicleRoutes.post("/", createVehicleController.handle);
vehicleRoutes.get("/:id", getOneVehicleController.handle);
vehicleRoutes.get("/", getAllVehicleController.handle);
vehicleRoutes.put("/:id", updateVehicleController.handle);

export { vehicleRoutes };
