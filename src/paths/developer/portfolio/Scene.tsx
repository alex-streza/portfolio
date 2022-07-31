import Gallery from '@components/gallery/Gallery'
import HTML from './Html'
import Wobble from './Wobble'

const urls = [...Array(6)].map(
  (_, i) => `/assets/images/portfolio/${i + 1}.png`,
)

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
