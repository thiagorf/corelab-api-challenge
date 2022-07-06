import { VehicleRepository } from "../../../infra/repositories/interfaces/vehicle-repository";

export class GetOneVehicleUseCase {
    constructor(private vehicleRepository: VehicleRepository) {}

    async perform(vehicle_id: string) {
        const vehicle = await this.vehicleRepository.getOneVehicle(vehicle_id);

        return vehicle;
    }
}
