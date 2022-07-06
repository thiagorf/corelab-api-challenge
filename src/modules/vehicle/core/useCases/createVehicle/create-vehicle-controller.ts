import { Request, Response } from "express";
import { createVehicleUseCase } from "./create-vehicle";
import { CreateVehicleDTO } from "./create-vehicle-dto";

export class CreateVehicleController {
    async handle(request: Request, response: Response) {
        const dto: CreateVehicleDTO = request.body;

        const result = await createVehicleUseCase.perform(dto);

        return response.json(result);
    }
}
