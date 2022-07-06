import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { DeleteVehicleUseCase } from "./delete-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const deleteVehicleUseCase = new DeleteVehicleUseCase(vehicleRepository);

export { deleteVehicleUseCase };
