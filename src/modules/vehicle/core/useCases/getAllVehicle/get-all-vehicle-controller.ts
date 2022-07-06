import { Request, Response } from "express";
import { getAllVehicleUseCase } from "./get-all-vehicle";

export class GetAllVehicleController {
    async handle(request: Request, response: Response) {
        const result = await getAllVehicleUseCase.perform();

        return response.json(result);
    }
}
