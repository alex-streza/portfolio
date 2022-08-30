import { usePrevious } from '@react-hookz/web'
import { Html, useProgress } from '@react-three/drei'
import { useLayoutEffect, useRef } from 'react'

interface HTMLLoaderProps {
  progress: number
}

const HTMLLoader = ({ progress }: HTMLLoaderProps) => {
  const previousProgress = usePrevious(progress)

  const ref = useRef<HTMLHeadingElement>()
  const tl = useRef<gsap.core.Timeline>()

  useLayoutEffect(() => {
    const target = {
      value: previousProgress,
    }
    if (!tl.current) tl.current = gsap.timeline()

    if (progress > 90) {
      tl.current.pause()
      ref.current.innerHTML = `100%`
      gsap.to(ref.current, { duration: 0.5, scale: 2 })
    } else {
      tl.current.to(target, {
        duration: 0.5,
        value: progress,
        onUpdate: () => {
          ref.current.innerHTML = `${Math.round(target.value)}%`
        },
      })
    }
  }, [progress, previousProgress])

  return <h1 ref={ref} className="md:text-5xl text-3xl overflow-hidden z-0" />
}

interface LoaderProps {
  wrapperClass?: string
}

const Loader = ({ wrapperClass }: LoaderProps) => {
  const { progress } = useProgress()

  return (
    <Html wrapperClass={wrapperClass} center>
      <HTMLLoader progress={progress} />
    </Html>
  )
}

export default Loader
