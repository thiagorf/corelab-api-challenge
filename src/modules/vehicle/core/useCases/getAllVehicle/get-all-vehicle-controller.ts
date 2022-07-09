import { Request, Response } from "express";
import { filterVehicleUseCase } from "../filterVehicle";
import { FilterVehicleParams } from "../filterVehicle/filter-vehicle-params";
import { getAllVehicleUseCase } from "./get-all-vehicle";

export class GetAllVehicleController {
    async handle(request: Request, response: Response) {
        const query: FilterVehicleParams = request.query;
        const requestQuery = Object.keys(query);

        if (requestQuery.length != 0) {
            const result = await filterVehicleUseCase.perform(query);

            return response.json(result);
        }

        const result = await getAllVehicleUseCase.perform();

        return response.json(result);
    }
}
