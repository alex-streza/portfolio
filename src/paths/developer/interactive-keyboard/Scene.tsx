import { Environment, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import Model from './Keyboard'

const Scene = () => {
  const ref = useRef()

  return (
    <>
      <Model />
      <OrbitControls ref={ref} />
    </>
  )
}

export default Scene
