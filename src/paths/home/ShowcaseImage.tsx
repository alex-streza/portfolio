import { animated, SpringValue } from '@react-spring/three'
import { shaderMaterial } from '@react-three/drei'
import { extend, ShaderMaterialProps, TextureProps } from '@react-three/fiber'

interface ImageProps {
  uAlpha: SpringValue<number>
  uOffset: SpringValue<number>
  texture: TextureProps
}

const ImageShaderMaterial: ShaderMaterialProps = shaderMaterial(
  {
    uTexture: {
      value: null,
    },
    uAlpha: {
      value: 1,
    },
  },
  `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 newPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
  }
`,
  `
  uniform sampler2D uTexture;
  uniform float uAlpha;
  varying vec2 vUv;

  void main() {
    vec3 color = texture2D(uTexture,vUv).rgb;
    gl_FragColor = vec4(color, 1);
  }
`,
)
extend({ ImageShaderMaterial })

export type ImageShaderMaterialImpl = {
  uTexture?: { value: TextureProps }
  uAlpha?: { value: number }
} & JSX.IntrinsicElements['shaderMaterial']

declare global {
  namespace JSX {
    interface IntrinsicElements {
      imageShaderMaterial: ImageShaderMaterialImpl
    }
  }
}

export const AnimatedImageShaderMaterial = animated(
  (props: ImageShaderMaterialImpl) => <imageShaderMaterial {...props} />,
)

const ShowcaseImage = ({ uAlpha, texture }: ImageProps) => {
  return (
    <>
      <planeBufferGeometry attach="geometry" args={[5, 7]} />
      <AnimatedImageShaderMaterial attach="material" uTexture={texture} />
    </>
  )
}

export default ShowcaseImage
