import { forwardRef } from 'react'
import { animated, useSpring, config } from 'react-spring'

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
      bottom: -12,
    }))

    const handleMouseEnter = () => {
      api.start({
        letterSpacing: 0,
        opacity: 1,
        bottom: -6,
      })

      onMouseEnter()
    }

    const handleMouseLeave = () => {
      api.start({
        letterSpacing: 4,
        opacity: 0,
        bottom: -12,
      })
      onMouseLeave()
    }

    return (
      <li
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <animated.span
          style={styles}
          className="absolute text-sm font-sans text-main bg-main bg-opacity-10 backdrop-blur-sm"
        >
          {subtitle}
        </animated.span>
        <a className="hover:!text-main reset-link" href={`/${link}`}>
          <span>{link[0].toUpperCase() + link.slice(1)}</span>
        </a>
      </li>
    )
  },
)

export default MenuLink
