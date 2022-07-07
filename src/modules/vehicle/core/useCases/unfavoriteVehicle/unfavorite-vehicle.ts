import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { UnfavoriteVehicleUseCase } from "./unfavorite-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const unfavoriteVehicleUseCase = new UnfavoriteVehicleUseCase(vehicleRepository);

export { unfavoriteVehicleUseCase };
