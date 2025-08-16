import express from 'express';
import { projectRoutes } from '../modules/projects/projects.route';


const router = express.Router();

const moduleRoutes = [
    {
        path: "/projects",
        route: projectRoutes
    },
    // {
    //     path: "/bikes",
    //     route: BikeRoutes
    // },
    // {
    //     path: "/services",
    //     route: BikeServicingRoutes
    // },
]



moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;