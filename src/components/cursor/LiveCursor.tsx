import { darken, transparentize } from 'color2k'

type CursorProps = {
  color: string
  name: string
  x: number
  y: number
}

export default function LiveCursor({ name, color, x, y }: CursorProps) {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transition: 'transform 200ms linear',
        transform: `translateX(${x}px) translateY(${y}px)`,
        zIndex: 100,
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.26485 1.82959C6.14779 1.73311 6.0057 1.6719 5.85516 1.65311C5.70462 1.63431 5.55185 1.65871 5.41465 1.72345C5.27745 1.78819 5.16149 1.89061 5.08029 2.01875C4.9991 2.1469 4.95601 2.29549 4.95605 2.44719V13.6456C4.95605 14.3872 5.87605 14.7296 6.36085 14.1696L9.18005 10.9112C9.29271 10.7811 9.43203 10.6768 9.58856 10.6053C9.74509 10.5338 9.91517 10.4968 10.0873 10.4968H14.5609C15.3113 10.4968 15.6489 9.55599 15.0697 9.07919L6.26485 1.82959Z"
          fill={color}
        />
      </svg>
      <span
        className="p-1 rounded-8 block ml-5 -mt-2"
        style={{
          color,
          backgroundColor: color ? transparentize(darken(color, 0.5), 0.2) : '',
        }}
      >
        {name}
      </span>
    </div>
  )
}
