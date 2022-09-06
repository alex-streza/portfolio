import { OrbitControls, Stage } from '@react-three/drei'
import { useRef } from 'react'
import Model from './Keyboard'

const Scene = () => {
  const ref = useRef()

  return (
    <>
      <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
        <Model />
      </Stage>
      <OrbitControls ref={ref} />
    </>
  )
}

export default Scene
