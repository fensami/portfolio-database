import prisma from "../../share/prisma";

const createProject = async (data: any) => {
    const projectData = {
        name: data.name,
        bannerImage: data.bannerImage,
        description: data.description,
        liveLink: data.liveLink,
        githubLink: data.githubLink,
        images: data.images,
        projectId: data.projectId
    }

    const result = await prisma.project.create({
        data: projectData
    })
    console.log(result);

    return result
}


// Get All
const getAllProjectsFromDb = async () => {

    const result = await prisma.project.findMany();

    return {
        result
    }

}

// Single Id Get
// const getBikeIdFromDb = async (id: string) => {

//     const idIsExist = await prisma.bike.findUnique({
//         where: {
//             id
//         }
//     })
//     if (!idIsExist) {
//         throw new Error("Bike is not found !!!")
//     }

//     const result = await prisma.bike.findUnique({
//         where: {
//             id
//         }
//     })


//     return result

// }
const getProjectIdFromDb = async (id: string) => {

    const idIsExist = await prisma.project.findUnique({
        where: {
            id
        }
    })
    if (!idIsExist) {
        throw new Error("project is not found !!!")
    }

    const result = await prisma.project.findUnique({
        where: {
            id
        }
    })


    return result

}

export const projectServices = {
    createProject,
    getAllProjectsFromDb,
    getProjectIdFromDb
    // getBikeIdFromDb
}