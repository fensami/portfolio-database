import { Request, Response } from "express";
import HttpStatus from 'http-status';
import { authService } from "./auth.service";
import catchAsync from "../../share/catchAsync";
import sendResponse from "../../share/sendResponse";


const loginUser = catchAsync(async (req: Request, res: Response) => {

    // console.log(req.body);


    const result = await authService.login(req.body);
    console.log(result);


    const { refreshToken } = result;

    res.cookie('refreshToken', refreshToken, {
        secure: false,
        httpOnly: true
    })

    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "login successfully",
        data: {
            accessToken: result.accessToken,
            needsPasswordChange: result.needPasswordChange
        }
    })
})


const refreshToken = catchAsync(async (req: Request, res: Response) => {

    const { refreshToken } = req.cookies;

    console.log(refreshToken);




    const result = await authService.refreshToken(refreshToken);



    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "login successfully",
        data: result
        // data: {
        //     accessToken: result.accessToken,
        //     needsPasswordChange: result.needPasswordChange
        // }
    })
})

// Change Password
// const changePassword = catchAsync(async (req: Request & { user?: any }, res: Response) => {

//     const user = req.user


//     const result = await authService.changePassword(user, req.body);



//     sendResponse(res, {
//         statusCode: HttpStatus.OK,
//         success: true,
//         message: "Password Changes successfully",
//         data: result
//     })
// })

// Forgot Password
// const forgotPassword = catchAsync(async (req: Request, res: Response) => {

//     const result = await authService.forgotPassword(req.body);

//     sendResponse(res, {
//         statusCode: HttpStatus.OK,
//         success: true,
//         message: "Check Your Email !",
//         data: null
//     })
// })
// Reset Password
// const resetPassword = catchAsync(async (req: Request, res: Response) => {

//     const token = req.headers.authorization || "";

//     await authService.resetPassword(token, req.body);

//     sendResponse(res, {
//         statusCode: HttpStatus.OK,
//         success: true,
//         message: "Password Reset",
//         data: null
//     })
// })

export const authController = {
    loginUser,
    refreshToken,
    // changePassword,
    // forgotPassword,
    // resetPassword
}