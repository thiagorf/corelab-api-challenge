import { Router } from "express";
import {
    createVehicleController,
    deleteVehicleController,
    getAllVehicleController,
    getOneVehicleController,
    updateVehicleController,
} from "../../core/useCases";

const vehicleRoutes = Router();

vehicleRoutes.post("/", createVehicleController.handle);
vehicleRoutes.get("/:id", getOneVehicleController.handle);
vehicleRoutes.get("/", getAllVehicleController.handle);
vehicleRoutes.put("/:id", updateVehicleController.handle);
vehicleRoutes.delete("/:id", deleteVehicleController.handle);

export { vehicleRoutes };
