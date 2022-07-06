import { Router } from "express";
import { asyncErrors } from "../../../../infra/middleware/async-erros";
import { createVehicleController } from "../../core/useCases/createVehicle";
import { getOneVehicleController } from "../../core/useCases/getOneVehicle";

const vehicleRoutes = Router();

vehicleRoutes.post("/", createVehicleController.handle);
vehicleRoutes.get("/:id", getOneVehicleController.handle);

export { vehicleRoutes };
