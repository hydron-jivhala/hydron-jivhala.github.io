/* import adapter from '@sveltejs/adapter-auto'; */
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
/* import { sveltePreprocess } from "svelte-preprocess";
 */ import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      //pages: "build",
      //assets: "build",
      fallback: "404.html",
      //precompress: false,
      strict: true,
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
      //base: process.env.NODE_ENV === 'production' ? '/hydron-jivhala.github.io' : ''
    },
  },
};

export default config;
