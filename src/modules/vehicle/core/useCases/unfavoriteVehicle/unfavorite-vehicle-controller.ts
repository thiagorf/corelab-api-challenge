import { Request, Response } from "express";
import { unfavoriteVehicleUseCase } from "./unfavorite-vehicle";

export class UnfavoriteVehicleController {
    async handle(request: Request, response: Response) {
        const vehicle_id = request.params.id;

        const result = await unfavoriteVehicleUseCase.perform(vehicle_id);

        return response.json(result);
    }
}
