import { Box, Plane, RoundedBox, Sphere, Stage, Torus } from '@react-three/drei'
import { PivotControls } from '@react-three/drei'
import { Cylinder } from '@react-three/drei'
import {
  AccumulativeShadows,
  Center,
  Environment,
  Instance,
  Instances,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  Text as NormalText,
  Text3D,
  useFBO,
} from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { button, useControls } from 'leva'
import { useRef } from 'react'
import { RGBELoader } from 'three-stdlib'
import { MeshRefractionMaterial } from './shaders/MeshRefractionMaterial'

const Refraction = () => {
  const { autoRotate, text, shadow, ...config } = useControls({
    text: 'Experiments',
    clearcoat: { value: 1, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.25, min: 0, max: 1 },
    uRefractPower: { value: 0.35, min: 0, max: 5 },
    uTransparent: { value: 0.25, min: 0, max: 5 },
    uIntensity: { value: 1.3, min: 0.0, max: 5.0 },
    uNoise: { value: 0.03, min: 0, max: 1, step: 0.01 },
    uSat: { value: 1.0, min: 1, max: 1.25, step: 0.01 },
    uColor: '#21ffa5',
    gColor: '#146583',
    shadow: '#63DEC7',
    autoRotate: false,
    screenshot: button(() => {
      // Save the canvas as a *.png
      const link = document.createElement('a')
      link.setAttribute('download', 'canvas.png')
      link.setAttribute(
        'href',
        document
          .querySelector('canvas')
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream'),
      )
      link.click()
    }),
  })

  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [10, 20, 20], zoom: 32 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <color attach="background" args={['#0B0B0B']} />
      <Geometries config={config} />
      <Text
        config={config}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 2.25]}
      >
        {text}
      </Text>
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={-0.1}
        zoomSpeed={0.25}
        minZoom={32}
        maxZoom={140}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
      {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
      <Environment resolution={32}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <Lightformer
            intensity={10}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={4}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={20}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={10}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 2, 1]}
          />
          <Lightformer
            type="ring"
            intensity={10}
            rotation-y={Math.PI / 2}
            position={[-0.1, -1, -5]}
            scale={10}
          />
        </group>
      </Environment>
      {/** Soft shadows */}
      <AccumulativeShadows
        temporal
        frames={100}
        color={shadow}
        colorBlend={5}
        toneMapped={true}
        alphaTest={0.9}
        opacity={1}
        scale={30}
        position={[0, -1, 0]}
      >
        <RandomizedLight
          amount={4}
          radius={10}
          ambient={0.5}
          intensity={1}
          position={[0, 10, -10]}
          size={15}
          mapSize={1024}
          bias={0.0001}
        />
      </AccumulativeShadows>
    </Canvas>
  )
}

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  // Renders a grid and crosses as instances
  <Instances position={[0, -1.02, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="#2B2B2B" />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group
          key={x + ':' + y}
          position={[
            x * 2 - Math.floor(number / 2) * 2,
            -0.01,
            y * 2 - Math.floor(number / 2) * 2,
          ]}
        >
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      )),
    )}
    <gridHelper
      args={[100, 100, '#2B2B2B', '#2B2B2B']}
      position={[0, -0.01, 0]}
    />
  </Instances>
)

const Geometries = ({ config, children }) => {
  const ref = useRef()
  const boxRef = useRef()
  const torusRef = useRef()
  const sphereRef = useRef()
  const fbo = useFBO(1024)
  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr',
  )

  const { position1, rotation1, position2, rotation2, position3, rotation3 } =
    useControls({
      position1: {
        value: [2.0, 2.5, 2.0],
        step: 0.5,
      },
      rotation1: {
        value: [0.79, 0.79, 0.79],
        step: Math.PI / 4,
      },
      position2: {
        value: [-1.5, 2.5, 2.5],
        step: 0.5,
      },
      position3: {
        value: [0.0, 1.5, 1.5],
        step: 0.5,
      },
      rotation3: {
        value: [2.93, 0.79, 0.79],
        step: Math.PI / 4,
      },
    })

  let oldBg
  useFrame((state) => {
    // Hide the outer groups contents
    ref.current.visible = false
    // Set render target to the local buffer
    state.gl.setRenderTarget(fbo)
    // Save the current background and set the HDR as the new BG
    // This is what creates the reflections
    oldBg = state.scene.background
    state.scene.background = texture
    // Render into the buffer
    state.gl.render(state.scene, state.camera)
    // Set old state back
    state.scene.background = oldBg
    state.gl.setRenderTarget(null)
    ref.current.visible = true

    boxRef.current.rotation.x += Math.sin(state.clock.getElapsedTime()) * 0.0025
    boxRef.current.rotation.y += Math.cos(state.clock.getElapsedTime()) * 0.0025
    boxRef.current.position.y += Math.cos(state.clock.getElapsedTime()) * 0.001

    sphereRef.current.position.y +=
      Math.cos(state.clock.getElapsedTime()) * 0.0015

    torusRef.current.rotation.y +=
      Math.cos(state.clock.getElapsedTime()) * 0.002
    torusRef.current.position.y +=
      Math.cos(state.clock.getElapsedTime()) * 0.002
    torusRef.current.position.y +=
      Math.cos(state.clock.getElapsedTime()) * 0.001
  })

  return (
    <group scale={5} ref={ref}>
      <RoundedBox
        ref={boxRef}
        radius={0.05}
        smoothness={4}
        position={position1}
        rotation={rotation1}
      >
        <RoundedBox />
        <MeshRefractionMaterial uSceneTex={fbo.texture} {...config} />
      </RoundedBox>
      <Sphere ref={sphereRef} scale={0.5} position={position2}>
        <Sphere />
        <MeshRefractionMaterial uSceneTex={fbo.texture} {...config} />
      </Sphere>
      <Torus
        ref={torusRef}
        scale={0.5}
        position={position3}
        rotation={rotation3}
      >
        <Torus />
        <MeshRefractionMaterial uSceneTex={fbo.texture} {...config} />
      </Torus>
    </group>
  )
}

const Text = ({
  children,
  config,
  font = '/assets/fonts/Inter Black_Regular.json',
  ...props
}) => {
  const ref = useRef()
  const fbo = useFBO(1024)
  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr',
  )

  let oldBg
  useFrame((state) => {
    // Hide the outer groups contents
    ref.current.visible = false
    // Set render target to the local buffer
    state.gl.setRenderTarget(fbo)
    // Save the current background and set the HDR as the new BG
    // This is what creates the reflections
    oldBg = state.scene.background
    state.scene.background = texture
    // Render into the buffer
    state.gl.render(state.scene, state.camera)
    // Set old state back
    state.scene.background = oldBg
    state.gl.setRenderTarget(null)
    ref.current.visible = true
  })

  return (
    <>
      <group ref={ref}>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
          >
            {children}
            {/** Pass the rendered buffer into the refraction shader */}
            <MeshRefractionMaterial uSceneTex={fbo.texture} {...config} />
          </Text3D>
        </Center>
        <Grid />
      </group>
      {/** Double up the text as a flat layer at the bottom for more interesting refraction */}
      <Center scale={[0.8, 1, 1]} front top {...props} position={[0, -1, 2.35]}>
        <Text3D
          font={font}
          scale={5}
          letterSpacing={-0.03}
          height={0.01}
          curveSegments={32}
        >
          {children}
          <meshBasicMaterial color={config.gColor} />
        </Text3D>
      </Center>
    </>
  )
}

export default Refraction
