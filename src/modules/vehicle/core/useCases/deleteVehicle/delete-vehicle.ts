import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { DeleteVehicleController } from "./delete-vehicle-controller";
import { DeleteVehicleUseCase } from "./delete-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const deleteVehicleUseCase = new DeleteVehicleUseCase(vehicleRepository);

const deleteVehicleController = new DeleteVehicleController();

export { deleteVehicleUseCase, deleteVehicleController };
