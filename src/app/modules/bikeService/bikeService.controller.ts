import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../share/sendResponse";
import { bikeServicing } from "./bikeService.service";
import HttpStatus from 'http-status';
import catchAsync from "../../share/catchAsync";


const createBikeServicing = catchAsync(async (req: Request, res: Response) => {


    const result = await bikeServicing.createBikeServicing(req.body)

    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Service record created successfully",
        data: {
            serviceId: result.id,
            bikeId: result.bikeId,
            serviceData: result.serviceDate,
            completionDate: result.completionDate,
            description: result.description,
            status: result.status

        }
    })



})

// Get all
const getAllBikeServicingFromDb: RequestHandler = catchAsync(async (req: Request, res: Response) => {

    const result = await bikeServicing.getAllBikeServicingFromDb();

    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: result.result
    })


})

// single 
const getSingleBikeServicingFromDb: RequestHandler = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;


    const result = await bikeServicing.getBikeServicingIdFromDb(id);


    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result
    })


})


export const bikeServicingController = {
    createBikeServicing,
    getAllBikeServicingFromDb,
    getSingleBikeServicingFromDb
}