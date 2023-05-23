import { defineConfig, sharpImageService } from "astro/config"
import Icons from "unplugin-icons/vite"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },

  integrations: [mdx()],
  image: {
    service: sharpImageService(),
  },
})
