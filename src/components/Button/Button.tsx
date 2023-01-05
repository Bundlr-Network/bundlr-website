import { useEffect, useState } from 'react'

import { DevIcon } from '@/svg'

const useButton = () => {
  return {}
}

const Button = () => {
  const { } = useButton()

  return (
    <>
      <button className='font-robotoMono text-sm bg-black text-white flex items-center gap-2 px-4 py-3 rounded-full hover:font-bold'>
        START BUILDING
        <DevIcon />
      </button>
    </>
  )
}

export default Button
