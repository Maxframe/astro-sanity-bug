import { defineConfig } from "astro/config";
import { sanityIntegration as sanity } from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "...",
      dataset: "...",
      apiVersion: "v2021-03-25",
      useCdn: false,
    }),
  ],
  prefetch: {
    prefetchAll: true,
  },
});
