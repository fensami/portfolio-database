import { NextFunction, Request, Response } from "express";
import status from "http-status";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(status.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.message || "Something Wents wrong!!",
        error: err

    })
    console.log("error kaku");

}

export default globalErrorHandler;