import express from 'express';
import { bikeServicingController } from './bikeService.controller';


const router = express.Router()


router.post('/', bikeServicingController.createBikeServicing)
router.get('/', bikeServicingController.getAllBikeServicingFromDb)
router.get('/:id', bikeServicingController.getSingleBikeServicingFromDb)

export const BikeServicingRoutes = router;