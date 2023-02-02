import {
  Button,
  Footer,
  HomeStats,
  HomeTrustedBy,
  JoinTheCommunity,
  NavbarDesktop,
  SectionTitle
} from '@/components'
import { useEffect, useState } from 'react'

import { DevIcon } from '@/svg'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'

const useDevelopers = () => {
  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
  }

  return { PAGE_SEO }
}

const CTA: React.FC = () => {
  return (
    <div className="h-[740px] relative bg-seashell text-white py-4 px-6 flex flex-col items-center justify-center">
      <h2 className="text-black font-light mb-2 text-[76px] max-w-[668px] text-center leading-none mb-11">
        Ready to Become a <br /> BUNDLOOOOR?
      </h2>
      <Button>
        START BUILDING
        <DevIcon />
      </Button>

      <div className="hidden lg:flex absolute top-0 right-0 overflow-hidden transform rotate-180">
        <img
          src="/assets/community/cta-blocks-2.png"
          className="w-full h-full rounded-lg"
          alt="image1"
        />
      </div>
      <div className="hidden lg:flex absolute top-0 left-0 overflow-hidden">
        <img
          src="/assets/community/cta-blocks-2.png"
          className="w-full h-full rounded-lg"
          alt="image2"
        />
      </div>
    </div>
  )
}

const Developers: NextPage = () => {
  const { PAGE_SEO } = useDevelopers()

  return (
    <div className="">
      <NextSeo {...PAGE_SEO} />
      <header className=" text-white bg-black">
        <NavbarDesktop scheme={SchemeColor.black} />
        <div className="flex flex-col items-center gap-9">
          <h1 className="text-7xl leading-none mt-16">
            Performant, Scalable, Seamless
          </h1>
          <p className="text-lg font-robotoMono font-light">
            Just what you’d expect from the world’s next data layer
          </p>
          <button className="font-robotoMono text-sm bg-white text-black flex items-center gap-2 px-4 py-3 rounded-full hover:font-bold">
            START BUILDING
            <DevIcon />
          </button>
          <img src="/assets/developers/header.png" alt="hero" className='bg-cover pt-1 w-full' />

        </div>
      </header>
      <section className="h-[584px] flex justify-between text-white bg-black">
        {/* Vertical text 'stats' aligned to left */}
        <div>
          <h3 className="inline-block transform -rotate-90 mt-[92px] text-[26px] uppercase">
            WE ARE DIFFERENT
          </h3>
        </div>
        {/* 2 columns grid */}
        <div className="grid grid-cols-2 gap-[32px] gap-y-0 pr-[109px] leading-none pt-[83px]">
          <div className="max-w-[501px]">
            <small className="font-spaceGrotesk font-light text-5xl leading-none">
              Unlimited Scalability
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              There are no limits to the transactions per second that Bundlr can
              handle
            </h2>
          </div>
          <div className="max-w-[441px]">
            <small className="font-spaceGrotesk font-light text-5xl leading-none">
              Instant Uploads
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              You can upload data to Bundlr in under 8ms
            </h2>
          </div>
          <div className="max-w-[332px]">
            <small className="font-spaceGrotesk font-light text-5xl leading-none">
              Seamless Integration
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              It takes 3-4 lines of code to integrate Bundlr
            </h2>
          </div>
          <div className="max-w-[332px]">
            <small className="font-spaceGrotesk font-light text-5xl leading-none">
              Multichain
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              You can pay to use Bundlr in 14 supported tokens
            </h2>
          </div>
        </div>
      </section>
      <section className="h-[489px] text-black px-[109px] bg-seashell pt-32" >
        <div className="flex flex-col items-start">
          <div className="text-9xl">90%</div>
          <p className="font-robotoMono text-lg">
            Bundlr processes over 90% of data uploaded to Arweave
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-9xl">3000%</div>
          <p className="font-robotoMono text-lg">
            Data is uploaded to Bundlr in less than 8 milliseconds
          </p>
        </div>
      </section >

      <section className='bg-seashell pt-44 pb-20'>
        <div className="mx-44 rounded-[20px] overflow-hidden bg-black z-10">
          <HomeTrustedBy scheme="dark" />
        </div>
      </section>
      <section className="px-[109px] bg-seashell pt-16 flex justify-between">
        <div>
          <SectionTitle title="How Bundlr Works" />
          <div className="flex flex-col gap-10 font-robotoMono max-w-[600px] ml-24 pt-16">
            <p className="">
              Bundlr uses binary encoding methods to compact multiple Layer 2
              transactions into a Layer 1 transaction know as a bundle. Like
              Ethereum rollups, Bundles reduce block usage.
            </p>
            <p className="">
              {' '}
              As bundle sizes increase, Bundlr permits transactions per second
              to scale horizontally and linearly, which means that Bunldr can
              easily scale to millions of transactions per second.
            </p>
          </div>
        </div>
        <div className="">
          <img src="/assets/developers/cloud.png" alt="" />
        </div>
      </section>
      <section className="px-[109px] bg-seashell pt-16 flex justify-between">
        <div>
          <SectionTitle title="Why on Arweave?" />
          <div className="flex flex-col gap-10 font-robotoMono max-w-[600px] ml-24 pt-16">
            <p className="">
              Arweave makes it possible to store data permanently for the first
              time ever. This is fundamental to solving the data integrity
              challenges we face today.{' '}
            </p>
            <p className="">
              In the same way that the internet connected humans across
              geographies, Arweave connects humans across time.{' '}
            </p>
          </div>
        </div>
        <div className="">
          <img src="/assets/developers/vortex.png" alt="" />
        </div>
      </section>
      <JoinTheCommunity />

      <CTA />

      <Footer />
    </div >
  )
}

export default Developers
