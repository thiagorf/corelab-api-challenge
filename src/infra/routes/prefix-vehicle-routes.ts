import { Router } from "express";
import { vehicleRoutes } from "../../modules/vehicle/infra/routes/vehicle-routes";

const prefixVehicleRoutes = Router();

prefixVehicleRoutes.use("/vehicles", vehicleRoutes);

export { prefixVehicleRoutes };
