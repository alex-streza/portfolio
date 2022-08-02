import { Image, ImageProps } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

const ShowcaseImage = () => {
  const ref = useRef<ImageProps>()
  const position = [0, 0, 0]
  const scale = [1, 1, 1]
  const geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32)

  return (
    <Image
      ref={ref}
      position={position}
      scale={scale}
      geometry={geometry}
      url="/assets/images/portfolio/1.png"
      // onClick={click}
      // onPointerOver={over}
      // onPointerOut={out}
    />
  )
}

export default ShowcaseImage
