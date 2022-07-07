import { Router } from "express";
import {
    createVehicleController,
    deleteVehicleController,
    favoriteVehicleController,
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
vehicleRoutes.put("/:id/favorite", favoriteVehicleController.handle);

export { vehicleRoutes };
