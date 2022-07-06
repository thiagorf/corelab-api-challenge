import { VehicleRepository } from "../../../infra/repositories/interfaces/vehicle-repository";
import { UpdateVehicleDTO } from "./update-vehicle-dto";

export class UpdateVehicleUseCase {
    constructor(private vehicleRepository: VehicleRepository) {}

    async perform(data: UpdateVehicleDTO) {
        const vehicleExist = await this.vehicleRepository.getOneVehicle(data.vehicle_id);

        if (!vehicleExist) {
            throw new Error("Vehicle doesn't exist!");
        }

        const vehicle = await this.vehicleRepository.updateVehicle(data);

        return vehicle;
    }
}
