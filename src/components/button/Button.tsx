import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  primary?: boolean
}

const Button = ({
  className = '',
  primary = true,
  children,
  ...rest
}: Props) => {
  const btnClassname =
    'transition-all py-3 px-6 flex items-center justify-center gap-2.5 text-gray-1000 rounded outline-none font-semibold h-[48px] align-middle w-fit'
  const primaryClassname =
    'bg-main-600 hover:bg-main focus:bg-main-700 focus:shadow-main dark:disabled:bg-gray-300 disabled:bg-gray-100 disabled:shadow-none'

  return (
    <button
      className={`${btnClassname} ${
        primary ? primaryClassname : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
