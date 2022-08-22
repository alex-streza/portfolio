import Gallery from '@components/gallery/Gallery'
import HTML from './Html'

const urls = [...Array(5)].map(
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
