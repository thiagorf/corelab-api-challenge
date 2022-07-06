import { Router } from "express";
import { prefixVehicleRoutes } from "./prefix-vehicle-routes";

const resources = [prefixVehicleRoutes];

const v1 = Router();

resources.forEach((resource) => v1.use("/v1", resource));

export { v1 };
