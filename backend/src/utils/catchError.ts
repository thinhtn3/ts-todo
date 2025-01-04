import { Request, Response, NextFunction } from "express";

type AsyncController = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void>;

const catchError = (controller: AsyncController) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            controller(req, res, next);
        } catch (error) {
            next(error);   
        }
    }
};

export default catchError