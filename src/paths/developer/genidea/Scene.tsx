import Gallery from '@components/gallery/Gallery'
import { Debug, Physics, usePlane, useSphere } from '@react-three/cannon'
import { useFrame, useThree } from '@react-three/fiber'
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

const urls = [...Array(6)].map((_, i) => `/assets/images/genidea/${i + 1}.png`)

const Scene = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <spotLight
        position={[20, 20, 25]}
        penumbra={1}
        angle={0.2}
        color="white"
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <HTML />
      <Physics gravity={[0, 0, 0]}>
        {/* <Debug color="white" scale={1.1}> */}
        <Collisions />
        <Balls />
        {/* </Debug> */}
      </Physics>
      <Gallery urls={urls} />
    </>
  )
}

export default Scene
