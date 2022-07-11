import prisma from "../../../../../infra/database/prisma";
import { Vehicle } from "../../../core/entity/vehicle";
import { CreateVehicleDTO } from "../../../core/useCases/createVehicle";
import { FilterVehicleParams } from "../../../core/useCases/filterVehicle/filter-vehicle-params";
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
        const vehicles = await prisma.vehicle.findMany({
            where: {
                favorite: false,
            },
        });

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

    async deleteVehicle(vehicle_id: string): Promise<Vehicle> {
        const vehicle = await prisma.vehicle.delete({
            where: {
                id: vehicle_id,
            },
        });

        return vehicle;
    }

    async favoriteVehicle(vehicle_id: string): Promise<Vehicle> {
        const vehicle = await prisma.vehicle.update({
            where: {
                id: vehicle_id,
            },
            data: {
                favorite: true,
            },
        });

        return vehicle;
    }

    async getAllFavoriteVehicles(): Promise<Vehicle[]> {
        const vehicles = await prisma.vehicle.findMany({
            where: {
                favorite: true,
            },
        });

        return vehicles;
    }

    async unfavoriteVehicle(vehicle_id: string): Promise<Vehicle> {
        const vehicle = await prisma.vehicle.update({
            where: {
                id: vehicle_id,
            },
            data: {
                favorite: false,
            },
        });

        return vehicle;
    }

    async filterVehicles(filters: FilterVehicleParams): Promise<Vehicle[]> {
        const { search, sort } = filters;

        const defaultSort = sort || "asc";

        if (!search) {
            const vehicles = await prisma.vehicle.findMany({
                where: {
                    favorite: false,
                },
                orderBy: {
                    created_at: defaultSort,
                },
            });

            return vehicles;
        }

        const vehicles: Vehicle[] = await prisma.$queryRaw`
            SELECT id, name, description, price, brand, color, year, favorite, plate, created_at FROM "Vehicle"
            WHERE "favorite" = true AND
            "textSearch" @@ to_tsquery(${search + ":*"})
            ORDER BY 
            CASE WHEN ${defaultSort === "asc"} THEN "created_at" END ASC,
            CASE WHEN ${defaultSort === "desc"} THEN "created_at" END DESC
            
        `;

        return vehicles;
    }
}
