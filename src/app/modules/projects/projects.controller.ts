import { NextFunction, Request, RequestHandler, Response } from "express";
// import catchAsync from "../../share/catchAsync";
import HttpStatus from 'http-status';
// import sendResponse from "../../share/sendResponse";
import { projectServices } from "./projects.service";
import catchAsync from "../../share/catchAsync";
import sendResponse from "../../share/sendResponse";


/**==================
   Create Project
   ==================**/
const createProject = async (req: Request, res: Response) => {


    try {
        const result = await projectServices.createProject(req.body)

        res.status(200).json({
            success: true,
            message: "Project added successfully",
            data: result
            // data: {
            //     bikeId: result.id,
            //     brand: result.brand,
            //     model: result.model,
            //     year: result.year,
            //     customerId: result.customerId
            // }
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err?.name || "something went wrong",
            error: err
        })
    }

}

/**==================
    Get All
   ==================**/
const getAllProjectsFromDb: RequestHandler = catchAsync(async (req: Request, res: Response) => {

    const result = await projectServices.getAllProjectsFromDb();

    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: result.result
    })


})
/**==================
   Single Id Get
   ==================**/
const getSingleProjectFromDb: RequestHandler = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;


    const result = await projectServices.getProjectIdFromDb(id);


    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Product fetched successfully",
        data: result
    })


})
/**==================
   Delete
   ==================**/
const projectDeleteFromDb = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;

    const result = await projectServices.deleteProjectFromDb(id);

    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Project deleted successfully"
    })


})

/**==================
   Update
   ==================**/
const projectDataUpdated = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;


    const result = await projectServices.updateProjectIntoDb(id, req.body);


    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Project updated successfully",
        data: result
    })

})
export const projectController = {
    createProject,
    getAllProjectsFromDb,
    getSingleProjectFromDb,
    projectDeleteFromDb,
    projectDataUpdated
}