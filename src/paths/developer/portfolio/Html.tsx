import Button from '@components/button/Button'
import { Html } from '@react-three/drei'

import BrowserIcon from '@components/icons/Browser'
import {
  Astro,
  Blender,
  Markdown,
  Nextdotjs,
  Openai,
  Postgresql,
  ReactJs,
  Supabase,
  Tailwindcss,
  Threedotjs,
} from '@icons-pack/react-simple-icons'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useThree } from '@react-three/fiber'
import { useLocalStorageValue, useMediaQuery } from '@react-hookz/web'

const Content = () => {
  const [theme] = useLocalStorageValue('theme', 'light')
  const isDark = theme.includes('dark')

  const ref = useRef(null)

  useEffect(() => {
    gsap.timeline().to(ref.current, {
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
        <a href="https://www.markdownguide.org" aria-label="markdown">
          <Markdown color={isDark ? '#ffffff' : '#000000'} size={40} />
        </a>
        <a href="https://threejs.org" aria-label="threedotjs">
          <Threedotjs color={isDark ? '#ffffff' : '#000000'} size={40} />
        </a>
        <a href="https://www.blender.org" aria-label="blender">
          <Blender color="#F5792A" size={40} />
        </a>
      </div>
      <h1 className="text-5xl">Portfolio</h1>
      <p className="max-w-[65ch] mb-8">
        Portfolio websites need to be outstanding as much as the projects
        showcased. Building a 3D interactive experience to present my expertise
        in a glamorous way.
      </p>
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
