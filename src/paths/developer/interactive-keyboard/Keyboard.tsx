// @ts-nocheck

import { b } from '@liveblocks/client/index-0007883d'
import { useMediaQuery } from '@react-hookz/web'
import { animated, useSprings, useTransition } from '@react-spring/three'
import { useGLTF } from '@react-three/drei'
import { useEffect, useMemo } from 'react'

const specialCharacters = {
  Escape: 'Esc',
  Control: 'CtrlL',
  Pause: '',
  ' ': 'SpaceConvex',
  Print: 'Print',
  Scroll: 'Scroll',
  Home: 'Home',
  End: 'End',
  PageUp: 'PgUp',
  PageDown: 'PgDn',
  Insert: 'Ins',
  Delete: 'Del',
  '`': 'Tilde',
  Back: 'Back',
  Close: 'Close',
  Question: 'Question',
  Tab: 'Tab',
  Del: 'Delete',
  Open: 'Open',
  Backspace: 'Back',
  '|': 'Pipe',
  "'": 'Quote',
  ';': 'SemiColon',
  ',': 'Comma',
  '=': 'Plus',
  '-': 'Minus',
  '/': 'Question',
  CapsLock: 'Caps',
  Shift: 'Shift',
  Alt: 'Alt',
}

export default function Model(props) {
  const { nodes, materials } = useGLTF('/assets/models/Keyboard.glb')
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const keycaps = useMemo(
    () =>
      Object.keys(nodes)
        .map((key) => ({ ...nodes[key] }))
        .filter((key) => key.name.startsWith('KEYCAP'))
        .map((key, index) => ({ ...key, index })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
  const body = Object.keys(nodes)
    .map((key) => nodes[key])
    .filter((key) => key.name.startsWith('Frog_'))

  const [springs, api] = useSprings(keycaps.length, () => ({
    scale: 1,
    material: materials['AluGrey.001'],
  }))

  const transitionedKeycaps = useTransition(keycaps, {
    from: { scale: [0, 0, 0] },
    enter: () => ({ scale: [1, 1, 1] }),
    leave: { scale: [0.1, 0.1, 0.1] },
    config: { mass: 5, tension: 1000, friction: 100 },
    trail: 25,
    delay: 200,
  })

  const transitionedBody = useTransition(body, {
    from: { scale: [0, 0, 0] },
    enter: () => ({ scale: [1, 1, 1] }),
    leave: { scale: [0.1, 0.1, 0.1] },
    config: { mass: 5, tension: 1000, friction: 100 },
    trail: 100,
  })

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      const keyIndex = keycaps.findIndex(
        (key) =>
          key.name.toLowerCase().endsWith('_' + e.key.toLowerCase()) ||
          key.name
            .toLowerCase()
            .endsWith('_' + (specialCharacters[e.key] ?? '').toLowerCase()),
      )

      if (keyIndex > -1) {
        api.start((i) => {
          if (i === keyIndex) {
            return {
              scale: 1.1,
              material: materials['GoldPins.001'],
              onRest: () => {
                api.start((i) => {
                  if (i === keyIndex) {
                    return {
                      scale: 1,
                      material: materials['AluGrey.001'],
                    }
                  }
                })
              },
            }
          }
        })
      }
    })
  }, [api, keycaps, materials])

  return (
    <group {...props} dispose={null}>
      <group
        name="Frog_Move"
        position={[0, -2.2, -0.06]}
        scale={isDesktop ? 12 : 8}
        rotation={[0.7, 0, 0]}
      >
        <group
          name="CapsMove_TKL003"
          position={[-0.04, 0.02, 0.06]}
          rotation={[0.1, 0, 0]}
        >
          {transitionedKeycaps((key, { geometry, position, index }) => {
            return (
              <animated.mesh
                {...key}
                castShadow
                receiveShadow
                geometry={geometry}
                position={position}
                material={springs[index].material}
              />
            )
          })}
        </group>
        {transitionedBody((b, { geometry, position }) => (
          <animated.mesh
            {...b}
            key={b.name}
            castShadow
            receiveShadow
            geometry={geometry}
            position={position}
            material={materials['PCB_Black.001']}
          />
        ))}
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/Keyboard.glb')
