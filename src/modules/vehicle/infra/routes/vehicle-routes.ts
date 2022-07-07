import { Router } from "express";
import {
    createVehicleController,
    deleteVehicleController,
    favoriteVehicleController,
    getAllFavoriteVehicleController,
    getAllVehicleController,
    getOneVehicleController,
    unfavoriteVehicleController,
    updateVehicleController,
} from "../../core/useCases";

const vehicleRoutes = Router();

vehicleRoutes.put("/:id/favorites", favoriteVehicleController.handle);
vehicleRoutes.get("/favorites", getAllFavoriteVehicleController.handle);
vehicleRoutes.put("/:id/unfavorites", unfavoriteVehicleController.handle);
vehicleRoutes.post("/", createVehicleController.handle);
vehicleRoutes.get("/:id", getOneVehicleController.handle);
vehicleRoutes.get("/", getAllVehicleController.handle);
vehicleRoutes.put("/:id", updateVehicleController.handle);
vehicleRoutes.delete("/:id", deleteVehicleController.handle);

export { vehicleRoutes };
