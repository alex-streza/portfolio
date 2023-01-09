const items = [...Array(7)]

const PageTransition = () => {
  return (
    <ul className="transition-container">
      {items.map((_, index) => (
        <li key={index} className="transition-container__list"></li>
      ))}
    </ul>
  )
}

export default PageTransition
