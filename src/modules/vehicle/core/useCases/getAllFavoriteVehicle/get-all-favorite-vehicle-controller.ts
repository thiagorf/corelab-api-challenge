import { Request, Response } from "express";
import { getAllFavoriteVehicleUseCase } from "./get-all-favorite-vehicle";

export class GetAllFavoriteVehicleController {
    async handle(request: Request, response: Response) {
        const result = await getAllFavoriteVehicleUseCase.perform();

        return response.json(result);
    }
}
