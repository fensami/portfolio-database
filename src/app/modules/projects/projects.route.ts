import express from 'express';
// import { bikeController } from './bike.controller';
import { projectController } from './projects.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../generated/prisma';


const router = express.Router()


router.post('/', projectController.createProject)
router.get(
    '/',
    // auth(UserRole.ADMIN),
    projectController.getAllProjectsFromDb
)
router.get('/:id', projectController.getSingleProjectFromDb)
router.put('/:id', projectController.projectDataUpdated)
router.delete('/:id', projectController.projectDeleteFromDb)


export const projectRoutes = router; 