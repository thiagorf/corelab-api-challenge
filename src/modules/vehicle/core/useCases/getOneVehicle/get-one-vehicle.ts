import { PrismaVehicleRepository } from "../../../infra/repositories/implementations/prisma-vehicle-repository";
import { GetOneVehicleUseCase } from "./get-one-vehicle-use-case";

const vehicleRepository = new PrismaVehicleRepository();
const getOneVehicleUseCase = new GetOneVehicleUseCase(vehicleRepository);

export { getOneVehicleUseCase };
