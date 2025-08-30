// // import { z } from "zod";
// // import { Gender } from "../../../../generated/prisma";

// const createAdmin = z.object({
//     password: z.string({
//         required_error: "password is required!"
//     }),
//     admin: z.object({
//         name: z.string({
//             required_error: "name is required!"
//         }),
//         email: z.string({
//             required_error: "email is required!"
//         }),
//         contactNumber: z.string({
//             required_error: "contactNumber is required!"
//         })
//     })
// })
// /*=================================
//   Create Doctor  Validation Schema
//   =================================*/
// const createDoctor = z.object({
//     password: z.string({
//         required_error: "password is required!"
//     }),
//     doctor: z.object({
//         name: z.string({
//             required_error: "name is required!"
//         }),
//         email: z.string({
//             required_error: "email is required!"
//         }),
//         contactNumber: z.string({
//             required_error: "contactNumber is required!"
//         }),
//         address: z.string().optional(),
//         registrationNumber: z.string({
//             required_error: "registrationNumber is required!"

//         }),
//         experience: z.number().optional(),
//         gender: z.enum([Gender.MALE, Gender.FEMALE]),
//         appointmentFee: z.number({
//             required_error: "appointment Fee is required!"
//         }),
//         qualification: z.string({
//             required_error: "qualification is required!"
//         }),
//         currentWorkingPlace: z.string({
//             required_error: "currentWorkingPlace is required!"
//         }),
//         designation: z.string({
//             required_error: "designation is required!"
//         }),
//     })
// })
// /*=================================
//   Create Patient  Validation Schema
//   =================================*/
// const createPatient = z.object({
//     password: z.string(),
//     patient: z.object({
//         email: z.string({
//             required_error: "Email is required!"
//         }).email(),
//         name: z.string({
//             required_error: "Name is required!"
//         }),
//         contactNumber: z.string({
//             required_error: "Contact number is required!"
//         }),
//         address: z.string({
//             required_error: "Address is required"
//         })
//     })
// });
// export const userValidation = {
//     createAdmin,
//     createDoctor,
//     createPatient
// }