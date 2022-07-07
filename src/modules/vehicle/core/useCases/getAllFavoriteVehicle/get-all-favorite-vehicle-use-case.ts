import { VehicleRepository } from "../../../infra/repositories/interfaces/vehicle-repository";

export class GetAllFavoriteVehicleUseCase {
    constructor(private vehicleRepository: VehicleRepository) {}
    async perform() {
        const vehicles = await this.vehicleRepository.getAllFavoriteVehicles();

        return vehicles;
    }
}
