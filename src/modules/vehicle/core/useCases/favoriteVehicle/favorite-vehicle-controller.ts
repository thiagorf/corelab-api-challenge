import { Request, Response } from "express";
import { favoriteVehicleUseCase } from "./favorite-vehicle";

export class FavoriteVehicleController {
    async handle(request: Request, response: Response) {
        const vehicle_id = request.params.id;

        const result = await favoriteVehicleUseCase.perform(vehicle_id);

        return response.json(result);
    }
}
