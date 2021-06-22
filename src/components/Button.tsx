import { ButtonHTMLAttributes } from "react"

import "../styles/button.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  )
}