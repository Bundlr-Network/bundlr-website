import { useEffect, useState } from 'react'

import Button from '../Button'
import { DevIcon } from '@/svg'

const useHomeHeader = () => {

  const TITLE = "THE WORLD’S NEXT DATA LAYER"

  const SUBTITLE = "Store your data on the trustless source of truth"

  return { TITLE, SUBTITLE }
}

const HomeHeader = () => {
  const { TITLE, SUBTITLE } = useHomeHeader()

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
          <h1 className="text-[76px] font-fkDisplay">
            {TITLE}
          </h1>
          <h2 className='font-robotoMono max-w-[327px] leading-6 font-normal'>
            {SUBTITLE}
          </h2>
        </div>
        <div className="flex gap-[21px] mt-[450px] items-center font-robotoMono">
          <Button>
            START BUILDING
            <DevIcon />
          </Button>
          Permanent on Arweave
        </div>
      </header>
    </>
  )
}

export default HomeHeader
