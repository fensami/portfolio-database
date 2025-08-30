import express from 'express';
import { projectRoutes } from '../modules/projects/projects.route';
import { authRoutes } from '../modules/auth/auth.route';
import { userRoutes } from '../modules/users/user.routes';


const router = express.Router();

const moduleRoutes = [
    {
        path: "/user",
        route: userRoutes
    },
    {
        path: "/projects",
        route: projectRoutes
    },
    {
        path: "/auth",
        route: authRoutes
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