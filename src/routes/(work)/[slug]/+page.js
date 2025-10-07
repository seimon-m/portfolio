import { redirect } from "@sveltejs/kit";

// Automatically load all Svelte content files
const modules = import.meta.glob("/src/content/work/*.svelte", { eager: true });

export const load = async ({ data }) => {
    const { slug } = data;

    // Find the Svelte component by slug
    const modulePath = `/src/content/work/${slug}.svelte`;
    const module = modules[modulePath];

    if (module) {
        return {
            slug,
            Component: module.default,
        };
    }

    // If content doesn't exist, redirect to homepage
    throw redirect(307, "/#work");
};
