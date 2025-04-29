import { Request, RequestHandler, Response } from "express";
import { bikeServices } from "./bike.service";
import catchAsync from "../../share/catchAsync";
import HttpStatus from 'http-status';
import sendResponse from "../../share/sendResponse";

const createBike = async (req: Request, res: Response) => {


    try {
        const result = await bikeServices.createBike(req.body)

        res.status(200).json({
            success: true,
            message: "Bike added successfully",
            data: {
                bikeId: result.id,
                brand: result.brand,
                model: result.model,
                year: result.year,
                customerId: result.customerId
            }
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err?.name || "something went wrong",
            error: err
        })
    }

}

// Get all
const getAllBikesFromDb: RequestHandler = catchAsync(async (req: Request, res: Response) => {

    const result = await bikeServices.getAllBikeFromDb();

    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: result.result
    })


})
// single 
const getSingleBikeFromDb: RequestHandler = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;


    const result = await bikeServices.getBikeIdFromDb(id);


    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result
    })


})
export const bikeController = {
    createBike,
    getAllBikesFromDb,
    getSingleBikeFromDb
}