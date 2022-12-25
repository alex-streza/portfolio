import BrowserIcon from '@components/icons/Browser'
import { Html } from '@react-three/drei'

import Button from '@components/button/Button'
import {
  Astro,
  Cloudflarepages,
  Figma,
  Nextdotjs,
  Openai,
  Preact,
  Producthunt,
  ReactJs,
  Supabase,
  Tailwindcss,
} from '@icons-pack/react-simple-icons'
import { useLocalStorageValue, useMediaQuery } from '@react-hookz/web'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'

const Content = () => {
  const [theme] = useLocalStorageValue('theme', 'light')

  const ref = useRef(null)
  const isDark = theme.includes('dark')

  useLayoutEffect(() => {
    gsap.timeline().to(ref.current, {
      opacity: 1,
      top: 0,
    })
  }, [])

  return (
    <div ref={ref} className="project-container">
      <div className="flex mb-4 md:mb-8 gap-5">
        <a href="https://www.figma.com" aria-label="figma">
          <Figma color="#F24E1E" size={40} />
        </a>
        <a href="https://www.proucthunt.com" aria-label="product hunt">
          <Producthunt color="#DA552F" size={40} />
        </a>
        <a href="https://openai.com" aria-label="open ai">
          <Openai color="#412991" size={40} />
        </a>
        <a href="https://nextjs.org" aria-label="next.js">
          <Nextdotjs color="#000000" size={40} />
        </a>
        <a href="https://tailwindcss.com/" aria-label="tailwind css">
          <Preact color="#673AB8" size={40} />
        </a>
        <a href="https://tailwindcss.com/" aria-label="tailwind css">
          <Tailwindcss color="#06B6D4" size={40} />
        </a>
      </div>
      <h1 className="text-5xl mb-2.5">Summon.AI</h1>
      <p className="max-w-[652px] mb-8 text-gray-25 leading-8">
        Unlock the power of AI generated imagery with Summon AI, the premier
        directory powered by a free and open-source Figma plugin. Quickly
        generate professional-grade visuals for your projects and elevate your
        design skills.
      </p>
      <div className="flex gap-4 items-center">
        <Button>
          <BrowserIcon />
          <a
            href="https://www.summon-ai.com"
            className="reset-link !text-gray-1000"
          >
            Check out
          </a>
        </Button>
        <a
          href="https://www.producthunt.com/posts/summon-ai?utm_source=badge-top-post-topic-badge&utm_medium=badge&utm_souce=badge-summon&#0045;ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="!mb-0 md:w-[230px] w-[180px]"
            src={`https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=366943&period=weekly&topic=Artificial Intelligence&theme=${
              isDark ? 'dark' : 'light'
            }`}
            alt="Summon&#0046;AI - Generate&#0032;beautiful&#0032;images&#0032;with&#0032;DALL&#0045;E&#0045;2&#0032;in&#0032;Figma | Product Hunt"
            width="230"
          />
        </a>
      </div>
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
