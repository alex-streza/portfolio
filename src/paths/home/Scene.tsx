import { Canvas, useFrame, useThree } from '@react-three/fiber'

import { Html, useProgress, useTexture } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { createRef, Suspense, useEffect, useRef, useState } from 'react'
import ShowcaseImages from './ShowcaseImage'
import { config, useSpring, useSprings } from '@react-spring/three'
import MenuLink from './MenuLink'
import { useLocalStorageValue, useSessionStorageValue } from '@react-hookz/web'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <h1>{parseInt(progress + '')}%</h1>
    </Html>
  )
}

const images = {
  0: [
    '/assets/images/portfolio/1.png',
    '/assets/images/portfolio/2.png',
    '/assets/images/portfolio/3.png',
  ],
  1: [
    '/assets/images/portfolio/5.png',
    '/assets/images/portfolio/4.png',
    '/assets/images/genidea/1.png',
  ],
  2: [
    '/assets/images/genidea/2.png',
    '/assets/images/genidea/3.png',
    '/assets/images/genidea/4.png',
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

const SceneContent = () => {
  const [, setPath] = useSessionStorageValue('path', '')

  const { viewport } = useThree()
  const textures = useTexture([...images[0], ...images[1], ...images[2]])

  const [hoveredIndex, setHoveredIndex] = useState(0)

  const itemsRefs = useRef([])

  if (itemsRefs.current.length !== paths.length) {
    itemsRefs.current = Array(paths.length)
      .fill(null)
      .map((_, i) => itemsRefs.current[i] || createRef())
  }

  const [springs, api] = useSprings(3, (index) => ({
    position: [0, 0, 0],
    scale: [0.7, 0.3, 1],
    rotation: [0, 0, 0],
    uAlpha: 0,
    uOffset: [0, 0],
    config: config.gentle,
  }))

  useEffect(() => {
    setPath('')
  }, [])

  const handleMouseLeave = (i) => {
    const position = itemsRefs.current[i].current.getBoundingClientRect()
    const x = (position.x / window.innerWidth) * 2 - 1
    const y =
      -(position.y / window.innerHeight) * 2 + (i == 2 ? 1.2 : i == 1 ? 1 : 0.8)

    api.start((i) => ({
      position: [x, y, 0.1 * i],
      rotation: [0, 0, 0],
      uAlpha: 0,
    }))
    paths.forEach((path, index) => {
      if (index === i) {
        document.documentElement.classList.remove(path)
        setPath('')
      }
    })
  }

  const handleMouseEnter = (i) => {
    setHoveredIndex(i)

    const position = itemsRefs.current[i].current.getBoundingClientRect()
    const x = (position.x / window.innerWidth) * 2 - 1
    const y =
      -(position.y / window.innerHeight) * 2 +
      (i == 2 ? 1.05 : i == 1 ? 0.9 : 0.8)

    api.start((i) => ({
      position: [
        mapNumber(x, -1, 1, -viewport.width / 2, viewport.width / 2) + i * 1,
        mapNumber(y, -1, 1, -viewport.width / 2, viewport.width / 2),
        i * 0.1,
      ],
      rotation: [0, 0.2, ((i == 0 ? i : -i) + 1) * 0.3],
      uAlpha: 1,
    }))

    paths.forEach((path, index) => {
      if (index === i) {
        document.documentElement.classList.add(path)
        setPath(path)
      } else document.documentElement.classList.remove(path)
    })
  }

  return (
    <>
      {hoveredIndex == 0 && (
        <ShowcaseImages springs={springs} textures={textures.slice(0, 3)} />
      )}
      {hoveredIndex == 1 && (
        <ShowcaseImages springs={springs} textures={textures.slice(3, 6)} />
      )}
      {hoveredIndex == 2 && (
        <ShowcaseImages springs={springs} textures={textures.slice(6, 9)} />
      )}
      <Html center prepend>
        <ul className="paths-menu">
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
