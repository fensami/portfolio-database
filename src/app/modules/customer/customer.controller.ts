import { NextFunction, Request, RequestHandler, Response } from "express"
import { customerService } from "./customer.service"
import sendResponse from "../../share/sendResponse";
import catchAsync from "../../share/catchAsync";
import HttpStatus from 'http-status';

const createCustomer = async (req: Request, res: Response) => {


    try {
        const result = await customerService.createCustomer(req.body)

        res.status(200).json({
            success: true,
            message: "Customer created successfully",
            data: {
                customerId: result.id,
                name: result.name,
                email: result.email,
                phone: result.phone,
                createdAt: result.createdAt
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
const getAllCustomersFromDb: RequestHandler = catchAsync(async (req: Request, res: Response) => {


    const result = await customerService.getAllCustomerFromDb();

    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result.result
    })


})

// single 
const getIdFromDb: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await customerService.getByIdFromDb(id);

    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result
    })


})


// updated
const customerDataUpdated = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;


    const result = await customerService.updateCustomerIntoDb(id, req.body);


    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Customer updated successfully",
        data: result
    })

})


// Soft delete From db
const customerDeleteFromDb = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;

    const result = await customerService.deleteCustomerFromDb(id);

    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Customer deleted successfully"
    })


})

export const customerController = {
    createCustomer,
    getAllCustomersFromDb,
    getIdFromDb,
    customerDataUpdated,
    customerDeleteFromDb
}