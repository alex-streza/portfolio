import Button from '@components/button/Button'
import { Html } from '@react-three/drei'

import BrowserIcon from '@components/icons/Browser'
import {
  Nextdotjs,
  Openai,
  Postgresql,
  ReactJs,
  Supabase,
  Tailwindcss,
} from '@icons-pack/react-simple-icons'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useThree } from '@react-three/fiber'
import { useLocalStorageValue, useMediaQuery } from '@react-hookz/web'

const Content = () => {
  const [theme] = useLocalStorageValue('theme', 'light')

  const ref = useRef(null)
  const tl = useRef<gsap.core.Timeline>()
  const isDark = theme.includes('dark')

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
        <a href="https://reactjs.org/" aria-label="reactjs">
          <ReactJs color="#61DAFB" size={40} />
        </a>
        <a href="https://nextjs.org" aria-label="nextjs">
          <Nextdotjs color={isDark ? '#ffffff' : '#000000'} size={40} />
        </a>
        <a href="https://tailwindcss.com/" aria-label="tailwindcss">
          <Tailwindcss color="#06B6D4" size={40} />
        </a>
        <a href="https://www.postgresql.org" aria-label="postgresql">
          <Postgresql color="#4169E1" size={40} />
        </a>
        <a href="https://supabase.com" aria-label="supabase">
          <Supabase color="#3ecf8e" size={40} />
        </a>
        <a href="https://openai.com" aria-label="openai">
          <Openai color={isDark ? '#ffffff' : '#000000'} size={40} />
        </a>
      </div>
      <h1 className="text-5xl">GenIdea</h1>
      <p className="max-w-[65ch] mb-8">
        Get inspired on the go with ideas in diverse tech related fields with
        artificial intelligence. Users can generate app ideas with OpenAI and
        collect them as NFTs.
      </p>
      <div className="flex gap-4 items-center">
        <Button>
          <BrowserIcon />
          <a
            href="http://devnet.genidea.app/"
            className="reset-link !text-gray-1000"
          >
            Check out
          </a>
        </Button>
        <a
          href="https://www.producthunt.com/posts/genidea?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-genidea"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mb-0 md:w-[230px] w-[180px]"
            src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=330472&theme=${
              isDark ? 'dark' : 'light'
            }`}
            alt="GenIdea - Get&#0032;inspired&#0032;on&#0032;the&#0032;go&#0032;with&#0032;AI&#0032;generated&#0032;app&#0032;ideas | Product Hunt"
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
