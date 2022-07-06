import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { GetOneVehicleController } from "./get-one-vehicle-controller";
import { GetOneVehicleUseCase } from "./get-one-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const getOneVehicleUseCase = new GetOneVehicleUseCase(vehicleRepository);

const getOneVehicleController = new GetOneVehicleController();

export { getOneVehicleUseCase, getOneVehicleController };
