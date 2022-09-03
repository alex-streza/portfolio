import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'

import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  site: 'https://staging-blog.alexstreza.dev',
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
    image(),
    compress(),
  ],
})
