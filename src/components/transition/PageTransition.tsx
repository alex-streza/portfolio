const items = [...Array(7)]

const PageTransition = () => {
  const diagonal = Math.sqrt(
    Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2),
  )

  return (
    <ul
      className="transition-container"
      style={{
        left:
          window.innerWidth > window.innerHeight
            ? -diagonal / 4
            : -diagonal / 2,
        top: -diagonal / 3,
      }}
    >
      {items.map((_, index) => (
        <li
          key={index}
          className="transition-container__list"
          style={{
            height: diagonal + 0.25 * diagonal,
          }}
        ></li>
      ))}
    </ul>
  )
}

export default PageTransition
