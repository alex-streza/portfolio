import { Html, PerspectiveCamera, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import Blobby from './Blobby'
import HTML from './Html'

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html center>
      <h1>{parseInt(progress + '')}%</h1>
    </Html>
  )
}

const Camera = () => {
  return <PerspectiveCamera makeDefault position={[-4, -1, 10]} />
}

const MainScene = () => {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <HTML />
        <Blobby />
        <Camera />
      </Suspense>
    </Canvas>
  )
}

export default MainScene
