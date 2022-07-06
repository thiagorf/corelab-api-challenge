import { Vehicle } from "../../../core/entity/vehicle";
import { CreateVehicleDTO } from "../../../core/useCases/createVehicle";
import { UpdateVehicleDTO } from "../../../core/useCases/updateVehicle/update-vehicle-dto";

export interface VehicleRepository {
    createVehicle(data: CreateVehicleDTO): Promise<Vehicle>;
    getOneVehicle(vehicle_id: string): Promise<Vehicle>;
    getAllVehicle(): Promise<Vehicle[]>;
    updateVehicle(data: UpdateVehicleDTO): Promise<Vehicle>;
    deleteVehicle(vehicle_id: string): Promise<Vehicle>;
}
