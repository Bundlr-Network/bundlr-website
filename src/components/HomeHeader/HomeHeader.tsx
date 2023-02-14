import { useEffect, useState } from 'react'

import Button from '../Button'
import { DevIcon } from '@/svg'

const useHomeHeader = () => {
  const TITLE = 'THE WORLD’S NEXT DATA LAYER'

  const SUBTITLE = 'Store your data on the<br/> trustless source of truth'

  return { TITLE, SUBTITLE }
}

const HomeHeader = () => {
  const { TITLE, SUBTITLE } = useHomeHeader()

  return (
    <>
      <header
        className="px-5 lg:px-[79px] border-b border-timberwolf relative pb-20 overflow-hidden"
      // style={{
      //   backgroundImage: 'url()',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: '20% -10%',
      //   backgroundSize: '120%',
      //   height: '894px'
      // }}
      >
        <img
          src="/assets/home/header.png"
          alt=""
          className="absolute top-80 md:top-28 lg:top-10 lg:-right-18"
        />

        <div className="flex flex-col gap-[32px] max-w-[742px] leading-none pt-[83px]">
          <h1 className="text-5xl lg:text-[76px] font-fkDisplay z-10">
            {TITLE}
          </h1>
          <h2
            className="font-robotoMono leading-6 font-normal z-10"
            dangerouslySetInnerHTML={{
              __html: SUBTITLE
            }}
          />
        </div>
        <div className="flex gap-[21px] mt-56 lg:mt-[450px] items-center font-robotoMono">
          <Button>
            START BUILDING
            <DevIcon />
          </Button>
          <span className="z-10 bg-white -ml-12 px-4 py-3 lg:px-6 lg:py-5 pl-10 lg:pl-10 rounded-tr-full rounded-br-full">
            Permanent on{' '}
            <a href="https://arweave.net/" target={'_blank'} rel="noreferrer">
              Arweave
            </a>
          </span>
        </div>
      </header>
    </>
  )
}

export default HomeHeader
