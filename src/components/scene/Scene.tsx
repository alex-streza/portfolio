import Button from '@components/button/Button'
import { Html } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import {
  Physics,
  useCompoundBody,
  usePlane,
  useSphere,
} from '@react-three/cannon/dist/index'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { useEffect } from 'react'
import * as THREE from 'three'

THREE.ColorManagement.legacyMode = false
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: '#c0a090',
  emissive: 'red',
  roughness: 0,
})
const capMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.6,
  roughness: 0.15,
  color: '#8a300f',
  emissive: '#600000',
  envMapIntensity: 20,
})
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28)
const baubles = [...Array(5)].map(() => ({
  args: [0.6, 0.6, 1, 1, 1.25][Math.floor(Math.random() * 2)],
  mass: 1,
  angularDamping: 0.2,
  linearDamping: 0.95,
}))

function Bauble({ vec = new THREE.Vector3(), ...props }) {
  const { nodes } = useGLTF('/assets/models/cap.glb')
  const [ref, api] = useCompoundBody(() => ({
    ...props,
    shapes: [
      {
        type: 'Box',
        position: [0, 0, 1.2 * props.args],
        args: new THREE.Vector3().setScalar(props.args * 0.4).toArray(),
      },
      { type: 'Sphere', args: [props.args] },
    ],
  }))
  useEffect(() => api.position.subscribe((p) => api.applyForce(vec.set(...p).normalize().multiplyScalar(-props.args * 35).toArray(), [0, 0, 0])), [api]) // prettier-ignore
  return (
    <group ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        scale={props.args}
        geometry={sphereGeometry}
        material={baubleMaterial}
      />
      <mesh
        castShadow
        scale={2.5 * props.args}
        position={[0, 0, -1.8 * props.args]}
        geometry={nodes.Mesh_1.geometry}
        material={capMaterial}
      />
    </group>
  )
}

function Collisions() {
  const viewport = useThree((state) => state.viewport)

  usePlane(() => ({ position: [0, 0, 0], rotation: [0, 0, 0] }))
  usePlane(() => ({ position: [0, 0, 8], rotation: [0, -Math.PI, 0] }))
  usePlane(() => ({ position: [0, -4, 0], rotation: [-Math.PI / 2, 0, 0] }))
  usePlane(() => ({ position: [0, 4, 0], rotation: [Math.PI / 2, 0, 0] }))
  usePlane(() => ({ position: [0, 4, 0], rotation: [Math.PI / 2, 0, 0] }))

  const [, api] = useSphere(() => ({ type: 'Kinematic', args: [2] }))

  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      2.5,
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
      <directionalLight position={[0, -15, -0]} intensity={4} color="red" />
      <Physics gravity={[0, 0, 0]}>
        <Collisions />
        {
          baubles.map((props, i) => <Bauble key={i} {...props} />) /* prettier-ignore */
        }
      </Physics>
      {/* <Environment files="/adamsbridge.hdr" /> */}
      <EffectComposer multisampling={0}>
        <SSAO
          samples={11}
          radius={0.1}
          intensity={20}
          luminanceInfluence={0.6}
          color="red"
        />
        <SSAO
          samples={21}
          radius={0.03}
          intensity={10}
          luminanceInfluence={0.6}
          color="red"
        />
      </EffectComposer>
      <Html className="w-screen h-screen p-5 md:px-32 mt-20 md:mt-60" center>
        <h1 className="text-5xl">GenIdea</h1>
        <p className="max-w-[65ch]">
          Get inspired on the go with ideas in diverse tech related fields with
          artificial intelligence. Users can generate app ideas with OpenAI and
          collect them as NFTs.
        </p>
        <Button>
          <a
            href="http://devnet.genidea.app/"
            className="reset-link !text-gray-1000"
          >
            Check out
          </a>
        </Button>
      </Html>
    </Canvas>
  )
}

export default Scene
