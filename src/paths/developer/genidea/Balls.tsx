import { MaterialProps, useFrame } from '@react-three/fiber'

import { useCompoundBody } from '@react-three/cannon/dist/index'
import { Edges } from '@react-three/drei'
import { Depth, Fresnel, LayerMaterial } from 'lamina'
import { useControls } from 'leva'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useMediaQuery } from '@react-hookz/web'

THREE.ColorManagement.legacyMode = false

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28)

const Ball = ({ vec = new THREE.Vector3(), index, ...props }) => {
  const materialRef = useRef<MaterialProps>()
  const [ref, api] = useCompoundBody(
    () => ({
      ...props,
      shapes: [
        {
          type: 'Box',
          position: [8, 5, 1.2 * props.args],
          args: new THREE.Vector3().setScalar(props.args * 0.4).toArray(),
        },
        {
          type: 'Sphere',
          args: [props.args],
        },
      ],
    }),
    null,
    [props.args],
  )

  useEffect(
    () =>
      api.position.subscribe((p) =>
        api.applyForce(
          vec
            .set(...p)
            .normalize()
            .multiplyScalar(-props.args * 35)
            .toArray(),
          [0, 0, 0],
        ),
      ),
    [api],
  )

  const { gradient } = useControls({
    gradient: {
      value: 0.7,
      min: 0,
      max: 1,
    },
  })

  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime / 2)
    const cos = Math.cos(state.clock.elapsedTime / 2)
    materialRef.current.layers[0].origin.set(cos / 2, 0, 0)
    materialRef.current.layers[1].origin.set(cos, sin, cos)
    materialRef.current.layers[2].origin.set(sin, cos, sin)
    materialRef.current.layers[3].origin.set(cos, sin, cos)
  })

  return (
    <group ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        scale={props.args}
        geometry={sphereGeometry}
      >
        <LayerMaterial ref={materialRef} toneMapped={false}>
          <Depth
            colorA="#26B59A"
            colorB="black"
            alpha={1}
            mode="normal"
            near={0.5 * gradient}
            far={0.5}
            origin={[0, 0, 0]}
          />
          <Depth
            colorA="blue"
            colorB="#F0AE05"
            alpha={1}
            mode="add"
            near={2 * gradient}
            far={2}
            origin={[0, 1, 1]}
          />
          <Depth
            colorA="green"
            colorB="#F0AE05"
            alpha={1}
            mode="add"
            near={3 * gradient}
            far={3}
            origin={[0, 1, -1]}
          />
          <Depth
            colorA="white"
            colorB="#FC5F5F"
            alpha={1}
            mode="overlay"
            near={1.5 * gradient}
            far={1.5}
            origin={[1, -1, -1]}
          />
          <Fresnel
            mode="add"
            color="white"
            intensity={0.5}
            power={1.5}
            bias={0.05}
          />
        </LayerMaterial>
        <Edges color="white" />
      </mesh>
    </group>
  )
}

const Balls = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const { count, mass, size } = useControls({
    count: { value: isDesktop ? 25 : 15, min: 0, max: 50, step: 1 },
    mass: { value: 1, min: 0, max: 10 },
    size: { value: 0.3, min: 0.1, max: 1 },
  })

  const balls = useMemo(
    () =>
      [...Array(count)].map(() => ({
        args: [size, size, 1, 1, 1.25][Math.floor(Math.random() * 1)],
        mass,
        angularDamping: 0.2,
        linearDamping: 0.95,
      })),
    [count, mass, size],
  )

  return (
    <>
      {balls.map((props, i) => (
        <Ball key={i} index={i} {...props} />
      ))}
    </>
  )
}

export default Balls
