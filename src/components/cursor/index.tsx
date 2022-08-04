import { useLayoutEffect, useRef } from 'react'

const Cursor = () => {
  const cursorRef = useRef()
  const mouseRef = useRef({})

  useLayoutEffect(() => {
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    mouseRef.current = { x: pos.x, y: pos.y }

    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 })
    const speed = 0.1
    const fpms = 60 / 1000

    const xSet = gsap.quickSetter(cursorRef.current, 'x', 'px')
    const ySet = gsap.quickSetter(cursorRef.current, 'y', 'px')

    window.addEventListener('mousemove', (e) => {
      mouseRef.current = {
        x: e.x + 16,
        y: e.y - 16,
      }
    })

    gsap.ticker.add((time, deltaTime) => {
      var delta = deltaTime * fpms
      var dt = 1.0 - Math.pow(1.0 - speed, delta)

      pos.x += (mouseRef.current.x - pos.x) * dt
      pos.y += (mouseRef.current.y - pos.y) * dt
      xSet(pos.x)
      ySet(pos.y)
    })
  }, [])

  return (
    <div
      ref={cursorRef}
      className="w-10 h-10 text-main-900 grid place-content-center fixed top-0 left-0 rounded-full bg-main-hex bg-opacity-50"
    >
      <svg
        width={32}
        height={32}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.4001 7.34001L16.6601 4.60001C16.3024 4.26411 15.8338 4.07137 15.3434 4.05846C14.8529 4.04556 14.3748 4.21338 14.0001 4.53001L5.00005 13.53C4.67682 13.856 4.47556 14.2832 4.43005 14.74L4.00005 18.91C3.98658 19.0565 4.00559 19.2041 4.05571 19.3424C4.10584 19.4807 4.18585 19.6062 4.29005 19.71C4.38349 19.8027 4.49431 19.876 4.61615 19.9258C4.73798 19.9755 4.86845 20.0008 5.00005 20H5.09005L9.26005 19.62C9.71685 19.5745 10.1441 19.3732 10.4701 19.05L19.4701 10.05C19.8194 9.68098 20.0082 9.18852 19.995 8.68055C19.9819 8.17257 19.768 7.69052 19.4001 7.34001ZM16.0001 10.68L13.3201 8.00001L15.2701 6.00001L18.0001 8.73001L16.0001 10.68Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default Cursor
