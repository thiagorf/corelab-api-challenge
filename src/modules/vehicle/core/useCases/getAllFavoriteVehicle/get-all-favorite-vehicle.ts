import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { GetAllFavoriteVehicleController } from "./get-all-favorite-vehicle-controller";
import { GetAllFavoriteVehicleUseCase } from "./get-all-favorite-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const getAllFavoriteVehicleUseCase = new GetAllFavoriteVehicleUseCase(vehicleRepository);

const getAllFavoriteVehicleController = new GetAllFavoriteVehicleController();

export { getAllFavoriteVehicleUseCase, getAllFavoriteVehicleController };
