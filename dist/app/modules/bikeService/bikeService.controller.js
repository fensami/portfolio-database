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
exports.bikeServicingController = void 0;
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const bikeService_service_1 = require("./bikeService.service");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const createBikeServicing = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bikeService_service_1.bikeServicing.createBikeServicing(req.body);
    console.log(result);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service record created successfully",
        data: {
            serviceId: result.id,
            bikeId: result.bikeId,
            serviceData: result.serviceDate,
            completionDate: result.completionDate,
            description: result.description,
            status: result.status
        }
    });
}));
// Get all
const getAllBikeServicingFromDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bikeService_service_1.bikeServicing.getAllBikeServicingFromDb();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: result.result
    });
}));
// single 
const getSingleBikeServicingFromDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bikeService_service_1.bikeServicing.getBikeServicingIdFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result
    });
}));
exports.bikeServicingController = {
    createBikeServicing,
    getAllBikeServicingFromDb,
    getSingleBikeServicingFromDb
};
