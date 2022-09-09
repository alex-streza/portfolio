import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import robotsTxt from 'astro-robots-txt'

import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.alexstreza.dev',
  vite: {
    ssr: {
      external: ['svgo', 'gsap', 'react', 'react-dom'],
    },
    build: {
      chunkSizeWarningLimit: 1000,
    },
  },
  experimental: {
    integrations: true,
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
    robotsTxt(),
  ],
})
