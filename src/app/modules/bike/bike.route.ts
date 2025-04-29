import express from 'express';
import { bikeController } from './bike.controller';


const router = express.Router()


router.post('/', bikeController.createBike)
router.get('/', bikeController.getAllBikesFromDb)
router.get('/:id', bikeController.getSingleBikeFromDb)

export const BikeRoutes = router;