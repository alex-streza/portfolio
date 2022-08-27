const items = [...Array(7)]

const PageTransition = () => {
  return (
    <ul
      className="transition-container"
      style={{
        left: -((window.innerHeight + window.innerWidth) / 4 + 20),
      }}
    >
      {items.map((_, index) => (
        <li
          key={index}
          className="transition-container__list"
          style={{
            height:
              Math.sqrt(
                Math.pow(window.innerHeight, 2) +
                  Math.pow(window.innerWidth, 2),
              ) + 40,
          }}
        ></li>
      ))}
    </ul>
  )
}

export default PageTransition
