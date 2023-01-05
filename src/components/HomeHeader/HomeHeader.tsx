import { useEffect, useState } from 'react'

import Button from '../Button'

const useHomeHeader = () => {
  return {}
}

const HomeHeader = () => {
  const { } = useHomeHeader()

  return (
    <>
      <header
        className="px-[109px] border-b border-timberwolf"
        style={{
          backgroundImage: 'url(/assets/home/blocks.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: '140%',
          height: '894px'
        }}
      >
        <div className="flex flex-col gap-[32px] max-w-[742px] leading-none pt-[83px]">
          <h1 className="text-[76px]">
            Creating the trustless source of truth
          </h1>
          <h2 className='font-robotoMono max-w-[327px] leading-6 font-normal'>
            Your infinitely scalable, reliable and composable data network
          </h2>
        </div>
        <div className="flex gap-[21px] mt-[450px] items-center font-robotoMono">
          <Button />
          Permanent on Arweave
        </div>
      </header>
    </>
  )
}

export default HomeHeader
