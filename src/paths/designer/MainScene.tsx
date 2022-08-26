import { Loader, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import HTML from './Html'

const Camera = () => {
  return <PerspectiveCamera makeDefault position={[-4, -1, 10]} />
}

const MainScene = () => {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <HTML />
        {/* <Blobby /> */}
        <Camera />
      </Suspense>
    </Canvas>
  )
}

export default MainScene
