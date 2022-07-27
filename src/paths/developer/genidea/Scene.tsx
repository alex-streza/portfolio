import { Canvas, useFrame } from '@react-three/fiber'

import { Physics, usePlane, useSphere } from '@react-three/cannon/dist/index'
import { useThree } from '@react-three/fiber'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import Balls from './Balls'
import HTML from './Html'

const Collisions = () => {
  const viewport = useThree((state) => state.viewport)

  usePlane(() => ({ position: [0, 0, 0], rotation: [0, 0, 0] }))
  usePlane(() => ({ position: [0, 0, 8], rotation: [0, -Math.PI, 0] }))
  usePlane(() => ({ position: [0, -4, 0], rotation: [-Math.PI / 2, 0, 0] }))
  usePlane(() => ({ position: [0, 4, 0], rotation: [Math.PI / 2, 0, 0] }))
  usePlane(() => ({ position: [0, 4, 0], rotation: [Math.PI / 2, 0, 0] }))

  const [, api] = useSphere(() => ({ type: 'Kinematic', args: [1] }))

  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0.5,
    ),
  )
}

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight
        position={[20, 20, 25]}
        penumbra={1}
        angle={0.2}
        color="white"
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <directionalLight position={[0, 5, -4]} intensity={4} />
      <directionalLight position={[0, -15, -0]} intensity={2} color="green" />
      <Physics gravity={[0, 0, 0]}>
        {/* <Debug color="white" scale={1.1}>  */}
        <Collisions />
        <Balls />
        {/* </Debug> */}
      </Physics>
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
      <HTML />
    </Canvas>
  )
}

export default Scene
