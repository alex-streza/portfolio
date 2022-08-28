import BrowserIcon from '@components/icons/Browser'
import { Html } from '@react-three/drei'

import Button from '@components/button/Button'
import {
  Astro,
  Cloudflarepages,
  Producthunt,
  ReactJs,
  Supabase,
  Tailwindcss,
} from '@icons-pack/react-simple-icons'
import { useLocalStorageValue, useMediaQuery } from '@react-hookz/web'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const Content = () => {
  const [theme] = useLocalStorageValue('theme', 'light')

  const ref = useRef(null)
  const tl = useRef<gsap.core.Timeline>()

  useEffect(() => {
    tl.current = gsap.timeline().to(ref.current, {
      duration: 1,
      opacity: 1,
      top: 0,
    })
  }, [])

  return (
    <div ref={ref} className="project-container">
      <div className="flex mb-5 md:mb-8 gap-5">
        <a href="https://reactjs.org" aria-label="reactjs">
          <ReactJs color="#61DAFB" size={40} />
        </a>
        <a href="https://astro.build" aria-label="astro">
          <Astro color="#FF5D01" size={40} />
        </a>
        <a href="https://tailwindcss.com" aria-label="tailwindcss">
          <Tailwindcss color="#06B6D4" size={40} />
        </a>
        <a href="https://supabase.com" aria-label="supabase">
          <Supabase color="#3ecf8e" size={40} />
        </a>
        <a href="https://pages.cloudflare.com/" aria-label="cloudflare pages">
          <Cloudflarepages color="#ef9530" size={40} />
        </a>
        <a
          href="https://www.producthunt.com/posts/3d-resources"
          aria-label="product hunt"
        >
          <Producthunt color="#ef9530" size={40} />
        </a>
      </div>
      <h1 className="text-5xl">3D Resources</h1>
      <p className="max-w-[65ch] mb-8">
        Looking to create great 3D experiences? Then you need 3D Resources! This
        collection of resources is perfect for creative developers & artists who
        want to push the boundaries of what's possible. High-quality assets and
        tools, to create beautiful visuals 😍.
      </p>
      <Button>
        <BrowserIcon />
        <a href="http://3d-resources.co" className="reset-link !text-gray-1000">
          Check out
        </a>
      </Button>
    </div>
  )
}

const HTML = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { width, height } = useThree((state) => state.viewport)

  return (
    <group
      position={[
        -width / 2 + (isDesktop ? 1 : 0),
        -height / 2 + (isDesktop ? 2 : 3),
        0,
      ]}
    >
      <Html className="h-screen p-0 md:px-32 pt-20 md:pt-60" center>
        <Content />
      </Html>
    </group>
  )
}

export default HTML
