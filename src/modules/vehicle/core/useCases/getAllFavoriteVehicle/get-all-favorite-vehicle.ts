import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { GetAllFavoriteVehicleUseCase } from "./get-all-favorite-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const getAllFavoriteVehicleUseCase = new GetAllFavoriteVehicleUseCase(vehicleRepository);

export { getAllFavoriteVehicleUseCase };
