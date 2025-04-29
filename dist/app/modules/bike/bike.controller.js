"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeController = void 0;
const bike_service_1 = require("./bike.service");
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const createBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.bikeServices.createBike(req.body);
        console.log(result);
        // {
        //     "brand": "Yamaha",
        //     "model": "R15",
        //     "year": 2022,
        //     "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
        //   }
        res.status(200).json({
            success: true,
            message: "Bike added successfully",
            data: {
                bikeId: result.id,
                brand: result.brand,
                model: result.model,
                year: result.year,
                customerId: result.customerId
            }
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.name) || "something went wrong",
            error: err
        });
    }
});
// Get all
const getAllBikesFromDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_service_1.bikeServices.getAllBikeFromDb();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: result.result
    });
}));
// single 
const getSingleBikeFromDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bike_service_1.bikeServices.getBikeIdFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result
    });
}));
exports.bikeController = {
    createBike,
    getAllBikesFromDb,
    getSingleBikeFromDb
};
