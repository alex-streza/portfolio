import { Canvas, useFrame, useThree } from '@react-three/fiber'

import { Html, useProgress } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { Suspense, useState } from 'react'
import ShowcaseImage from './ShowcaseImage'
import { config, useSpring } from '@react-spring/three'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <h1>{parseInt(progress + '')}%</h1>
    </Html>
  )
}

const images = {
  0: ['/assets/images/portfolio/1.png', '/assets/images/portfolio/2.png'],
  1: ['/assets/images/portfolio/3.png', '/assets/images/portfolio/4.png'],
  2: ['/assets/images/genidea/3.png', '/assets/images/genidea/4.png'],
}
const paths = ['writer', 'developer', 'designer']

const mapNumber = function (number, in_min, in_max, out_min, out_max) {
  return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const SceneContent = () => {
  const { viewport } = useThree()

  const [hoveredIndex, setHoveredIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  const [props, set] = useSpring(() => ({
    position: [0, 0, 0],
    scale: [0.7, 0.3, 1],
    rotation: [0, 0, 0],
    uAlpha: 0,
    uOffset: [0, 0],
    config: config.gentle,
  }))

  const handleMouseLeave = () => {
    setHovered(false)

    set({
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      uAlpha: 0,
    })
  }

  const handleMouseEnter = (ev, i) => {
    setHovered(true)
    setHoveredIndex(i)

    const x = (ev.clientX / window.innerWidth) * 2 - 1
    const y = -(ev.clientY / window.innerHeight) * 2 + 1

    set({
      position: [
        mapNumber(x, -1, 1, -viewport.width / 2, viewport.width / 2),
        mapNumber(y, -1, 1, -viewport.width / 2, viewport.width / 2),
        0,
      ],
      rotation: [0, 0.2, 0.2],
      uAlpha: 1,
    })

    paths.forEach((path, index) => {
      if (index === i) document.documentElement.classList.add(path)
      else document.documentElement.classList.remove(path)
    })
  }

  return (
    <>
      <ShowcaseImage {...props} urls={images[hoveredIndex]} open={false} />
      <Html center prepend>
        <ul className="paths-menu">
          <li
            onMouseEnter={(ev) => handleMouseEnter(ev, 0)}
            onMouseLeave={handleMouseLeave}
          >
            <a className="hover:!text-main reset-link" href="/writer">
              Writer
            </a>
          </li>
          <li
            onMouseEnter={(ev) => handleMouseEnter(ev, 1)}
            onMouseLeave={handleMouseLeave}
          >
            <a className="hover:!text-main reset-link" href="/developer">
              Developer
            </a>
          </li>
          <li
            onMouseEnter={(ev) => handleMouseEnter(ev, 2)}
            onMouseLeave={handleMouseLeave}
          >
            <a className="hover:!text-main reset-link" href="/designer">
              Designer
            </a>
          </li>
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
