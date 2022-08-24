import Gallery from '@components/gallery/Gallery'
import HTML from './Html'
import Blobby from './Blobby'

const urls = [...Array(9)].map((_, i) => `/assets/images/portfolio/${i}.png`)

const Scene = () => {
  return (
    <>
      <HTML />
      <Gallery urls={urls} />
      <Blobby />
    </>
  )
}

export default Scene
