import prisma from "../../share/prisma";

const createBike = async (data: any) => {
    const customerData = {
        brand: data.brand,
        model: data.model,
        year: data.year,
        customerId: data.customerId
    }

    const result = await prisma.bike.create({
        data: customerData
    })

    return result
}


// Get All
const getAllBikeFromDb = async () => {

    const result = await prisma.bike.findMany();

    return {
        result
    }

}

// Single Id Get
const getBikeIdFromDb = async (id: string) => {

    const idIsExist = await prisma.bike.findUnique({
        where: {
            id
        }
    })
    if (!idIsExist) {
        throw new Error("Bike is not found !!!")
    }

    const result = await prisma.bike.findUnique({
        where: {
            id
        }
    })


    return result

}


export const bikeServices = {
    createBike,
    getAllBikeFromDb,
    getBikeIdFromDb
}