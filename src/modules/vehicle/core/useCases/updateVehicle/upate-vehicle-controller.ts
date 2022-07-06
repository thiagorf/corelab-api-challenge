import { Request, Response } from "express";
import { CreateVehicleDTO } from "../createVehicle";
import { updateVehicleUseCase } from "./update-vehicle";

export class UpdateVehicleController {
    async handle(request: Request, response: Response) {
        const vehicle_id = request.params.id;

        const dto: CreateVehicleDTO = request.body;

        const result = await updateVehicleUseCase.perform({ vehicle_id, ...dto });

        return response.json(result);
    }
}
