import prisma from "../../../../../infra/database/prisma";
import { Vehicle } from "../../../core/entity/vehicle";
import { CreateVehicleDTO } from "../../../core/useCases/createVehicle";
import { VehicleRepository } from "../interfaces/vehicle-repository";

export class PrismaVehicleRepository implements VehicleRepository {
    async createVehicle(data: CreateVehicleDTO): Promise<Vehicle> {
        const result = await prisma.vehicle.create({
            data,
        });

        return result;
    }
}
