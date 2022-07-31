import { Canvas } from '@react-three/fiber'

import { Html, useProgress } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { Suspense } from 'react'
import PortfolioScene from './portfolio/Scene'
import GenIdeaScene from './genidea/Scene'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <h1>{parseInt(progress + '')}%</h1>
    </Html>
  )
}

const MainScene = () => {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <GenIdeaScene />
        {/* <PortfolioScene /> */}
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
