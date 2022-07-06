import { Request, Response } from "express";
import { deleteVehicleUseCase } from "./delete-vehicle";

export class DeleteVehicleController {
    async handle(request: Request, response: Response) {
        const vehicle_id = request.params.id;

        const result = await deleteVehicleUseCase.perform(vehicle_id);

        return response.json(result);
    }
}
