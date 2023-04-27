import Button from '@components/button/Button'
import BrowserIcon from '@components/icons/Browser'
import {
  SiAstro,
  SiCloudflarepages,
  SiProducthunt,
  SiReact,
  SiSupabase,
  SiTailwindcss,
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
        <a href="https://reactjs.org" aria-label="reactjs">
          <SiReact color="#61DAFB" size={40} />
        </a>
        <a href="https://astro.build" aria-label="astro">
          <SiAstro color="#FF5D01" size={40} />
        </a>
        <a href="https://tailwindcss.com" aria-label="tailwindcss">
          <SiTailwindcss color="#06B6D4" size={40} />
        </a>
        <a href="https://supabase.com" aria-label="supabase">
          <SiSupabase color="#3ecf8e" size={40} />
        </a>
        <a href="https://pages.cloudflare.com/" aria-label="cloudflare pages">
          <SiCloudflarepages color="#ef9530" size={40} />
        </a>
        <a
          href="https://www.producthunt.com/posts/3d-resources"
          aria-label="product hunt"
        >
          <SiProducthunt color="#ef9530" size={40} />
        </a>
      </div>
      <h1 className="text-5xl mb-2.5">3D Resources</h1>
      <p className="max-w-[652px] mb-8 text-gray-25 leading-8">
        Looking to create great 3D experiences? Then you need 3D Resources! This
        collection of resources is perfect for creative developers & artists who
        want to push the boundaries of what's possible. High-quality assets and
        tools, to create beautiful visuals 😍.
      </p>
      <div className="flex gap-4 items-center">
        <Button>
          <BrowserIcon />
          <a
            href="http://3d-resources.co"
            className="reset-link !text-gray-1000"
          >
            Check out
          </a>
        </Button>
        <a
          href="https://www.producthunt.com/posts/3d-resources?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-3d&#0045;resources"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="!mb-0 md:w-[230px] w-[180px]"
            src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=356448&theme=${
              isDark ? 'dark' : 'light'
            }`}
            alt="3D&#0032;Resources - 3D&#0032;is&#0032;hard&#0044;&#0032;but&#0032;it&#0039;s&#0032;not&#0032;impossible&#0032;with&#0032;the&#0032;right&#0032;resources | Product Hunt"
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
