import Gallery from '@components/gallery/Gallery'

import HTML from './Html'

const urls = [
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/adab4c7c-3150-4b7a-02c1-853beb378a00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/69a130c0-d467-4538-2e01-d16872903600/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/1d1367e9-985b-48ed-4b4e-e5afccecbe00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/49a9713b-7306-4b60-7797-61cad0626e00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/d5253b11-dc5e-4be7-454f-ed81a12b5d00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/2b63029b-0588-4692-746e-2ffbf95ea400/public',
]

const Scene = () => {
  return (
    <>
      <HTML />
      <Gallery urls={urls} />
    </>
  )
}

export default Scene
