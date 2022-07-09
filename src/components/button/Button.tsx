import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({ className = 'primary', children, ...rest }: Props) => {
  return (
    <button className={`btn ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
