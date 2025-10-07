export const load = async ({ params }) => {
    // Just pass the slug to the universal loader
    return {
        slug: params["slug"]
    };
};
