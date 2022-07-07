import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { UnfavoriteVehicleController } from "./unfavorite-vehicle-controller";
import { UnfavoriteVehicleUseCase } from "./unfavorite-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const unfavoriteVehicleUseCase = new UnfavoriteVehicleUseCase(vehicleRepository);

const unfavoriteVehicleController = new UnfavoriteVehicleController();

export { unfavoriteVehicleUseCase, unfavoriteVehicleController };
