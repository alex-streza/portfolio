import { useMediaQuery } from '@react-hookz/web'
import { useScroll } from '@react-three/drei'
import {
  BufferGeometryProps,
  GroupProps,
  LineBasicMaterialProps,
  useFrame,
  useThree,
} from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const material: LineBasicMaterialProps = new THREE.LineBasicMaterial({
  color: 'white',
})
const geometry: BufferGeometryProps = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
])
const damp = THREE.MathUtils.damp

const Minimap = ({ urls }: { urls: string[] }) => {
  const ref = useRef<GroupProps>()
  const scroll = useScroll()

  const isDesktop = useMediaQuery('(min-width: 768px)')

  const { height } = useThree((state) => state.viewport)

  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      // Give me a value between 0 and 1
      //   starting at the position of my item
      //   ranging across 4 / total length
      //   make it a sine, so the value goes from 0 to 1 to 0.
      const y = scroll.curve(
        index / urls.length - 1.5 / urls.length,
        4 / urls.length,
      )
      child.scale.y = damp(child.scale.y, 0.1 + y / 6, 8, delta)
    })
  })
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line
          key={i}
          // @ts-ignore
          geometry={geometry}
          material={material}
          position={[
            i * 0.06 - urls.length * 0.03 + (isDesktop ? 3 : 0),
            -height / 2 + (isDesktop ? 0.3 : 0.2),
            0,
          ]}
        />
      ))}
    </group>
  )
}

export default Minimap
