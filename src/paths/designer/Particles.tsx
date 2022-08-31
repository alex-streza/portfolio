import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Container, Engine } from 'tsparticles-engine'

const BlurryParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container)
    },
    [],
  )

  return (
    <Particles
      className="absolute top-0 left-0 right-0 bottom-0 blur-[70px]"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: 'bigCircles',
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363'],
          },
          move: {
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 6,
            straight: false,
          },
          number: {
            // density: {
            //   enable: true,
            //   area: 800,
            // },
            value: 6,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 33, max: 100 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default BlurryParticles
