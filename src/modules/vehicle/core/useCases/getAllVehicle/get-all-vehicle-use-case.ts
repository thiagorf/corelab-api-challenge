import { VehicleRepository } from "../../../infra/repositories/interfaces/vehicle-repository";

export class GetAllVehicleUseCase {
    constructor(private vehicleRepository: VehicleRepository) {}

    async perform() {
        const vehicles = await this.vehicleRepository.getAllVehicle();

        return vehicles;
    }
}
