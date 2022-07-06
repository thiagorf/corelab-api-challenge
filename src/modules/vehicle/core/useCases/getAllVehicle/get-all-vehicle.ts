import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { GetAllVehicleController } from "./get-all-vehicle-controller";
import { GetAllVehicleUseCase } from "./get-all-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const getAllVehicleUseCase = new GetAllVehicleUseCase(vehicleRepository);

const getAllVehicleController = new GetAllVehicleController();

export { getAllVehicleUseCase, getAllVehicleController };
