import { useMediaQuery } from '@react-hookz/web'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Container, Engine } from 'tsparticles-engine'

const BlurryParticles = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    [],
  )

  return (
    <Particles
      className="fixed w-screen h-screen top-0 left-0 right-0 bottom-0 blur-[100px]"
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
            value: ['#5546FB', '#4689FB', '#63DEC7', '#FBC846', '#FB4646'],
          },
          move: {
            enable: true,
            random: true,
            straight: false,
            speed: 6,
          },
          number: {
            // density: {
            //   enable: true,
            //   area: 800,
            // },
            value: 6,
          },
          opacity: {
            value: { min: 0.1, max: 0.3 },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: isDesktop ? 200 : 50, max: isDesktop ? 400 : 250 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default BlurryParticles
