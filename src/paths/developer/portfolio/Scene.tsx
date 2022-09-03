import Gallery from '@components/gallery/Gallery'
import HTML from './Html'
import Blobby from './Blobby'

const urls = [
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/0f12ad13-03a3-4947-b6c0-fee1fade2c00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/16ee13b6-4f0b-4fa0-60ef-66c4e58e7300/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/f681a32e-d401-49fd-f4fd-3e8aaf623600/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/0997c5ef-911e-45ca-5a9a-d3aadf893a00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/78a25baa-0911-4478-90b8-7db14a658e00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/2b2d7974-3e3a-480f-28a0-1f63fdd9f400/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/b1cd3ee8-5368-4df4-71c5-64c31bb68e00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/a61f68b4-c6b0-4659-d3aa-8ff4c8637a00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/99ef4318-b438-4f4c-c852-8c17cb57d900/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/720ca2e6-113e-4633-3838-3fa478e1a000/public',
]

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
