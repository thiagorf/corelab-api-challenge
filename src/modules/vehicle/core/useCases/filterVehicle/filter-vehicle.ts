import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { FilterVehicleUseCase } from "./filter-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const filterVehicleUseCase = new FilterVehicleUseCase(vehicleRepository);

export { filterVehicleUseCase };
