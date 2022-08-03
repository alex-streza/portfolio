import { useTexture } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import { useRef } from 'react'
import { animated } from '@react-spring/three'
import { imageShader } from './imageShader'

interface ShowcaseImageProps {
  urls: string[]
  open: boolean
  uAlpha: number
  uOffset: [number, number]
}

const ShowcaseImage = ({
  urls,
  open,
  uAlpha,
  uOffset,
  ...props
}: ShowcaseImageProps) => {
  const ref = useRef<MeshProps>()

  const [texture] = useTexture(urls)

  return (
    <animated.mesh ref={ref} {...props}>
      <planeBufferGeometry attach="geometry" args={[5, 7]} />
      <animated.shaderMaterial
        attach="material"
        transparent
        args={[imageShader]}
        uniforms-uTexture-value={texture}
        uniforms-uAlpha-value={uAlpha}
        uniforms-uOffset-value={uOffset}
      />
    </animated.mesh>
  )
}

export default ShowcaseImage
