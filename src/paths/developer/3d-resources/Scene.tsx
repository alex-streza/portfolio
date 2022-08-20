import Gallery from '@components/gallery/Gallery'
import HTML from './Html'
import Room from './Room'

const urls = [...Array(4)].map(
  (_, i) => `/assets/images/3d-resources/${i + 1}.png`,
)

const Scene = () => {
  return (
    <>
      <HTML />
      <Gallery urls={urls} />
      {/* <Room /> */}
    </>
  )
}

export default Scene
