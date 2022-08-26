import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <h1 className="md:text-5xl text-3xl">{parseInt(progress + '')}%</h1>
    </Html>
  )
}

export default Loader
