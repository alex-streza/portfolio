// @ts-nocheck

import { animated, useSprings } from '@react-spring/three'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

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

  const keycaps = Object.keys(nodes)
    .map((key) => nodes[key])
    .filter((key) => key.name.startsWith('KEYCAP'))

  const [springs, api] = useSprings(keycaps.length, () => ({
    scale: 1,
    material: materials.Alu_Ano_KbdFans_DarkGreen,
  }))

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
                      material: materials.Alu_Ano_KbdFans_DarkGreen,
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
        position={[0, -1, -0.06]}
        scale={15}
        rotation={[0.6, -0.3, -0.1]}
      >
        <group
          name="CapsMove_TKL003"
          position={[-0.04, 0.02, 0.06]}
          rotation={[0.1, 0, 0]}
        >
          {keycaps.map((key, i) => {
            return (
              // @ts-ignore
              <animated.mesh
                key={key.name}
                castShadow
                receiveShadow
                geometry={key.geometry}
                position={key.position}
                material={springs[i].material}
                scale={springs[i].scale}
              />
            )
          })}
          {/* <mesh
            name="KEYCAP_Frog_K1_100_Esc"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_Esc.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.12, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F1"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F1.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.1, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F10"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F10.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.08, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F11"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F11.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.1, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F12"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F12.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.12, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F13"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F13.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.15, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F2"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F2.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.08, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F3"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F3.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.06, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F4"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F4.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.04, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F5"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F5.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.02, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F6"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F6.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F7"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F7.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.02, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F8"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F8.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.04, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_F9"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_F9.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.06, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_Pause"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_Pause.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.21, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_Print"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_Print.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.17, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K1_100_Scroll"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K1_100_Scroll.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.19, 0, -0.11]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_0"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_0.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.07, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_1"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_1.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.1, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_2"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_2.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.08, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_3"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_3.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.06, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_4"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_4.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.05, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_5"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_5.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.03, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_6"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_6.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.01, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_7"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_7.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.01, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_8"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_8.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.03, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_9"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_9.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.05, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_Home"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_Home.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.19, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_Insert"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_Insert.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.17, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_Minus"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_Minus.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.09, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_PgUp"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_PgUp.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.21, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_Plus"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_Plus.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.11, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_100_Tilde"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_100_Tilde.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.12, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K2_200_Back"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K2_200_Back.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.14, 0, -0.09]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_Close"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_Close.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.12, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_Del"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_Del.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.17, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_E"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_E.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.05, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_End"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_End.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.19, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_I"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_I.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.04, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_O"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_O.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.06, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_Open"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_Open.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.1, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_P"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_P.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.08, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_PgDn"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_PgDn.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.21, 0, -0.07]}
          />
          <animated.mesh
            name="KEYCAP_Frog_K3_100_Q"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_Q.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.09, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_R"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_R.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.04, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_T"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_T.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.02, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_U"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_U.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.02, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_W"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_W.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.07, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_100_Y"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_100_Y.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_150_Pipe"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_150_Pipe.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.14, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K3_150_Tab"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K3_150_Tab.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.12, 0, -0.07]}
          />
          <mesh
            name="KEYCAP_Frog_K4_100_A"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_100_A.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.09, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K4_100_D"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_100_D.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.05, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K4_100_F"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_100_F.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.03, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K4_100_G"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_100_G.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.01, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K4_100_H"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_100_H.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.01, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K4_100_J"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_100_J.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.03, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K4_100_K"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_100_K.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.05, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K4_100_L"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_100_L.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.06, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K4_100_Quote"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_100_Quote.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.1, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K4_100_S"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_100_S.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.07, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K4_100_SemiColon"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_100_SemiColon.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.08, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K4_175_Caps"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_175_Caps.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.11, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K4_225_Enter"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K4_225_Enter.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.13, 0, -0.05]}
          />
          <mesh
            name="KEYCAP_Frog_K5_100_B"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_100_B.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_100_C"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_100_C.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.04, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_100_Comma"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_100_Comma.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.05, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_100_CursorU"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_100_CursorU.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.19, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_100_Fn"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_100_Fn.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.15, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_100_M"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_100_M.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.04, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_100_N"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_100_N.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.02, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_100_Question"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_100_Question.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.09, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_100_Stop"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_100_Stop.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.07, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_100_V"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_100_V.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.02, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_100_X"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_100_X.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.06, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_100_Z"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_100_Z.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.08, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_175_Shift"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_175_Shift.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.12, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K5_225_Shift"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K5_225_Shift.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.11, 0, -0.03]}
          />
          <mesh
            name="KEYCAP_Frog_K6_100_CursorD"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K6_100_CursorD.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.19, 0, -0.01]}
          />
          <mesh
            name="KEYCAP_Frog_K6_100_CursorL"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K6_100_CursorL.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.17, 0, -0.01]}
          />
          <mesh
            name="KEYCAP_Frog_K6_100_CursorR"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K6_100_CursorR.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.21, 0, -0.01]}
          />
          <mesh
            name="KEYCAP_Frog_K6_150_AltL"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K6_150_AltL.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.07, 0, -0.01]}
          />
          <mesh
            name="KEYCAP_Frog_K6_150_AltR"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K6_150_AltR.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.09, 0, -0.01]}
          />
          <mesh
            name="KEYCAP_Frog_K6_150_CtrlL"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K6_150_CtrlL.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[-0.12, 0, -0.01]}
          />
          <mesh
            name="KEYCAP_Frog_K6_150_CtrlR"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K6_150_CtrlR.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.14, 0, -0.01]}
          />
          <mesh
            name="KEYCAP_Frog_K6_700_SpaceConvex"
            castShadow
            receiveShadow
            geometry={nodes.KEYCAP_Frog_K6_700_SpaceConvex.geometry}
            material={materials.Alu_Ano_KbdFans_DarkGreen}
            position={[0.01, 0, -0.01]}
          /> */}
        </group>
        <mesh
          name="Frog_Bottom"
          castShadow
          receiveShadow
          geometry={nodes.Frog_Bottom.geometry}
          material={materials['AluGrey.001']}
          rotation={[0.1, 0, 0]}
        />
        <mesh
          name="Frog_Feet"
          castShadow
          receiveShadow
          geometry={nodes.Frog_Feet.geometry}
          material={materials['Rubber_Black.001']}
        />
        <mesh
          name="Frog_PCB"
          castShadow
          receiveShadow
          geometry={nodes.Frog_PCB.geometry}
          material={materials['PCB_Black.001']}
          position={[0, 0.01, 0]}
          rotation={[0.1, 0, 0]}
        />
        <mesh
          name="Frog_Plate"
          castShadow
          receiveShadow
          geometry={nodes.Frog_Plate.geometry}
          material={materials['Brass_Satin.001']}
          position={[0, 0.02, 0]}
          rotation={[0.1, 0, 0]}
        />
        <mesh
          name="Frog_Top"
          castShadow
          receiveShadow
          geometry={nodes.Frog_Top.geometry}
          material={materials['Alu_Ano_S+R_MidnightGreen']}
          position={[0, 0.02, 0]}
          rotation={[0.1, 0, 0]}
        />
        <mesh
          name="Frog_Weight"
          castShadow
          receiveShadow
          geometry={nodes.Frog_Weight.geometry}
          material={materials['Brass_Burnished.001']}
          position={[0, 0, -0.01]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/Keyboard.glb')
