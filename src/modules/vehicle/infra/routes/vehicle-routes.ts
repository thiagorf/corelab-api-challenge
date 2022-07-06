import { Router } from "express";
import { createVehicleController } from "../../core/useCases/createVehicle";

const vehicleRoutes = Router();

vehicleRoutes.post("/", createVehicleController.handle);

export { vehicleRoutes };
