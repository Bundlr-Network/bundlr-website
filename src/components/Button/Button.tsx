import { ReactNode, useEffect, useState } from 'react'

import { DevIcon } from '@/svg'

const useButton = () => {
  return {}
}

export enum ButtonScheme {
  black = 'black',
  white = 'white'
}

const Button = ({
  scheme = ButtonScheme.black,
  children
}: {
  scheme?: ButtonScheme
  children: ReactNode
}) => {
  const { } = useButton()

  return (
    <>
      <button
        className={`font-robotoMono text-sm  flex items-center gap-2 px-4 py-3 rounded-full hover:font-bold ${{
          [ButtonScheme.black]: 'bg-black text-white',
          [ButtonScheme.white]: 'bg-white text-black'
        }[scheme]
          }`}
      >
        {children}
      </button>
    </>
  )
}

export default Button
