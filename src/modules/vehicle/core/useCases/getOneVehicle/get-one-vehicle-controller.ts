import { Request, Response } from "express";
import { getOneVehicleUseCase } from "./get-one-vehicle";

export class GetOneVehicleController {
    async handle(request: Request, response: Response) {
        const vehicle_id = request.params.id;

        const result = await getOneVehicleUseCase.perform(vehicle_id);

        return response.json(result);
    }
}
