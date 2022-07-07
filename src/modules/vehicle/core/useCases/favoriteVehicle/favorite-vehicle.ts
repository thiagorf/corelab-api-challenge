import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { FavoriteVehicleController } from "./favorite-vehicle-controller";
import { FavoriteVehicleUseCase } from "./favorite-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const favoriteVehicleUseCase = new FavoriteVehicleUseCase(vehicleRepository);

const favoriteVehicleController = new FavoriteVehicleController();

export { favoriteVehicleUseCase, favoriteVehicleController };
