import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.blog.alexstreza.dev',
  vite: {
    ssr: {
      external: ['svgo', 'gsap', 'react', 'react-dom'],
    },
    build: {
      chunkSizeWarningLimit: 1000,
    },
  },
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    mdx(),
  ],
})
