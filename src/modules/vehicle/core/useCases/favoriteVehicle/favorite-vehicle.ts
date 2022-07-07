import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { FavoriteVehicleUseCase } from "./favorite-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const favoriteVehicleUseCase = new FavoriteVehicleUseCase(vehicleRepository);

export { favoriteVehicleUseCase };
