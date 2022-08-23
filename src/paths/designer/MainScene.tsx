import { Html, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import HTML from './Html'

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
        <HTML />
      </Suspense>
    </Canvas>
  )
}

export default MainScene
