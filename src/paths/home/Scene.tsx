import { Canvas } from '@react-three/fiber'

import { Html, useProgress } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { Suspense, useState } from 'react'
import ShowcaseImage from './ShowcaseImage'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <h1>{parseInt(progress + '')}%</h1>
    </Html>
  )
}

const MainScene = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <ShowcaseImage />
        <Html center>
          <ul className="paths-menu">
            <li onMouseEnter={() => setHoveredIndex(0)}>Writer</li>
            <li onMouseEnter={() => setHoveredIndex(1)}>Developer</li>
            <li onMouseEnter={() => setHoveredIndex(2)}>Developer</li>
          </ul>
        </Html>
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
  )
}

export default MainScene
