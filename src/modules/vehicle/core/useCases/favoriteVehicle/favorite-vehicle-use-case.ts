import { VehicleRepository } from "../../../infra/repositories/interfaces/vehicle-repository";

export class FavoriteVehicleUseCase {
    constructor(private vehicleRepository: VehicleRepository) {}

    async perform(vehicle_id: string) {
        const vehicleExists = await this.vehicleRepository.getOneVehicle(vehicle_id);

        if (!vehicleExists) {
            throw new Error("Invalid or inexisting vehicle");
        }

        const vehicle = await this.vehicleRepository.favoriteVehicle(vehicle_id);

        return vehicle;
    }
}
