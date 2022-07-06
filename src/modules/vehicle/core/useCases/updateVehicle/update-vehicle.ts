import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { UpdateVehicleController } from "./upate-vehicle-controller";
import { UpdateVehicleUseCase } from "./update-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const updateVehicleUseCase = new UpdateVehicleUseCase(vehicleRepository);

const updateVehicleController = new UpdateVehicleController();

export { updateVehicleUseCase, updateVehicleController };
