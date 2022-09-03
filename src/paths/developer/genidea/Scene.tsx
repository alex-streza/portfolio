import Gallery from '@components/gallery/Gallery'
import { Debug, Physics, usePlane, useSphere } from '@react-three/cannon'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
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

  return useFrame((state) => {
    const offset = state.clock.elapsedTime > 4 ? 0 : 5
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2 + offset,
      0.5,
    )
  })
}

const urls = [
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/4264ae59-704a-4f94-5a2a-d97c31680d00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/eb192c8c-b018-4904-d6a1-05b63f750d00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/07bae8d0-74e9-4f8b-8947-86fed8387a00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/0ba8db9f-9533-471c-92ba-ecf8f7567200/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/d3785d6f-b129-4698-983d-d027789f1a00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/3fc49f03-cd10-46a8-0f44-3d738f3eb600/public',
]

const Scene = () => {
  const { debug } = useControls({
    debug: {
      value: false,
    },
  })

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
        {debug && (
          <Debug color="white" scale={1.1}>
            <Collisions />
            <Balls />
          </Debug>
        )}
        {!debug && (
          <>
            <Collisions />
            <Balls />
          </>
        )}
      </Physics>
      <Gallery urls={urls} />
    </>
  )
}

export default Scene
