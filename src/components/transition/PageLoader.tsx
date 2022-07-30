import { useMediaQuery } from '@react-hookz/web' // cjs
import { useProgress } from '@react-three/drei'
import { gsap } from 'gsap'
import DrawSVGPlugin from 'gsap/dist/DrawSVGPlugin.js'
import { useEffect, useLayoutEffect, useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(DrawSVGPlugin)
}

const Curtain = ({ position = 'top' }) => {
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)
  const tl = useRef()

  const isDesktop = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    document.body.style.overflowY = 'hidden'

    tl.current = gsap.timeline().to(q('li'), {
      [position]: 0,
      duration: 0.25,
      delay: 0.1,
      stagger: (i) => (i % 2 !== 0 ? 0.25 : 0),
    })
  }, [])

  const listItemClassName =
    'absolute curtain-item w-[14.28%] md:w-[5%] odd:h-1/4 even:h-1/5 before:content-none odd:bg-main-transparent even:bg-main-900 md:odd:h-4/5 md:even:h-4/5'

  return (
    <ul
      ref={ref}
      className="absolute flex justify-start left-0 w-full h-full items-end first-of-type:items-start "
    >
      {[...Array(8)].map((item, i) => (
        <li
          key={i}
          className={`${listItemClassName}`}
          style={{
            [position]: `-25vh`,
            left: i * 14.28 + 'vw',
          }}
        ></li>
      ))}
    </ul>
  )
}

const LoadingBar = () => {
  const svgRef = useRef()
  const q = gsap.utils.selector(svgRef)
  const tl = useRef()

  useEffect(() => {
    tl.current = gsap.timeline().fromTo(
      q('line'),
      {
        drawSVG: 0,
      },
      {
        drawSVG: '0% 100%',
        duration: 1,
        stagger: (i) => i * 0.1,
      },
    )
  }, [])

  return (
    <svg
      ref={svgRef}
      className="h-5 w-screen"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="-5"
        y1="2"
        x2="100%"
        y2="2"
        className="stroke-main stroke-[4]"
      />
      <line
        x1="-5"
        y1="10"
        x2="100%"
        y2="10"
        className="stroke-main stroke-[4]"
      />
      <line
        x1="-5"
        y1="18"
        x2="100%"
        y2="18"
        className="stroke-main stroke-[4]"
      />
    </svg>
  )
}

const PageLoader = () => {
  const { progress } = useProgress()

  const progressRef = useRef<SVGSVGElement>()
  const node0Ref = useRef<SVGTextElement>()
  const node1Ref = useRef<SVGTextElement>()
  const tl = useRef<gsap.core.Timeline>()
  const q = gsap.utils.selector(progressRef)

  const swapNodes = () => {
    const progress = parseInt(node0Ref.current.textContent.replace('%', ''))
    node0Ref.current.textContent = progress + 1 + '%'

    if (progress < 99) {
      gsap.set(q('#node-0, #node-1'), {
        y: '-=100',
        onComplete: countDown,
      })
    } else {
      tl.current.pause()
    }
  }

  const countDown = () => {
    const progress = parseInt(node1Ref.current.textContent.replace('%', ''))

    node1Ref.current.textContent = progress + 1 + '%'

    tl.current = gsap.timeline().to(q('#node-0, #node-1'), {
      y: '+=100',
      delay: 0.1,
      duration: 0.01,
      onComplete: swapNodes,
    })
  }

  // useLayoutEffect(countDown, [])

  return (
    <div className="relative h-full bg-gray-1000 overflow-x-hidden">
      <Curtain />
      <Curtain position="bottom" />

      <div className="absolute inset-0 m-auto w-48 h-32">
        <svg
          ref={progressRef}
          className="overflow-hidden mx-auto font-serif"
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="100"
          viewBox="0 0 180 100"
        >
          <g mask="url(#theMask)">
            <text
              ref={node0Ref}
              id="node-0"
              transform="translate(90 75)"
              textAnchor="middle"
              fontSize="100"
              className="fill-gray-1000 dark:fill-white"
            >
              0%
            </text>
            <text
              ref={node1Ref}
              id="node-1"
              transform="translate(90 -25)"
              textAnchor="middle"
              fontSize="100"
              className="fill-gray-1000 dark:fill-white"
            >
              0%
            </text>
          </g>
        </svg>
        <div className="flex flex-col gap-10 items-center mt-10">
          <p className="text-lg tracking-[0.3em] !my-0 font-semibold">
            LOADING
          </p>
          <LoadingBar />
        </div>
      </div>
    </div>
  )
}

export default PageLoader
