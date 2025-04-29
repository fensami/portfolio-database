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
exports.bikeServicing = void 0;
const prisma_1 = __importDefault(require("../../share/prisma"));
const createBikeServicing = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customerData = {
        bikeId: data.bikeId,
        serviceDate: data.serviceDate,
        description: data.description,
        status: data.status,
    };
    const result = yield prisma_1.default.service.create({
        data: customerData
    });
    console.log(result);
    return result;
});
// Get All
const getAllBikeServicingFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findMany();
    return {
        result
    };
});
// Single Id Get
const getBikeServicingIdFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const idIsExist = yield prisma_1.default.service.findUnique({
        where: {
            id
        }
    });
    if (!idIsExist) {
        throw new Error("Bike is not found !!!");
    }
    const result = yield prisma_1.default.service.findUnique({
        where: {
            id
        }
    });
    return result;
});
exports.bikeServicing = {
    createBikeServicing,
    getAllBikeServicingFromDb,
    getBikeServicingIdFromDb
};
