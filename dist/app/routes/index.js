"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_route_1 = require("../modules/customer/customer.route");
const bike_route_1 = require("../modules/bike/bike.route");
const bikeService_route_1 = require("../modules/bikeService/bikeService.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/customers",
        route: customer_route_1.customerRoutes
    },
    {
        path: "/bikes",
        route: bike_route_1.BikeRoutes
    },
    {
        path: "/services",
        route: bikeService_route_1.BikeServicingRoutes
    },
    // {
    //     path: "/admin",
    //     route: adminRoutes
    // },
    // {
    //     path: "/auth",
    //     route: authRoutes
    // }
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
