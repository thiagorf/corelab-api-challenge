import { VehicleRepository } from "../../../infra/repositories/interfaces/vehicle-repository";

export class DeleteVehicleUseCase {
    constructor(private vehicleRepository: VehicleRepository) {}

    async perform(vehicle_id: string) {
        const vehicleExists = await this.vehicleRepository.getOneVehicle(vehicle_id);

        if (!vehicleExists) {
            throw new Error("Vehicle doesn't exist!");
        }

        const vehicle = await this.vehicleRepository.deleteVehicle(vehicle_id);

        return vehicle;
    }
}
