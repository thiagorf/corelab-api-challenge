import { Vehicle } from "../../../core/entity/vehicle";
import { CreateVehicleDTO } from "../../../core/useCases/createVehicle";

export interface VehicleRepository {
    createVehicle(data: CreateVehicleDTO): Promise<Vehicle>;
}