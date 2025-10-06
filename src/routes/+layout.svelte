<script>
    import "$lib/styles/reset.css";
    import "$lib/styles/global.css";
    import { dev } from "$app/environment";
    import { inject } from "@vercel/analytics";
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

    inject({ mode: dev ? "development" : "production" });
    injectSpeedInsights();
</script>

<main>
    <slot />
</main>
