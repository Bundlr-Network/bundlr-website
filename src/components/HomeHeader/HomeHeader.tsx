import { useEffect, useState } from 'react'

import Button from '../Button'
import { DevIcon } from '@/svg'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

const HomeHeader = () => {
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
          src="/new/assets/home/header.webp"
          alt=""
          className="absolute top-80 md:top-28 lg:top-36 lg:-right-18 xl:top-10 xl:-right-18 scale-150 rotate-[-20.24deg]"
        />

        <div className="flex flex-col gap-[32px] max-w-[742px] leading-none pt-[83px]">
          <Heading level={1} className="z-10">
            THE <br className="md:hidden" />
            WORLD’S <br />
            DATA
            <br className="md:hidden" /> LAYER
          </Heading>
          {/* <h1 className="text-5xl lg:text-7xl font-fkDisplay z-10">
            {TITLE}
          </h1> */}
          <Paragraph size="sm" className="z-50">
            Store your data on the
            <br /> trustless source of truth
          </Paragraph>
        </div>
        <div className="flex gap-[21px] mt-56 lg:mt-[320px] items-center font-robotoMono">
          <a href="https://docs.bundlr.network" className="z-50">
            <Button className="border border-white">
              START BUILDING
              <DevIcon />
            </Button>
          </a>
          <span className="z-10 -ml-14 px-4 py-3 lg:px-6 lg:py-5 pl-10 lg:pl-14 rounded-tr-full rounded-br-full uppercase bg-black text-white">
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
