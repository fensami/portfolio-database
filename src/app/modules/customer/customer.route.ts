import express from 'express';
import { customerController } from './customer.controller';


const router = express.Router()


router.post('/', customerController.createCustomer)
router.get('/', customerController.getAllCustomersFromDb)
router.get('/:id', customerController.getIdFromDb)
router.put('/:id', customerController.customerDataUpdated)
router.delete('/:id', customerController.customerDeleteFromDb)

export const customerRoutes = router;