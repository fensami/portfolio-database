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
exports.customerController = void 0;
const customer_service_1 = require("./customer.service");
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerService.createCustomer(req.body);
        console.log(result);
        res.status(200).json({
            success: true,
            message: "Customer created successfully",
            data: {
                customerId: result.id,
                name: result.name,
                email: result.email,
                phone: result.phone,
                createdAt: result.createdAt
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
const getAllCustomersFromDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerService.getAllCustomerFromDb();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result.result
    });
}));
// single 
const getIdFromDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customer_service_1.customerService.getByIdFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result
    });
}));
// updated
const customerDataUpdated = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customer_service_1.customerService.updateCustomerIntoDb(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customer updated successfully",
        data: result
    });
}));
// Soft delete From db
const customerDeleteFromDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customer_service_1.customerService.deleteCustomerFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customer deleted successfully"
    });
}));
exports.customerController = {
    createCustomer,
    getAllCustomersFromDb,
    getIdFromDb,
    customerDataUpdated,
    customerDeleteFromDb
};
