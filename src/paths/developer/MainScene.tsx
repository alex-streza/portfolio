import { Canvas, useThree } from '@react-three/fiber'

import { Html, useProgress } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { Suspense, useState } from 'react'
import PortfolioScene from './portfolio/Scene'
import GenIdeaScene from './genidea/Scene'
import ResourcesS3Dcene from './3d-resources/Scene'
import { useMediaQuery } from '@react-hookz/web'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <h1>{parseInt(progress + '')}%</h1>
    </Html>
  )
}

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
        <div className="bg-gray-hex bg-opacity-75 backdrop-blur-sm rounded-8 p-4 flex md:flex-row flex-col gap-5">
          {[...Array(3)].map((_, i) => (
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
    <Canvas>
      <Suspense fallback={<Loader />}>
        {project === 0 && <ResourcesS3Dcene />}
        {project === 1 && <GenIdeaScene />}
        {project === 2 && <PortfolioScene />}
      </Suspense>
      <Projects selectedProject={project} onSelectProject={setProject} />
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
  )
}

export default MainScene
