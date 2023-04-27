import {
  SiAstro,
  SiBlender,
  SiMarkdown,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
} from '@icons-pack/react-simple-icons'
import { useLocalStorageValue, useMediaQuery } from '@react-hookz/web'
import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

const Content = () => {
  const { value: theme } = useLocalStorageValue('theme', {
    defaultValue: 'light',
  })
  const isDark = theme.includes('dark')

  const ref = useRef(null)

  useLayoutEffect(() => {
    gsap.timeline().to(ref.current, {
      opacity: 1,
      top: 0,
    })
  }, [])

  return (
    <div ref={ref} className="project-container">
      <div className="flex mb-4 md:mb-8 gap-5">
        <a href="https://reactjs.org" aria-label="reactjs">
          <SiReact color="#61DAFB" size={40} />
        </a>
        <a href="https://astro.build" aria-label="astro">
          <SiAstro color="#FF5D01" size={40} />
        </a>
        <a href="https://tailwindcss.com" aria-label="tailwindcss">
          <SiTailwindcss color="#06B6D4" size={40} />
        </a>
        <a href="https://www.markdownguide.org" aria-label="markdown">
          <SiMarkdown color={isDark ? '#ffffff' : '#000000'} size={40} />
        </a>
        <a href="https://threejs.org" aria-label="threedotjs">
          <SiThreedotjs color={isDark ? '#ffffff' : '#000000'} size={40} />
        </a>
        <a href="https://www.blender.org" aria-label="blender">
          <SiBlender color="#F5792A" size={40} />
        </a>
      </div>
      <h1 className="text-5xl mb-2.5">Portfolio</h1>
      <p className="max-w-[652px] mb-8 text-gray-25 leading-8">
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
      // eslint-disable-next-line react/no-unknown-property
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
