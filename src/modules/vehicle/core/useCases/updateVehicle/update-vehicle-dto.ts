import { CreateVehicleDTO } from "../createVehicle";

export interface UpdateVehicleDTO extends CreateVehicleDTO {
    vehicle_id: string;
}
