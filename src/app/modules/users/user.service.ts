import { Prisma, UserRole, UserStatus } from "../../../../generated/prisma"

import * as bcrypt from 'bcrypt'
// import prisma from "../../../shared/prisma";
// import { fileUploader } from "../../../helpers/fileUploaders";
// import { IFileType } from "../../interfaces/file";
import { Request } from "express";
// import { IPaginationsOptions } from "../../interfaces/pagination";
// import calculatePagination from "../../../helpers/paginationHelpers";
import { userSearchAbleFields } from "./User.constant";
// import { tuple } from "zod";
import status from "http-status";
import prisma from "../../share/prisma";
// import { IAuthUser } from "../../interfaces/common";



/*=====================
  Create Admin 
  =====================*/
// const createAdmin = async (req: Request): Promise<Admin> => {


//     const file = req.file as IFileType;

//     if (file) {
//         const uploadToCloudinary = await fileUploader.uploadToCloudinary(file)

//         req.body.admin.profilePhoto = uploadToCloudinary?.secure_url

//     }

//     const hashPassword: string = await bcrypt.hash(req.body.password, 12);
//     const userData = {
//         email: req.body.admin.email,
//         password: hashPassword,
//         role: UserRole.ADMIN,
//     }

//     const result = await prisma.$transaction(async (transactionClient) => {
//         await transactionClient.user.create({
//             data: userData
//         })
//         const createdAdmin = await transactionClient.admin.create({
//             data: req.body.admin
//         })
//         return createdAdmin
//     })
//     return result
// }
/*=====================
  Create Doctor 
  =====================*/
// const createDoctor = async (req: Request): Promise<Doctor> => {


//     const file = req.file as IFileType;

//     if (file) {
//         const uploadToCloudinary = await fileUploader.uploadToCloudinary(file)

//         req.body.doctor.profilePhoto = uploadToCloudinary?.secure_url

//     }

//     const hashPassword: string = await bcrypt.hash(req.body.password, 12);
//     const userData = {
//         email: req.body.doctor.email,
//         password: hashPassword,
//         role: UserRole.DOCTOR,
//     }

//     const result = await prisma.$transaction(async (transactionClient) => {
//         await transactionClient.user.create({
//             data: userData
//         })
//         const createdDoctor = await transactionClient.doctor.create({
//             data: req.body.doctor
//         })
//         return createdDoctor
//     })
//     return result
// }
/*=====================
  Create Patient 
  =====================*/
const createPatient = async (req: Request) => {


  // const file = req.file as IFileType;

  // if (file) {
  //     const uploadToCloudinary = await fileUploader.uploadToCloudinary(file)

  //     req.body.patient.profilePhoto = uploadToCloudinary?.secure_url

  // }

  const hashPassword: string = await bcrypt.hash(req.body.password, 12);
  const userData = {
    email: req.body.user.email,
    password: hashPassword,
    role: UserRole.ADMIN,
  }
  console.log(userData);
  // console.log("kaku");


  const result = await prisma.user.create({
    data: userData
  })
  // const result = await prisma.$transaction(async (transactionClient) => {
  //   await transactionClient.user.create({
  //     data: userData
  //   })
  //   const createdPatient = await transactionClient.user.create({
  //     data: req.body.user
  //   })
  //   return createdPatient
  // })
  return result
}
/*=====================
  Get All User From Db 
  =====================*/
// const getAllUserFromDb = async (params: any, options: IPaginationsOptions) => {
//     console.log(params);

//     const { limit, page, skip } = calculatePagination(options);

//     const andConditions: Prisma.UserWhereInput[] = [];

//     const { searchTerm, ...filterData } = params;



//     if (params.searchTerm) {
//         andConditions.push({
//             OR: userSearchAbleFields.map(field => (
//                 {
//                     [field]: {
//                         contains: params.searchTerm,
//                         mode: "insensitive"
//                     },
//                 }
//             ))
//         })
//     }

//     if (Object.keys(filterData).length > 0) {
//         andConditions.push({
//             AND: Object.keys(filterData).map(key => ({
//                 [key]: {
//                     equals: (filterData as any)[key]
//                 }
//             }))
//         })
//     }
//     // andConditions.push({
//     //     isDeleted: false
//     // })
//     // console.dir(andConditions, { depth: "infinity" });

//     const whereConditions: Prisma.UserWhereInput = andConditions.length > 0 ? { AND: andConditions } : {}

//     const result = await prisma.user.findMany({
//         // where: {
//         //     name: {
//         //         contains: params.searchTerm,
//         //         mode: "insensitive"
//         //     }
//         // }
//         where: whereConditions,
//         skip,
//         take: limit,
//         orderBy: options.sortBy && options.sortOrder ? {
//             [options.sortBy]: options.sortOrder
//         } : {
//             createdAt: "desc"
//         },
//         select: {
//             id: true,
//             email: true,
//             role: true,
//             needPasswordChange: true,
//             status: true,
//             createdAt: true,
//             updatedAt: true,
//             admin: true,
//             doctor: true,
//             patient: true
//         },
//         // include: {
//         //     admin: true,
//         //     doctor: true,
//         //     patient: true
//         // }
//     });

//     const total = await prisma.user.count({
//         where: whereConditions
//     })
//     return {
//         meta: {
//             page,
//             limit,
//             total
//         },
//         result
//     }

// }

/*** Update The User Status Service ***/
// const changeProfileStatus = async (id: string, status: UserRole) => {

//     const userData = await prisma.user.findUniqueOrThrow({
//         where: {
//             id
//         }
//     })

//     const updateUserStauts = await prisma.user.update({
//         where: {
//             id
//         },
//         data: status
//     })

//     return updateUserStauts

// }

/*** Get My Profile ***/
// const getMyProfile = async (user: IAuthUser) => {

//     const userInfo = await prisma.user.findUniqueOrThrow({
//         where: {
//             email: user?.email
//         },
//         select: {
//             id: true,
//             email: true,
//             needPasswordChange: true,
//             role: true,
//             status: true
//         }
//     })

//     let profileInfo;
//     if (userInfo.role === UserRole.SUPER_ADMIN) {
//         profileInfo = await prisma.admin.findUniqueOrThrow({
//             where: {
//                 email: userInfo.email
//             }
//         })
//     }
//     else if (userInfo.role === UserRole.ADMIN) {
//         profileInfo = await prisma.admin.findUniqueOrThrow({
//             where: {
//                 email: userInfo.email
//             }
//         })
//     }
//     else if (userInfo.role === UserRole.DOCTOR) {
//         profileInfo = await prisma.doctor.findUniqueOrThrow({
//             where: {
//                 email: userInfo.email
//             }
//         })
//     }
//     else if (userInfo.role === UserRole.PATIENT) {
//         profileInfo = await prisma.patient.findUniqueOrThrow({
//             where: {
//                 email: userInfo.email
//             }
//         })
//     }

//     return { ...userInfo, ...profileInfo }


// }

/*** Update My Profile ***/
// const updateMyProfile = async (user: IAuthUser, req: Request) => {
//     const userInfo = await prisma.user.findUniqueOrThrow({
//         where: {
//             email: user?.email,
//             status: UserStatus.ACTIVE
//         }
//     })

//     const file = req.file as IFileType;
//     if (file) {
//         const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);
//         req.body.profilePhoto = uploadToCloudinary?.secure_url
//     }

//     let profileInfo;

//     if (userInfo.role === UserRole.SUPER_ADMIN) {
//         profileInfo = await prisma.admin.update({
//             where: {
//                 email: userInfo.email
//             },
//             data: req.body
//         })
//     }
//     else if (userInfo.role === UserRole.ADMIN) {
//         profileInfo = await prisma.admin.update({
//             where: {
//                 email: userInfo.email
//             },
//             data: req.body
//         })
//     }
//     else if (userInfo.role === UserRole.DOCTOR) {
//         profileInfo = await prisma.doctor.update({
//             where: {
//                 email: userInfo.email
//             },
//             data: req.body
//         })
//     }
//     else if (userInfo.role === UserRole.PATIENT) {
//         profileInfo = await prisma.patient.update({
//             where: {
//                 email: userInfo.email
//             },
//             data: req.body
//         })
//     }

//     return { ...profileInfo }

// }
export const userService = {
  // createAdmin,
  // createDoctor,
  createPatient,
  // getAllUserFromDb,
  // changeProfileStatus,
  // getMyProfile,
  // updateMyProfile
}