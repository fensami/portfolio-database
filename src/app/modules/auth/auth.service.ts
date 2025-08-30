// import prisma from "../../../shared/prisma";
import * as bcrypt from 'bcrypt';
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
// import { jwtHelper } from "../../../helpers/jwtHelpers";
import { UserStatus } from "../../../../generated/prisma";
import config from "../../../config";
// import emailSender from "./emailSender";
import ApiError from "../../errors/ApiError";
import HttpStatus from 'http-status';
import { jwtHelper } from "../../helpers/jwtHelpers";
import prisma from '../../share/prisma';


const login = async (payload: {
    email: string,
    password: string
}) => {
    // console.log("user login", payload);
    // this is check the user data in database
    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
            status: UserStatus.ACTIVE
        }
    })

    // this is check the correct password
    const isCorrectPassword = await bcrypt.compare(payload.password, userData.password)

    if (!isCorrectPassword) {
        throw new Error("password Incorrect")
    }
    console.log(isCorrectPassword);


    // Access Token (generate the accessToken)
    const accessToken = jwtHelper.generateToken({
        email: userData.email,
        role: userData.role
    },
        config.jwt.jwt_secret as string,
        config.jwt.expires_in as string
    );

    // Refresh Token (generate the RefreshToken)
    const refreshToken = jwtHelper.generateToken({
        email: userData.email,
        role: userData.role
    },
        config.jwt.refresh_token_secret as string,
        config.jwt.refresh_token_expires_in as string
    );

    // console.log("accessToken", accessToken);


    return {
        accessToken,
        refreshToken,
        needPasswordChange: userData.needPasswordChange

    }

}

// Refresh Token
const refreshToken = async (token: string) => {
    let decodedData;
    try {
        decodedData = jwtHelper.verifyToken(token, config.jwt.refresh_token_secret as Secret) as JwtPayload;

    } catch (err) {
        throw new Error("you are not authorized !")
    }

    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            email: decodedData.email,
            status: UserStatus.ACTIVE
        }
    })

    // Access Token
    const accessToken = jwtHelper.generateToken({
        email: userData.email,
        role: userData.role
    },
        config.jwt.jwt_secret as string,
        config.jwt.expires_in as string
    );

    return {
        accessToken,
        needPasswordChange: userData.needPasswordChange

    }

}

// Change password
// const changePassword = async (user: any, payload: any) => {

//     // check the user have user database
//     const userData = await prisma.user.findFirstOrThrow({
//         where: {
//             email: user.email
//         }
//     })

//     //  check the correct password (old password and password)
//     const isCorrectPassword = await bcrypt.compare(payload.oldPassword, userData.password)

//     if (!isCorrectPassword) {
//         throw new Error("password Incorrect")
//     }


//     //  Hash The password using bcrypt
//     const hashPassword: string = await bcrypt.hash(payload.newPassword, 12);


//     // This is update the database and update the new password with hashed
//     await prisma.user.update({
//         where: {
//             email: userData.email
//         },
//         data: {
//             password: hashPassword,
//             needPasswordChange: false
//         }
//     })

//     return {
//         message: "password change successfully"
//     }

// }

//Forgot Password

// const forgotPassword = async (payload: { email: string }) => {

//     const userData = await prisma.user.findFirstOrThrow({
//         where: {
//             email: payload.email,
//             status: UserStatus.ACTIVE
//         }
//     });

//     const resetPasswordToken = jwtHelper.generateToken(
//         { email: userData.email, role: userData.role },
//         config.jwt.reset_password_token as Secret,
//         config.jwt.reset_token_expires_in as string
//     )

//     // http://localhost:3000/forgot-password?email=sami1@gmail.com&token=a;lsdjflj
//     const resetPasswordLink = config.reset_password_link + `?email=${userData.email}&token=${resetPasswordToken}`

//     await emailSender(
//         userData.email,
//         `
//             <div>
//                 <p> Dear User ,</p>
//                     <p> your password reset link
//                         <a href=${resetPasswordLink}> 
//                             <button>
//                                 Reset Password
//                             </button>
//                         </a>
//                     </p>
//             </div>
//             `
//     )

//     console.log(resetPasswordLink);


// }


// reset password
// const resetPassword = async (token: string, payload: { email: string, password: string }) => {

//     const userData = await prisma.user.findUniqueOrThrow({
//         where: {
//             email: payload.email,
//             status: UserStatus.ACTIVE
//         }
//     })

//     const isValidToken = jwtHelper.verifyToken(token, config.jwt.reset_password_token as Secret);

//     if (!isValidToken) {
//         throw new ApiError(HttpStatus.FORBIDDEN, "forbidden")
//     }

//     //  Hash The password using bcrypt
//     const password: string = await bcrypt.hash(payload.password, 12);
//     // console.log(hashPassword);

//     // This is update the database and update the new password with hashed
//     await prisma.user.update({
//         where: {
//             email: userData.email
//         },
//         data: {
//             password
//         }
//     })


// }

export const authService = {
    login,
    refreshToken,
    // changePassword,
    // forgotPassword,
    // resetPassword
}