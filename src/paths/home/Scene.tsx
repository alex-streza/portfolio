import { Canvas, useThree, Viewport } from '@react-three/fiber'

import Intro from '@components/transition/Intro'
import Loader from '@components/transition/Loader'
import { useMediaQuery, useSessionStorageValue } from '@react-hookz/web'
import { animated, config, SpringRef, useSprings } from '@react-spring/three'
import { Html, useTexture } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import gsap from 'gsap'
import {
  createRef,
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'
import MenuLink from './MenuLink'
import ShowcaseImage from './ShowcaseImage'

const images = {
  0: [
    'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/99ef4318-b438-4f4c-c852-8c17cb57d900/public',
    'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/a61f68b4-c6b0-4659-d3aa-8ff4c8637a00/public',
    'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/720ca2e6-113e-4633-3838-3fa478e1a000/public',
  ],
  1: [
    'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/2b2d7974-3e3a-480f-28a0-1f63fdd9f400/public',
    'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/64f849da-a63a-4823-2465-f40f1f7bbc00/public',
    'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/4264ae59-704a-4f94-5a2a-d97c31680d00/public',
  ],
  2: [
    'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/eb192c8c-b018-4904-d6a1-05b63f750d00/public',
    'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/9c3d8f72-59fe-4204-6eb7-622842146800/public',
    'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/54117ca0-f9c0-429b-e169-6bc6a9738500/public',
  ],
}
const paths = ['writer', 'developer', 'designer']
const subtitles = [
  'Tech - JavaScript | Medium',
  'Creative - Interactive | ReactJS',
  'Design - Prototype | Figma',
]

const mapNumber = function (number, in_min, in_max, out_min, out_max) {
  return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const defaultSpringValues = () => ({
  position: [0, 0, 0],
  scale: [0, 0, 0],
  rotation: [0, 0, 0],
  uAlpha: 0,
  uOffset: [0, 0],
  config: config.gentle,
})

type SpringApi = SpringRef<{
  position: number[]
  scale: number[]
  rotation: number[]
  uAlpha: number
  uOffset: number[]
}>

interface HTMLContentProps {
  apiWriter: SpringApi
  apiDeveloper: SpringApi
  apiDesigner: SpringApi
  viewport: Viewport
}

const HTMLContent = ({
  apiWriter,
  apiDeveloper,
  apiDesigner,
  viewport,
}: HTMLContentProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const { set: setPath } = useSessionStorageValue('path', {
    defaultValue: '',
  })

  const { value: revealedIntro } = useSessionStorageValue('revealed_intro', {
    defaultValue: false,
  })

  const menuRef = useRef<HTMLDivElement>(null)

  const itemsRefs = useRef([])

  if (itemsRefs.current.length !== paths.length) {
    itemsRefs.current = Array(paths.length)
      .fill(null)
      .map((_, i) => itemsRefs.current[i] || createRef())
  }

  const refInitialRevealedIntro = useRef(revealedIntro)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          ease: 'power3.easeInOut',
        })
        .to(menuRef.current, {
          delay: refInitialRevealedIntro.current ? 0.5 : 3.5,
          opacity: 1,
          duration: 0,
        })
        .to('li hr', {
          delay: 0.33,
          width: '100%',
        })
        .to('a', {
          yPercent: -100,
          stagger: 0.33,
          ease: 'power3.easeInOut',
        })
        .to('hr', {
          width: '0%',
        })
        .to('#choosePath hr', {
          width: '100%',
        })
        .to('#choosePath span', {
          yPercent: -100,
        })
        .to('#choosePath h2', {
          yPercent: 100,
        })
        .to('#choosePath hr', {
          width: '0%',
        })
    }, menuRef)

    return () => ctx.revert()
  }, [isDesktop])

  useEffect(() => {
    setPath('')
  }, [setPath])

  const handleMouseLeave = useCallback(
    (i) => {
      const position = itemsRefs.current[i].current.getBoundingClientRect()
      const x = (position.x / window.innerWidth) * 2 - 1
      const y =
        -(position.y / window.innerHeight) * 2 +
        (i == 2 ? 1.2 : i == 1 ? 1 : 0.8)

      const api = i === 0 ? apiWriter : i === 1 ? apiDeveloper : apiDesigner

      api.start((i) => ({
        position: [x, y, 0.1 * i],
        rotation: [0, 0, 0],
        scale: [0, 0, 0],
      }))
      paths.forEach((path, index) => {
        if (index === i) {
          document.documentElement.classList.remove(path)
          setPath('')
        }
      })
    },
    [apiDesigner, apiDeveloper, apiWriter, setPath],
  )

  const handleMouseEnter = useCallback(
    (i) => {
      const position = itemsRefs.current[i].current.getBoundingClientRect()
      const x = (position.x / window.innerWidth) * 2 - 1
      const y =
        -(position.y / window.innerHeight) * 2 +
        (i == 2 ? 1.05 : i == 1 ? 0.85 : 0.7)

      const api = i === 0 ? apiWriter : i === 1 ? apiDeveloper : apiDesigner

      api.start((i) => ({
        position: [
          mapNumber(x, -1, 1, -viewport.width / 2, viewport.width / 2) + i * 1,
          mapNumber(y, -1, 1, -viewport.width / 2, viewport.width / 2),
          i * 0.1,
        ],
        rotation: [0, 0.2, ((i == 0 ? i : -i) + 1) * 0.3],
        scale: [0.7, 0.3, 1],
      }))

      paths.forEach((path, index) => {
        if (index === i) {
          document.documentElement.classList.add(path)
          setPath(path)
        } else {
          document.documentElement.classList.remove(path)
        }
      })
    },
    [apiDesigner, apiDeveloper, apiWriter, setPath, viewport.width],
  )

  return (
    <div
      ref={menuRef}
      className="opacity-0 flex flex-col items-end justify-end"
    >
      <ul>
        {paths.map((path, i) => (
          <MenuLink
            key={i}
            link={path}
            ref={itemsRefs.current[i]}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            subtitle={subtitles[i]}
            isEven={i % 2 === 0}
          />
        ))}
      </ul>
      <div id="choosePath" className="w-full flex flex-col items-center">
        <div className="h-6 overflow-hidden">
          <span className="tracking-widest block translate-y-full">
            CHOOSE YOUR PATH
          </span>
        </div>
        <hr className="max-w-[300px] my-2.5 bg-white" />
        <div className="h-8 overflow-hidden">
          <h2 className="relative !font-serif !text-2xl -translate-y-full">
            Design. Build. Launch.
            <svg
              height="3"
              width="103"
              viewBox="0 0 103 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-main absolute -bottom-0 transition-colors duration-300 -right-2"
            >
              <line
                x1="0.977539"
                y1="1.5"
                x2="102.022"
                y2="1.5"
                stroke="currentColor"
                strokeWidth={2}
              />
            </svg>
          </h2>
        </div>
      </div>
    </div>
  )
}

const SceneContent = () => {
  const textures = useTexture([...images[0], ...images[1], ...images[2]])

  const { viewport } = useThree()

  const [springsWriter, apiWriter] = useSprings(3, defaultSpringValues)
  const [springsDeveloper, apiDeveloper] = useSprings(3, defaultSpringValues)
  const [springsDesigner, apiDesigner] = useSprings(3, defaultSpringValues)

  return (
    <>
      {textures.slice(0, 3).map((texture, index) => (
        <animated.mesh key={texture.uuid} {...springsWriter[index]}>
          <ShowcaseImage {...springsWriter[index]} texture={texture} />
        </animated.mesh>
      ))}
      {textures.slice(3, 6).map((texture, index) => (
        <animated.mesh key={texture.uuid} {...springsDeveloper[index]}>
          <ShowcaseImage {...springsDeveloper[index]} texture={texture} />
        </animated.mesh>
      ))}
      {textures.slice(6, 9).map((texture, index) => (
        <animated.mesh key={texture.uuid} {...springsDesigner[index]}>
          <ShowcaseImage {...springsDesigner[index]} texture={texture} />
        </animated.mesh>
      ))}

      <Html center prepend>
        <HTMLContent
          apiWriter={apiWriter}
          apiDeveloper={apiDeveloper}
          apiDesigner={apiDesigner}
          viewport={viewport}
        />
      </Html>
    </>
  )
}

const MainScene = () => {
  const { value: revealedIntro } = useSessionStorageValue('revealed_intro', {
    defaultValue: false,
  })
  const ref = useRef()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialRevealedIntro = useMemo(() => revealedIntro, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        delay: 4,
        ease: 'easeInOut',
        opacity: 0,
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section className="home-content">
      {!initialRevealedIntro && <Intro />}
      <Canvas className="!z-30">
        <Suspense fallback={<Loader wrapperClass="!z-10" />}>
          <SceneContent />
        </Suspense>
        <EffectComposer multisampling={0}>
          <SSAO
            samples={11}
            radius={0.1}
            intensity={20}
            luminanceInfluence={0.6}
            color="green"
          />
          <SSAO
            samples={21}
            radius={0.03}
            intensity={10}
            luminanceInfluence={0.6}
            color="green"
          />
        </EffectComposer>
      </Canvas>
    </section>
  )
}

export default MainScene
