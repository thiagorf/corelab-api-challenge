import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { GetAllVehicleUseCase } from "./get-all-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const getAllVehicleUseCase = new GetAllVehicleUseCase(vehicleRepository);

export { getAllVehicleUseCase };
