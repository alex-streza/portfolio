import { forwardRef } from 'react'
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
      opacity: 0,
      bottom: -4,
    }))

    const handleMouseEnter = () => {
      if (onMouseEnter) {
        api.start({
          opacity: 1,
          bottom: -12,
        })

        onMouseEnter()
      }
    }

    const handleMouseLeave = () => {
      if (onMouseLeave) {
        api.start({
          opacity: 0,
          bottom: -4,
        })
        onMouseLeave()
      }
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
          className="min-w-[200px] absolute text-sm font-sans dark:text-main-200 text-main-1000 block dark:bg-gray-hex bg-white !bg-opacity-80 backdrop-blur-sm p-1 rounded"
        >
          {subtitle}
        </animated.span>
        <div className="overflow-hidden even:h-12 odd:h-[60px] md:even:h-[79.33px] md:odd:h-[106px]">
          <a
            className="hover:!text-main reset-link block translate-y-full even:h-12 odd:h-[60px] md:even:h-[79.33px] md:odd:h-[106px]"
            href={`/${link}`}
          >
            <span>{link[0].toUpperCase() + link.slice(1)}</span>
          </a>
        </div>
        <hr className="mt-2.5 bg-white w-0" />
      </li>
    )
  },
)

MenuLink.displayName = 'MenuLink'

export default MenuLink
