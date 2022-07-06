import { VehicleRepository } from "../../../infra/repositories/interfaces/vehicle-repository";
import { CreateVehicleDTO } from "./create-vehicle-dto";

export class CreateVehicleUseCase {
    constructor(private vehicleRepository: VehicleRepository) {}
    async perform(data: CreateVehicleDTO) {
        const vehicle = await this.vehicleRepository.createVehicle(data);

        return vehicle;
    }
}
