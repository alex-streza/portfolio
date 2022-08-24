import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'
import { SphereProps } from '@react-three/cannon'
import {
  ContactShadows,
  Environment,
  MeshDistortMaterial,
} from '@react-three/drei'
import { LightProps, useFrame } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial)

const Blobby = () => {
  const sphere = useRef<SphereProps>()
  const light = useRef<LightProps>()
  const [down, setDown] = useState(false)

  // Make the bubble float and follow the mouse
  // This is frame-based animation, useFrame subscribes the component to the render-loop
  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20
    light.current.position.y = state.mouse.y * 20
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        state.mouse.x / 2,
        0.2,
      )
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 + state.mouse.y / 2,
        0.2,
      )
    }
  })

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: 3,
      coat: 1,
      ambient: 0.5,
      env: 1,
      color: '#5546FB',
      config: (n) => n === 'wobble' && { mass: 2, tension: 1000, friction: 10 },
    },
    [down],
  )

  return (
    <>
      <a.ambientLight intensity={ambient} />
      <a.pointLight
        ref={light}
        position-z={-15}
        intensity={env}
        color="#63DEC7"
      />
      <Suspense fallback={null}>
        {/* @ts-ignore */}
        <a.mesh
          ref={sphere}
          scale={wobble}
          onPointerUp={() => {
            setDown(false)
          }}
        >
          <sphereBufferGeometry args={[0.5, 64, 64]} />
          <AnimatedMaterial
            color={color}
            envMapIntensity={env}
            clearcoat={coat}
            clearcoatRoughness={0.1}
            metalness={0.1}
          />
        </a.mesh>
        <Environment preset="forest" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={0.8}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  )
}

export default Blobby
