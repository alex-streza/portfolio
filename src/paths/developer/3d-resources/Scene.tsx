import Gallery from '@components/gallery/Gallery'
import { useMediaQuery } from '@react-hookz/web'
import { useRef, useState } from 'react'
import HTML from './Html'

const urls = [
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/54117ca0-f9c0-429b-e169-6bc6a9738500/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/30f8961d-3d67-4cc4-5cfe-2f91599d9b00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/2416a643-85d7-4ad0-f211-610a5b696800/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/64f849da-a63a-4823-2465-f40f1f7bbc00/public',
  'https://imagedelivery.net/_X5WqasCPTrKkrSW6EvwJg/85109ca8-d131-468d-c90c-079833147600/public',
]

const Scene = () => {
  const ref = useRef()
  const [breakFree, setBreakFree] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <HTML />
      <Gallery urls={urls} />
    </>
  )
}

export default Scene
