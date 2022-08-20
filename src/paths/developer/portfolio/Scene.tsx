import Gallery from '@components/gallery/Gallery'
import HTML from './Html'
import Wobble from './Wobble'

const urls = [...Array(7)].map((_, i) => `/assets/images/portfolio/${i}.png`)

const Scene = () => {
  return (
    <>
      <HTML />
      <Gallery urls={urls} />
      <Wobble />
    </>
  )
}

export default Scene
