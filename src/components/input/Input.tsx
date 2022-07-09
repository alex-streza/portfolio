import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  placeholder?: string
}

const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <label className="input-container" htmlFor={name}>
      <span>{label}</span>
      <input name={name} {...rest} />
    </label>
  )
}

export default Input
