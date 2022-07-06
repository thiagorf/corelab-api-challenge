import { NextFunction, Request, Response } from "express";

const asyncErrors = (err: Error, request: Request, response: Response, next: NextFunction) => {
    response.status(400);

    return response.json({
        error: err.message,
    });
};

export { asyncErrors };
