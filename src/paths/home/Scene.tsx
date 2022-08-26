import { Canvas, useThree } from '@react-three/fiber'

import { useSessionStorageValue } from '@react-hookz/web'
import { animated, config, useSprings } from '@react-spring/three'
import { Html, useProgress, useTexture } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { createRef, Suspense, useEffect, useRef } from 'react'
import MenuLink from './MenuLink'
import ShowcaseImage from './ShowcaseImage'
import Loader from '@components/transition/Loader'

const images = {
  0: [
    '/assets/images/portfolio/8.png',
    '/assets/images/portfolio/7.png',
    '/assets/images/portfolio/9.png',
  ],
  1: [
    '/assets/images/portfolio/5.png',
    '/assets/images/3d-resources/4.png',
    '/assets/images/genidea/1.png',
  ],
  2: [
    '/assets/images/genidea/2.png',
    '/assets/images/snow-fox-design-system/0.png',
    '/assets/images/3d-resources/1.png',
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

const SceneContent = () => {
  const [, setPath] = useSessionStorageValue('path', '')

  const { viewport } = useThree()
  const textures = useTexture([...images[0], ...images[1], ...images[2]])

  const itemsRefs = useRef([])

  if (itemsRefs.current.length !== paths.length) {
    itemsRefs.current = Array(paths.length)
      .fill(null)
      .map((_, i) => itemsRefs.current[i] || createRef())
  }

  const [springsWriter, apiWriter] = useSprings(3, defaultSpringValues)
  const [springsDeveloper, apiDeveloper] = useSprings(3, defaultSpringValues)
  const [springsDesigner, apiDesigner] = useSprings(3, defaultSpringValues)

  useEffect(() => {
    setPath('')
  }, [setPath])

  const handleMouseLeave = (i) => {
    const position = itemsRefs.current[i].current.getBoundingClientRect()
    const x = (position.x / window.innerWidth) * 2 - 1
    const y =
      -(position.y / window.innerHeight) * 2 + (i == 2 ? 1.2 : i == 1 ? 1 : 0.8)

    const api = i === 0 ? apiWriter : i === 1 ? apiDeveloper : apiDesigner

    api.start((i) => ({
      position: [x, y, 0.1 * i],
      rotation: [0, 0, 0],
      uAlpha: 0,
      scale: [0, 0, 0],
    }))
    paths.forEach((path, index) => {
      if (index === i) {
        document.documentElement.classList.remove(path)
        setPath('')
      }
    })
  }

  const handleMouseEnter = (i) => {
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
      uAlpha: 1,
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
  }

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
        <div className="flex flex-col items-end justify-end">
          <ul>
            {paths.map((path, i) => (
              <MenuLink
                key={i}
                link={path}
                ref={itemsRefs.current[i]}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
                subtitle={subtitles[i]}
              />
            ))}
          </ul>
          <div className="w-full flex flex-col items-center">
            <span className="tracking-widest">CHOOSE YOUR PATH</span>
            <h2 className="relative !font-serif !text-2xl mt-5">
              Design. Build. Launch.
              <svg
                width="103"
                height="3"
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
      </Html>
    </>
  )
}

const MainScene = () => {
  return (
    <section className="home-content">
      <Canvas>
        <Suspense fallback={<Loader />}>
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
