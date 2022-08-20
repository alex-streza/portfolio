import { animated, SpringValue } from '@react-spring/three'
import { TextureProps } from '@react-three/fiber'
import { imageShader } from './imageShader'

interface ImageProps {
  uAlpha: SpringValue<number>
  uOffset: SpringValue<number>
  texture: TextureProps
}

const Image = ({ uAlpha, uOffset, texture }: ImageProps) => {
  return (
    <>
      <planeBufferGeometry attach="geometry" args={[5, 7]} />
      <animated.shaderMaterial
        attach="material"
        transparent
        args={[{ ...imageShader }]}
        uniforms-uTexture-value={texture}
        uniforms-uAlpha-value={uAlpha}
        // uniforms-uOffset-value={uOffset}
      />
    </>
  )
}

interface ShowcaseImagesProps {
  textures: TextureProps[]
  springs: {
    uAlpha: SpringValue<number>
    uOffset: SpringValue<number[]>
    position: SpringValue<number[]>
    scale: SpringValue<number[]>
    rotation: SpringValue<number[]>
  }[]
}

const ShowcaseImages = ({ textures, springs }: ShowcaseImagesProps) => {
  return (
    <>
      {textures.map((texture, i) => (
        <animated.mesh key={texture.uuid} {...springs[i]}>
          <Image {...springs[i]} texture={texture} />
        </animated.mesh>
      ))}
    </>
  )
}

export default ShowcaseImages
