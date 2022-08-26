import gsap from 'gsap'
import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react'
import { animated, useSpring } from 'react-spring'

interface MenuLinkProps {
  link: string
  subtitle: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const MenuLink = forwardRef<HTMLElement, MenuLinkProps>(
  ({ link, subtitle, onMouseEnter, onMouseLeave }, ref) => {
    const [styles, api] = useSpring(() => ({
      letterSpacing: 0,
      opacity: 0,
      bottom: -20,
    }))

    const handleMouseEnter = () => {
      api.start({
        letterSpacing: 0,
        opacity: 1,
        bottom: -20,
      })

      onMouseEnter()
    }

    const handleMouseLeave = () => {
      api.start({
        letterSpacing: 2,
        opacity: 0,
        bottom: -24,
      })
      onMouseLeave()
    }

    return (
      <li
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-fit before:content-none odd:text-5xl first:-ml-10 md:first:-ml-40 last:-mr-10 md:last:-mr-40 even:text-6xl md:odd:text-7xl md:even:text-8xl font-serif last:ml-auto odd:my-20 hover:text-main"
      >
        <animated.span
          style={styles}
          className="w-[220px] absolute text-sm font-sans dark:text-main-200 text-main-1000 block dark:bg-gray-hex bg-white !bg-opacity-80 backdrop-blur-sm p-1 rounded"
        >
          {subtitle}
        </animated.span>
        <div className="overflow-hidden md:h-[96px]">
          <a
            className={`hover:!text-main reset-link block translate-y-24`}
            href={`/${link}`}
          >
            <span>{link[0].toUpperCase() + link.slice(1)}</span>
          </a>
        </div>
      </li>
    )
  },
)

MenuLink.displayName = 'MenuLink'

export default MenuLink
