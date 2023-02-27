import { Button, Heading } from '@/components'

import { DevIcon } from '@/svg'
import React from 'react'

type Props = {}

const Debug = (props: Props) => {
  const TITLE = 'THE WORLD’S NEXT DATA LAYER'

  const SUBTITLE = 'Store your data on the<br/> trustless source of truth'

  return (
    <div>
      <header
        className="relative overflow-hidden border-b border-timberwolf px-5 pb-20 lg:px-[79px]"
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
          className="lg:-right-18 absolute top-80 md:top-28 lg:top-10"
        />

        <div className="flex max-w-[742px] flex-col gap-[32px] pt-[83px] leading-none">
          <Heading level={1}>{TITLE}</Heading>
          {/* <h1 className="text-5xl lg:text-7xl font-fkDisplay z-10">
            {TITLE}
          </h1> */}
          <h2
            className="z-10 font-robotoMono font-normal leading-6"
            dangerouslySetInnerHTML={{
              __html: SUBTITLE
            }}
          />
        </div>
        <div className="mt-56 flex items-center gap-[21px] font-robotoMono lg:mt-[450px]">
          <Button>
            START BUILDING
            <DevIcon />
          </Button>
          <span className="z-10 -ml-12 rounded-tr-full rounded-br-full bg-white px-4 py-3 pl-10 lg:px-6 lg:py-5 lg:pl-10">
            Permanent on{' '}
            <a href="https://arweave.net/" target={'_blank'} rel="noreferrer">
              Arweave
            </a>
          </span>
        </div>
      </header>
      <header
        className="relative overflow-hidden border-b border-timberwolf px-5 pb-20 lg:px-[79px]"
        // style={{
        //   backgroundImage: 'url()',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: '20% -10%',
        //   backgroundSize: '120%',
        //   height: '894px'
        // }}
      >
        <img
          src="/assets/home/header-v2.png"
          alt=""
          className="lg:-right-18 absolute top-80 rotate-[-20.24deg] scale-150 md:top-28 lg:top-10"
        />

        <div className="flex max-w-[742px] flex-col gap-[32px] pt-[83px] leading-none">
          <Heading level={1}>{TITLE}</Heading>
          {/* <h1 className="text-5xl lg:text-7xl font-fkDisplay z-10">
            {TITLE}
          </h1> */}
          <h2
            className="z-10 font-robotoMono font-normal leading-6"
            dangerouslySetInnerHTML={{
              __html: SUBTITLE
            }}
          />
        </div>
        <div className="mt-56 flex items-center gap-[21px] font-robotoMono lg:mt-[450px]">
          <Button>
            START BUILDING
            <DevIcon />
          </Button>
          <span className="z-10 -ml-12 rounded-tr-full rounded-br-full bg-white px-4 py-3 pl-10 lg:px-6 lg:py-5 lg:pl-10">
            Permanent on{' '}
            <a href="https://arweave.net/" target={'_blank'} rel="noreferrer">
              Arweave
            </a>
          </span>
        </div>
      </header>
    </div>
  )
}

export default Debug
