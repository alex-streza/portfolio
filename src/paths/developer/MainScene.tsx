import { Canvas, useThree } from '@react-three/fiber'

import { useMediaQuery } from '@react-hookz/web'
import { Html, useProgress } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { Suspense, useState } from 'react'
import ResourcesS3Dcene from './3d-resources/Scene'
import GenIdeaScene from './genidea/Scene'
import PortfolioScene from './portfolio/Scene'
import KeyboardScene from './interactive-keyboard/Scene'
import Loader from '@components/transition/Loader'
import KeyboardTrainer from './interactive-keyboard/KeyboardTrainer'

interface ProjectsProps {
  selectedProject: number
  onSelectProject: (project: number) => void
}

const Projects = ({ selectedProject, onSelectProject }: ProjectsProps) => {
  const { width, height } = useThree((state) => state.viewport)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <group
      position={[
        -width / 2 + (!isDesktop ? 0.35 : width / 2),
        -height / 2 + (!isDesktop ? 2 : 1),
        0,
      ]}
    >
      <Html center>
        <div className="dark:bg-gray-hex bg-white bg-opacity-75 backdrop-blur-sm rounded-8 p-4 flex md:flex-row flex-col gap-5">
          {[...Array(4)].map((_, i) => (
            <button
              key={i}
              className={`dark:bg-gray-600 bg-light-gray-800 rotate-45 transition-all duration-300 hover:!bg-main-400 ${
                selectedProject === i ? 'w-[26px] h-[26px] !bg-main' : 'w-6 h-6'
              }`}
              onClick={() => onSelectProject(i)}
            ></button>
          ))}
        </div>
      </Html>
    </group>
  )
}

const MainScene = () => {
  const [project, setProject] = useState(0)

  return (
    <>
      {project === 3 && <KeyboardTrainer onBack={() => setProject(2)} />}
      <Canvas>
        <Suspense fallback={<Loader />}>
          {project === 0 && <GenIdeaScene />}
          {project === 1 && <ResourcesS3Dcene />}
          {project === 2 && <PortfolioScene />}
          {project === 3 && <KeyboardScene />}
        </Suspense>
        {project !== 3 && (
          <Projects selectedProject={project} onSelectProject={setProject} />
        )}
        <EffectComposer multisampling={0}>
          <SSAO
            samples={11}
            radius={0.1}
            intensity={20}
            luminanceInfluence={0.6}
            color="green"
          />
          <SSAO
            samples={21}
            radius={0.03}
            intensity={10}
            luminanceInfluence={0.6}
            color="green"
          />
        </EffectComposer>
      </Canvas>
    </>
  )
}

export default MainScene
