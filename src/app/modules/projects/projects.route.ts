import express from 'express';
// import { bikeController } from './bike.controller';
import { projectController } from './projects.controller';


const router = express.Router()


router.post('/', projectController.createProject)
router.get('/', projectController.getAllProjectsFromDb)
router.get('/:id', projectController.getSingleProjectFromDb)
router.put('/:id', projectController.projectDataUpdated)
router.delete('/:id', projectController.projectDeleteFromDb)


export const projectRoutes = router; 