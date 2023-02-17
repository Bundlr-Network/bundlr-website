import { ReactNode, useEffect, useState } from 'react'

import { DevIcon } from '@/svg'

const useButton = () => {
  return {}
}

export enum ButtonScheme {
  black = 'black',
  white = 'white'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  scheme?: ButtonScheme
  children: ReactNode
}

const Button = ({
  scheme = ButtonScheme.black,
  children,
  className,
  ...props
}: ButtonProps) => {
  const { } = useButton()

  return (
    <>
      <button
        className={`z-50 font-robotoMono uppercase text-md flex items-center gap-2 px-4 py-3 lg:px-6 lg:py-5 rounded-full hover:font-bold ${{
          [ButtonScheme.black]: 'bg-black text-white',
          [ButtonScheme.white]: 'bg-white text-black'
        }[scheme]
          } ${className}}`}
        {...props}
      >
        {children}
      </button>
    </>
  )
}

export default Button
