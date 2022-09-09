import { Environment, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import Model from './Keyboard'

const Scene = () => {
  const ref = useRef()

  return (
    <>
      <Environment preset="apartment" background={false} />
      <Model />
      <OrbitControls ref={ref} />
    </>
  )
}

export default Scene
