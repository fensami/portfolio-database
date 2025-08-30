import { Request, RequestHandler, Response } from "express";
import { userService } from "./user.service";
// import sendResponse from "../../../shared/sendResponse";
// import catchAsync from "../../../shared/catchAsync";
// import pick from "../../../shared/pick";
import HttpStatus from 'http-status';
import { userFilterAbleFields, userSearchAbleFields } from "./User.constant";
import catchAsync from "../../share/catchAsync";
import sendResponse from "../../share/sendResponse";
// import { IAuthUser } from "../../interfaces/common";

/*=====================
  Create Admin Controller
  =====================*/
const createAdmin = async (req: Request, res: Response) => {

    try {
        const result = await userService.createAdmin(req);

        res.status(200).json({
            success: true,
            message: "Admin Created Successfully",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err?.name || "something went wrong",
            error: err
        })
    }

}
/*=====================
  Create Doctor Controller
  =====================*/
const createDoctor = async (req: Request, res: Response) => {

    try {
        const result = await userService.createDoctor(req);

        res.status(200).json({
            success: true,
            message: "Doctor Created Successfully",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err?.name || "something went wrong",
            error: err
        })
    }

}

/*=====================
  Create Patient Controller
  =====================*/
const createPatient = async (req: Request, res: Response) => {

    // console.log(req.body);
    try {
        const result = await userService.createPatient(req);
        // console.log(result);


        res.status(200).json({
            success: true,
            message: "Patient Created Successfully",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err?.name || "something went wrong",
            error: err
        })
    }

}

/*=====================
  Get All User From Db
  =====================*/
// const getAllFromDb = catchAsync(async (req: Request, res: Response) => {

//     const filters = pick(req.query, userFilterAbleFields);

//     const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder'])

//     const result = await userService.getAllUserFromDb(filters, options);

//     sendResponse(res, {
//         statusCode: HttpStatus.OK,
//         success: true,
//         message: "Users Data Fetched !",
//         meta: result.meta,
//         data: result.result
//     })


// })

/*** Update The User Status Controller ***/
// const changeProfileStatus = catchAsync(async (req: Request, res: Response) => {

//     const { id } = req.params;

//     const result = await userService.changeProfileStatus(id, req.body)


//     sendResponse(res, {
//         statusCode: HttpStatus.OK,
//         success: true,
//         message: "User Profile Status Changed !",
//         data: result
//     })


// })
// const getMyProfile = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {

//     const user = req.user;

//     // const { id } = req.params;

//     const result = await userService.getMyProfile(user as IAuthUser)


//     sendResponse(res, {
//         statusCode: HttpStatus.OK,
//         success: true,
//         message: "My Profile Data Fetched ! ",
//         data: result
//     })


// })


// const updateMyProfile = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {

//     const user = req.user;

//     const result = await userService.updateMyProfile(user as IAuthUser, req)


//     sendResponse(res, {
//         statusCode: HttpStatus.OK,
//         success: true,
//         message: "My Profile Updated ! ",
//         data: result
//     })


// })

export const userController = {
    createAdmin,
    createDoctor,
    createPatient,
    // getAllFromDb,
    // changeProfileStatus,
    // getMyProfile,
    // updateMyProfile
}