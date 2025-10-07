import { getAllWork } from "$lib/utils/content.js";

export const load = async () => {
    const projects = await getAllWork();

    return {
        projects,
    };
};
