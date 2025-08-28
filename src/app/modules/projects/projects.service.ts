import prisma from "../../share/prisma";
/**==================
   Create
   ==================**/
const createProject = async (data: any) => {
    const projectData = {
        name: data.name,
        bannerImage: data.bannerImage,
        description: data.description,
        multipleDescriptions: data.multipleDescriptions,
        liveLink: data.liveLink,
        githubLink: data.githubLink,
        serverLink: data.serverLink,
        technologies: data.technologies,
        images: data.images,
        projectId: data.projectId
    }

    const result = await prisma.project.create({
        data: projectData
    })
    console.log(result);

    return result
}


/**==================
   Single Id Get
   ==================**/
const getAllProjectsFromDb = async () => {

    const result = await prisma.project.findMany();

    return {
        result
    }

}


/**==================
   Single Id Get
   ==================**/
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
/**==================
   Delete
   ==================**/

const deleteProjectFromDb = async (id: string) => {

    await prisma.project.findUniqueOrThrow({
        where: {
            id
        }
    })

    const result = await prisma.project.delete({
        where: {
            id
        }
    })

    return result;
}

/**==================
   Update
   ==================**/
const updateProjectIntoDb = async (id: string, data: any) => {
    // prepare project update data
    const inputData = {
        name: data?.name,
        bannerImage: data.bannerImage,
        description: data.description,
        multipleDescriptions: data.multipleDescriptions,
        liveLink: data.liveLink,
        githubLink: data.githubLink,
        serverLink: data.serverLink,
        technologies: data.technologies,
        images: data.images,
        projectId: data.projectId,
    };

    // check project exists
    await prisma.project.findUniqueOrThrow({
        where: { id }
    });

    // update project
    const result = await prisma.project.update({
        where: { id },
        data: inputData
    });

    return result;
};

export const projectServices = {
    createProject,
    getAllProjectsFromDb,
    getProjectIdFromDb,
    deleteProjectFromDb,
    updateProjectIntoDb
}