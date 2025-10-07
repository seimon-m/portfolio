// Automatically discover all Svelte content files
const svelteModules = import.meta.glob("/src/content/work/*.svelte", {
    eager: true,
});

/**
 * Load all work content from Svelte files
 * Metadata is automatically extracted from each file
 */
export async function getAllWork() {
    // Get all Svelte projects with their metadata
    const allWork = Object.entries(svelteModules).map(([path, module]) => {
        const slug = path.split("/").pop()?.replace(".svelte", "") || "";
        return {
            slug,
            url: slug,
            ...module.metadata,
        };
    });

    // Sort by id
    return allWork.sort((a, b) => {
        const idA = typeof a.id === "number" ? a.id : 999;
        const idB = typeof b.id === "number" ? b.id : 999;
        return idA - idB;
    });
}
