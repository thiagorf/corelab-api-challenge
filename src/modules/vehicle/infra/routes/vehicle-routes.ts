import { Router } from "express";
import { createVehicleController } from "../../core/useCases/createVehicle";
import { getAllVehicleController } from "../../core/useCases/getAllVehicle";
import { getOneVehicleController } from "../../core/useCases/getOneVehicle";
import { updateVehicleController } from "../../core/useCases/updateVehicle/update-vehicle";

const vehicleRoutes = Router();

vehicleRoutes.post("/", createVehicleController.handle);
vehicleRoutes.get("/:id", getOneVehicleController.handle);
vehicleRoutes.get("/", getAllVehicleController.handle);
vehicleRoutes.put("/:id", updateVehicleController.handle);

export { vehicleRoutes };
