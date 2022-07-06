import prisma from "../../../../../infra/database/prisma";
import { Vehicle } from "../../../core/entity/vehicle";
import { CreateVehicleDTO } from "../../../core/useCases/createVehicle";
import { UpdateVehicleDTO } from "../../../core/useCases/updateVehicle/update-vehicle-dto";
import { VehicleRepository } from "../interfaces/vehicle-repository";

export class PrismaVehicleRepository implements VehicleRepository {
    async createVehicle(data: CreateVehicleDTO): Promise<Vehicle> {
        const vehicle = await prisma.vehicle.create({
            data,
        });

        return vehicle;
    }

    async getOneVehicle(vehicle_id: string): Promise<Vehicle> {
        const vehicle = await prisma.vehicle.findUnique({
            where: {
                id: vehicle_id,
            },
        });

        return vehicle;
    }

    async getAllVehicle(): Promise<Vehicle[]> {
        const vehicles = await prisma.vehicle.findMany();

        return vehicles;
    }

    async updateVehicle(data: UpdateVehicleDTO): Promise<Vehicle> {
        const { vehicle_id, ...newData } = data;

        const vehicle = await prisma.vehicle.update({
            where: {
                id: vehicle_id,
            },
            data: newData,
        });

        return vehicle;
    }
}
