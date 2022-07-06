import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { CreateVehicleController } from "./create-vehicle-controller";
import { CreateVehicleUseCase } from "./create-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const createVehicleUseCase = new CreateVehicleUseCase(vehicleRepository);

const createVehicleController = new CreateVehicleController();

export { createVehicleUseCase, createVehicleController };
