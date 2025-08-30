import express, { NextFunction, Request, Response } from 'express';
import { userController } from './user.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../generated/prisma';
// import { fileUploader } from '../../../helpers/fileUploaders';
// import { userValidation } from './user.validation';


const router = express.Router()


/*=====================
  Get All User Path
  =====================*/
// router.get(
//   '/',
//   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
//   userController.getAllFromDb
// )
/*** Get My Profile ***/
// router.get(
//   '/me',
//   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
//   userController.getMyProfile
// )

/*=====================
  Create Admin Route
  =====================*/
// router.post(
//   '/create-admin',
//   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
//   fileUploader.upload.single('file'),
//   (req: Request, res: Response, Next: NextFunction) => {
//     req.body = userValidation.createAdmin.parse(JSON.parse(req.body.data))
//     return userController.createAdmin(req, res, Next)
//   }
// )
/*=====================
  Create Doctor Route
  =====================*/
// router.post(
//   '/create-doctor',
//   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
//   fileUploader.upload.single('file'),
//   (req: Request, res: Response, Next: NextFunction) => {
//     req.body = userValidation.createDoctor.parse(JSON.parse(req.body.data))
//     return userController.createDoctor(req, res, Next)
//   }
// )

/*=====================
  Create patient Route
  =====================*/
router.post("/create-user", userController.createPatient);
// router.post(
//   '/create-user',
//   // fileUploader.upload.single('file'),
//   (req: Request, res: Response, Next: NextFunction) => {
//     req.body = JSON.parse(req.body.data)
//     return userController.createPatient(req, res, Next)
//   }
// )

/*** Update The User Status ***/

// router.patch(
//   '/:id/status',
//   userController.changeProfileStatus
// )

/*=====================
  Update Profile
  =====================*/
// router.patch(
//   '/update-my-profile',
//   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
//   fileUploader.upload.single('file'),
//   (req: Request, res: Response, Next: NextFunction) => {
//     // req.body = userValidation.createPatient.parse(JSON.parse(req.body.data))
//     req.body = JSON.parse(req.body.data)
//     return userController.updateMyProfile(req, res, Next)
//   }
// )


export const userRoutes = router;