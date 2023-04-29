import { useMediaQuery } from '@react-hookz/web'
import {
  Image,
  ImageProps,
  Scroll,
  ScrollControls,
  useScroll,
} from '@react-three/drei'
import { Color, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

import Minimap from './Minimap'

const damp = THREE.MathUtils.damp

interface ItemProps {
  urls: string[]
  url: string
  index: number
  position: [number, number, number]
  clicked: number
  setClicked: (clicked: number | null) => void
  scale: number[]
  height: number
  c?: Color
}

const Item = ({
  urls,
  index,
  position,
  clicked,
  setClicked,
  scale,
  height,
  c = new THREE.Color(),
  ...props
}: ItemProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const ref = useRef<ImageProps>()
  const scroll = useScroll()

  const [hovered, hover] = useState(false)

  const click = () => {
    setClicked(index === clicked ? null : index)
  }
  const over = () => hover(true)
  const out = () => hover(false)

  useFrame((state, delta) => {
    const y = scroll.curve(
      index / urls.length - 1.5 / urls.length,
      4 / urls.length,
    )

    ref.current.material.scale[1] = ref.current.scale.y = damp(
      ref.current.scale.y,
      clicked === index ? height + 1 : height + y,
      8,
      delta,
    )
    ref.current.material.scale[0] = ref.current.scale.x = damp(
      ref.current.scale.x,
      clicked === index ? (isDesktop ? 8 : 4.7) : scale[0],
      6,
      delta,
    )
    if (clicked !== null && index < clicked) {
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] - (isDesktop ? 3.75 : 2.25),
        6,
        delta,
      )
    }
    if (clicked !== null && index > clicked) {
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] + (isDesktop ? 3.75 : 2.25),
        6,
        delta,
      )
    }
    if (clicked === null || clicked === index) {
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0],
        6,
        delta,
      )
    }
    ref.current.material.grayscale = damp(
      ref.current.material.grayscale,
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      6,
      delta,
    )
    ref.current.material.color.lerp(
      c.set(hovered || clicked === index ? 'white' : '#aaa'),
      hovered ? 0.3 : 0.1,
    )
  })

  return (
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={scale}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
    />
  )
}

const Gallery = ({ urls }: { urls: string[] }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { width } = useThree((state) => state.viewport)
  const [clicked, setClicked] = useState(null)
  const w = isDesktop ? 0.7 : 0.35
  const gap = isDesktop ? 0.15 : 0.1
  const xW = w + gap
  const isLoaded = isDesktop !== undefined

  useEffect(() => {
    setClicked(isDesktop ? 0 : null)
  }, [isDesktop])

  return (
    <ScrollControls
      horizontal
      damping={0.1}
      pages={(width - xW + urls.length * xW) / width}
    >
      {isLoaded && <Minimap urls={urls} />}
      <Scroll>
        {urls.map((url, i) => (
          <Item
            key={i}
            urls={urls}
            setClicked={setClicked}
            clicked={clicked}
            height={isDesktop ? 4 : 2}
            index={i}
            position={[i * xW + (isDesktop ? 3 : 0), isDesktop ? 0 : -1.5, 0]}
            scale={[isLoaded ? w : 0, isLoaded ? (isDesktop ? 4 : 1) : 0, 1]}
            url={url}
          />
        ))}
      </Scroll>
    </ScrollControls>
  )
}

export default Gallery
