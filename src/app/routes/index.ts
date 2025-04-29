import express from 'express';
import { customerRoutes } from '../modules/customer/customer.route';
import { BikeRoutes } from '../modules/bike/bike.route';
import { BikeServicingRoutes } from '../modules/bikeService/bikeService.route';


const router = express.Router();

const moduleRoutes = [
    {
        path: "/customers",
        route: customerRoutes
    },
    {
        path: "/bikes",
        route: BikeRoutes
    },
    {
        path: "/services",
        route: BikeServicingRoutes
    },
]



moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;