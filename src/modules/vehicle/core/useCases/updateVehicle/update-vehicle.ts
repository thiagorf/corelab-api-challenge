import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { UpdateVehicleUseCase } from "./update-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const updateVehicleUseCase = new UpdateVehicleUseCase(vehicleRepository);

export { updateVehicleUseCase };
