import prisma from "../../share/prisma";

const createBikeServicing = async (data: any) => {
    const customerData = {
        bikeId: data.bikeId,
        serviceDate: data.serviceDate,
        description: data.description,
        status: data.status,
    }

    const result = await prisma.service.create({
        data: customerData
    })

    return result
}


// Get All
const getAllBikeServicingFromDb = async () => {

    const result = await prisma.service.findMany();

    return {
        result
    }

}


// Single Id Get
const getBikeServicingIdFromDb = async (id: string) => {

    const idIsExist = await prisma.service.findUnique({
        where: {
            id
        }
    })
    if (!idIsExist) {
        throw new Error("Bike is not found !!!")
    }

    const result = await prisma.service.findUnique({
        where: {
            id
        }
    })


    return result

}



export const bikeServicing = {
    createBikeServicing,
    getAllBikeServicingFromDb,
    getBikeServicingIdFromDb
}