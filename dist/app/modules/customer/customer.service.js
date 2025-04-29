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
exports.customerService = void 0;
const prisma_1 = __importDefault(require("../../share/prisma"));
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customerData = {
        email: data.email,
        name: data.name,
        phone: data.phone
    };
    console.log(customerData);
    const result = yield prisma_1.default.customer.create({
        data: customerData
    });
    console.log(result);
    return result;
});
// Get All
const getAllCustomerFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findMany();
    return {
        result
    };
});
// Single Id Get
const getByIdFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findUnique({
        where: {
            id
        }
    });
    return result;
});
//  update
const updateCustomerIntoDb = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const inputData = {
        name: data.name,
        phone: data.phone
    };
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            id
        }
    });
    const result = yield prisma_1.default.customer.update({
        where: {
            id
        },
        data: inputData
    });
    return result;
});
//  delete
const deleteCustomerFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            id
        }
    });
    const result = yield prisma_1.default.customer.delete({
        where: {
            id
        }
    });
    return result;
});
exports.customerService = {
    createCustomer,
    getAllCustomerFromDb,
    getByIdFromDb,
    updateCustomerIntoDb,
    deleteCustomerFromDb
};
