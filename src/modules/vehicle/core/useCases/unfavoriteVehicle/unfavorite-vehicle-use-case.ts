import { VehicleRepository } from "../../../infra/repositories/interfaces/vehicle-repository";

export class UnfavoriteVehicleUseCase {
    constructor(private vehicleRepository: VehicleRepository) {}
    async perform(vehicle_id: string) {
        const vehicleExists = await this.vehicleRepository.getOneVehicle(vehicle_id);

        if (!vehicleExists) {
            throw new Error("Invalid or inexisting vehicle");
        }

        if (vehicleExists.favorite === false) {
            throw new Error("Vehicle is not favorite");
        }

        const vehicle = await this.vehicleRepository.unfavoriteVehicle(vehicle_id);

        return vehicle;
    }
}
