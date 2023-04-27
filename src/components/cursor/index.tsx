import { useIntervalEffect, useSessionStorageValue } from '@react-hookz/web'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'

if (typeof window !== 'undefined') gsap.registerPlugin(MorphSVGPlugin)

const cursors = {
  writer:
    'M19.4001 7.34001L16.6601 4.60001C16.3024 4.26411 15.8338 4.07137 15.3434 4.05846C14.8529 4.04556 14.3748 4.21338 14.0001 4.53001L5.00005 13.53C4.67682 13.856 4.47556 14.2832 4.43005 14.74L4.00005 18.91C3.98658 19.0565 4.00559 19.2041 4.05571 19.3424C4.10584 19.4807 4.18585 19.6062 4.29005 19.71C4.38349 19.8027 4.49431 19.876 4.61615 19.9258C4.73798 19.9755 4.86845 20.0008 5.00005 20H5.09005L9.26005 19.62C9.71685 19.5745 10.1441 19.3732 10.4701 19.05L19.4701 10.05C19.8194 9.68098 20.0082 9.18852 19.995 8.68055C19.9819 8.17257 19.768 7.69052 19.4001 7.34001ZM16.0001 10.68L13.3201 8.00001L15.2701 6.00001L18.0001 8.73001L16.0001 10.68Z',
  developer:
    'M11.0001 4L10.5001 3L10.0001 4L9.00006 4.125L9.83406 4.833L9.50006 6L10.5001 5.334L11.5001 6L11.1661 4.833L12.0001 4.125L11.0001 4ZM19.3341 14.666L18.5001 13L17.6661 14.666L16.0001 14.875L17.3891 16.056L16.8341 18L18.5001 16.889L20.1661 18L19.6111 16.056L21.0001 14.875L19.3341 14.666ZM6.66706 6.333L6.00006 5L5.33306 6.333L4.00006 6.5L5.11106 7.444L4.66706 9L6.00006 8.111L7.33306 9L6.88906 7.444L8.00006 6.5L6.66706 6.333ZM3.41406 17C3.41406 17.534 3.62206 18.036 4.00006 18.414L5.58606 20C5.96406 20.378 6.46606 20.586 7.00006 20.586C7.53406 20.586 8.03606 20.378 8.41406 20L20.0001 8.414C20.3781 8.036 20.5861 7.534 20.5861 7C20.5861 6.466 20.3781 5.964 20.0001 5.586L18.4141 4C17.6581 3.244 16.3421 3.244 15.5861 4L4.00006 15.586C3.62206 15.964 3.41406 16.466 3.41406 17ZM17.0001 5.414L18.5861 7L15.0001 10.586L13.4141 9L17.0001 5.414Z',
  designer:
    'M7.11991 12.55C6.25045 12.7578 5.47567 13.2509 4.91921 13.9505C4.36276 14.6502 4.05671 15.5161 4.04991 16.41V19.52C4.04855 19.5834 4.06003 19.6464 4.08367 19.7053C4.10731 19.7641 4.14262 19.8176 4.18746 19.8625C4.23231 19.9073 4.28577 19.9426 4.34462 19.9662C4.40348 19.9899 4.46651 20.0014 4.52991 20L7.76991 19.94C8.49376 19.9412 9.20273 19.7345 9.81254 19.3445C10.4223 18.9545 10.9074 18.3976 11.2099 17.74C11.5204 17.1203 11.648 16.4249 11.5777 15.7353C11.5075 15.0457 11.2423 14.3904 10.8133 13.846C10.3843 13.3016 9.80908 12.8906 9.15502 12.661C8.50095 12.4315 7.79506 12.393 7.11991 12.55V12.55ZM19.2599 4.46C18.8403 4.12911 18.3121 3.96717 17.7792 4.00604C17.2462 4.0449 16.7471 4.28174 16.3799 4.67L9.99991 11.08C9.91319 11.1679 9.86458 11.2865 9.86458 11.41C9.86458 11.5335 9.91319 11.6521 9.99991 11.74L12.2499 14C12.3379 14.0867 12.4564 14.1353 12.5799 14.1353C12.7034 14.1353 12.822 14.0867 12.9099 14L19.3999 7.53C19.5922 7.33685 19.7442 7.10746 19.8472 6.85513C19.9502 6.6028 20.0021 6.33254 19.9999 6.06C20.007 5.7545 19.944 5.45143 19.8157 5.17407C19.6874 4.89672 19.4973 4.65244 19.2599 4.46V4.46Z',
}

const updatePathTheme = () => {
  const paths = ['developer', 'designer', 'writer']

  const pathname = window.location.pathname.split('/')[1]
  const currentPath = pathname.includes('posts') ? 'writer' : pathname

  paths.forEach((path) => {
    document.documentElement.classList.remove(path)
  })
  if (currentPath !== '') document.documentElement.classList.add(currentPath)
}

const Cursor = () => {
  const cursorRef = useRef()
  const q = useMemo(() => gsap.utils.selector(cursorRef), [])

  const mouseRef = useRef({
    x: 0,
    y: 0,
  })
  const { value: path, set: setPath } = useSessionStorageValue('path', {
    defaultValue: '',
  })

  const [hideCursor, setHideCursor] = useState(false)

  useLayoutEffect(() => {
    if (hideCursor) {
      gsap.fromTo(
        cursorRef.current,
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 0, duration: 0.5, ease: 'power2.easeInOut' },
      )
    } else {
      gsap.fromTo(
        cursorRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.easeInOut' },
      )
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      mouseRef.current = { x: pos.x, y: pos.y }

      gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 })
      const speed = 0.1
      const fpms = 60 / 1000

      const xSet = gsap.quickSetter(cursorRef.current, 'x', 'px')
      const ySet = gsap.quickSetter(cursorRef.current, 'y', 'px')

      window.addEventListener('mousemove', (e) => {
        mouseRef.current = {
          x: e.x,
          y: e.y,
        }
      })

      gsap.ticker.add((time, deltaTime) => {
        const delta = deltaTime * fpms
        const dt = 1.0 - Math.pow(1.0 - speed, delta)

        pos.x += (mouseRef.current.x - pos.x) * dt
        pos.y += (mouseRef.current.y - pos.y) * dt
        xSet(pos.x)
        ySet(pos.y)
      })
    }
  }, [hideCursor])

  useLayoutEffect(() => {
    if (path == '') {
      gsap.to(q('#cursorPath'), {
        duration: 0.5,
        morphSVG: '#defaultCursor',
      })
    } else {
      gsap.to(q('#cursorPath'), {
        duration: 0.5,
        delay: 0.2,
        morphSVG: cursors[path],
      })
    }
  }, [path, q])

  useIntervalEffect(() => {
    const pathname = window.location.pathname.split('/')[1]
    const currentPath = pathname.includes('posts') ? 'writer' : pathname

    if (currentPath !== '' && currentPath !== path) {
      const paths = ['developer', 'designer', 'writer']

      paths.forEach((path) => {
        document.documentElement.classList.remove(path)
      })
      document.documentElement.classList.add(currentPath)

      setPath(currentPath)
    }
    setHideCursor(window.location.pathname.includes('/posts'))
  }, 500)

  return (
    <div
      ref={cursorRef}
      className={`w-10 h-10 text-main-1000 grid place-content-center absolute top-0 left-0 rounded-full border-main ${
        path == '' ? 'bg-[#b1b1b1]' : 'bg-main-hex'
      }  bg-opacity-40 backdrop-blur-sm pointer-events-none`}
    >
      <svg
        width={32}
        height={32}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="cursorPath"
          d="M11.0001 4L10.5001 3L10.0001 4L9.00006 4.125L9.83406 4.833L9.50006 6L10.5001 5.334L11.5001 6L11.1661 4.833L12.0001 4.125L11.0001 4ZM19.3341 14.666L18.5001 13L17.6661 14.666L16.0001 14.875L17.3891 16.056L16.8341 18L18.5001 16.889L20.1661 18L19.6111 16.056L21.0001 14.875L19.3341 14.666ZM6.66706 6.333L6.00006 5L5.33306 6.333L4.00006 6.5L5.11106 7.444L4.66706 9L6.00006 8.111L7.33306 9L6.88906 7.444L8.00006 6.5L6.66706 6.333ZM3.41406 17C3.41406 17.534 3.62206 18.036 4.00006 18.414L5.58606 20C5.96406 20.378 6.46606 20.586 7.00006 20.586C7.53406 20.586 8.03606 20.378 8.41406 20L20.0001 8.414C20.3781 8.036 20.5861 7.534 20.5861 7C20.5861 6.466 20.3781 5.964 20.0001 5.586L18.4141 4C17.6581 3.244 16.3421 3.244 15.5861 4L4.00006 15.586C3.62206 15.964 3.41406 16.466 3.41406 17ZM17.0001 5.414L18.5861 7L15.0001 10.586L13.4141 9L17.0001 5.414Z"
          fill="currentColor"
        />
        <path
          className="hidden"
          id="defaultCursor"
          fill="currentColor"
          d="M14 16V13.702L14.856 13.105C15.7298 12.4969 16.3868 11.6258 16.7311 10.6184C17.0755 9.61107 17.0894 8.5201 16.7708 7.50432C16.4521 6.48854 15.8175 5.60098 14.9595 4.97086C14.1014 4.34073 13.0646 4.00094 12 4.00094C10.9354 4.00094 9.89861 4.34073 9.04053 4.97086C8.18246 5.60098 7.5479 6.48854 7.22924 7.50432C6.91059 8.5201 6.92446 9.61107 7.26886 10.6184C7.61325 11.6258 8.27017 12.4969 9.144 13.105L10 13.702V16H11V7.99999C11 7.73477 11.1054 7.48042 11.2929 7.29288C11.4804 7.10535 11.7348 6.99999 12 6.99999C12.2652 6.99999 12.5196 7.10535 12.7071 7.29288C12.8946 7.48042 13 7.73477 13 7.99999V16H14ZM14 18H10V20H14V18ZM5 8.99999C5.00008 7.79636 5.31051 6.61308 5.90132 5.56443C6.49213 4.51578 7.34335 3.63719 8.37279 3.0135C9.40222 2.38981 10.5751 2.0421 11.7781 2.00395C12.9811 1.96579 14.1737 2.23849 15.2406 2.79569C16.3075 3.3529 17.2126 4.17579 17.8687 5.1849C18.5248 6.194 18.9096 7.35523 18.9859 8.55644C19.0623 9.75765 18.8276 10.9582 18.3045 12.0423C17.7815 13.1263 16.9878 14.0572 16 14.745V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H10C9.46957 22 8.96086 21.7893 8.58579 21.4142C8.21072 21.0391 8 20.5304 8 20V14.745C7.07341 14.1006 6.31657 13.2415 5.79415 12.2411C5.27173 11.2406 4.99926 10.1286 5 8.99999V8.99999Z"
        />
      </svg>
    </div>
  )
}

export default Cursor
