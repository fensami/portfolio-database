import prisma from "../../share/prisma"


const createCustomer = async (data: any) => {
    const customerData = {
        email: data.email,
        name: data.name,
        phone: data.phone
    }

    const result = await prisma.customer.create({
        data: customerData
    })

    return result
}

// Get All
const getAllCustomerFromDb = async () => {

    const result = await prisma.customer.findMany();

    return {
        result
    }

}


// Single Id Get
const getByIdFromDb = async (id: string) => {

    const result = await prisma.customer.findUnique({
        where: {
            id
        }
    })

    return result

}

//  update
const updateCustomerIntoDb = async (id: string, data: any) => {

    const inputData = {
        name: data.name,
        phone: data.phone
    }

    await prisma.customer.findUniqueOrThrow({
        where: {
            id
        }
    })


    const result = await prisma.customer.update({
        where: {
            id
        },
        data: inputData
    })

    return result

}



//  delete
const deleteCustomerFromDb = async (id: string) => {

    await prisma.customer.findUniqueOrThrow({
        where: {
            id
        }
    })

    const result = await prisma.customer.delete({
        where: {
            id
        }
    })

    return result;
}


export const customerService = {
    createCustomer,
    getAllCustomerFromDb,
    getByIdFromDb,
    updateCustomerIntoDb,
    deleteCustomerFromDb
}