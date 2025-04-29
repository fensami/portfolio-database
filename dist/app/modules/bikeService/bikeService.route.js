"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeServicingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bikeService_controller_1 = require("./bikeService.controller");
const router = express_1.default.Router();
router.post('/', bikeService_controller_1.bikeServicingController.createBikeServicing);
router.get('/', bikeService_controller_1.bikeServicingController.getAllBikeServicingFromDb);
router.get('/:id', bikeService_controller_1.bikeServicingController.getSingleBikeServicingFromDb);
// router.put('/:id', customerController.customerDataUpdated)
// router.delete('/:id', customerController.customerDeleteFromDb)
exports.BikeServicingRoutes = router;
