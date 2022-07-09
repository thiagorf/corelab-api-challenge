import { VehicleRepository } from "../../../infra/repositories/interfaces/vehicle-repository";
import { FilterVehicleParams } from "./filter-vehicle-params";

export class FilterVehicleUseCase {
    constructor(private vehicleRepository: VehicleRepository) {}

    async perform(params: FilterVehicleParams) {
        const vehicle = await this.vehicleRepository.filterVehicles(params);

        return vehicle;
    }
}
