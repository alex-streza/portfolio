import { animated } from '@react-spring/three'
import { imageShader } from './imageShader'

interface ShowcaseImagesProps {
  textures: any[]
  springs: any[]
}

const Image = ({ uAlpha, uOffset, texture }) => {
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

const ShowcaseImages = ({ textures, springs }: ShowcaseImagesProps) => {
  return (
    <group>
      {textures.map((texture, i) => (
        <animated.mesh key={i} {...springs[i]}>
          <Image {...springs[i]} texture={texture} />
        </animated.mesh>
      ))}
    </group>
  )
}

export default ShowcaseImages
