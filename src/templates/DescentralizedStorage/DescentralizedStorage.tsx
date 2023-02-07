import { Button, CtaCentralized, Footer, HomeProduct, NavbarDesktop } from '@/components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

import { CtaCentralizedProps } from '@/components/CtaCentralized/CtaCentralized'
import { DevIcon } from '@/svg'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useDescentralizedStorage = () => {

  const { scrollYProgress } = useScroll()

  const x = useTransform(scrollYProgress, [0, 1], [600, -1000])

  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
  }

  const PRODUCT_CONTENT: {
    title: string
    description: string
    href: string
  }[] = [
      {
        title: 'Optimistic Data Availability',
        description: 'Pay for consensus only when you need it',
        href: '/solutions/data-availability'
      },
      {
        title: 'Proof of Provenance',
        description:
          'Identify original information by accurately attributing origin',
        href: '/solutions/proof-of-provenance'
      }
    ]

  const CTA_CONTENT: CtaCentralizedProps = {
    title: 'Ready to Become <br /> a BUNDLOOOOR?',
    cta: 'Start Building',
    href: 'https://docs.bundlr.network',
    newTab: true
  }

  return { PAGE_SEO, PRODUCT_CONTENT, CTA_CONTENT, x }
}

const DescentralizedStorage: NextPage = () => {
  const { PAGE_SEO, PRODUCT_CONTENT, CTA_CONTENT, x } = useDescentralizedStorage()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <header className="bg-ghostWhite ">
        <NavbarDesktop />
        <div className="h-[700px] flex flex-col items-center justify-center relative overflow-hidden">
          <img
            src="/assets/descentralizedStorage/cloud.png"
            className="absolute -top-30 left-0"
            alt="cloud"
          />
          <h1 className="text-7xl z-10">Decentralized Storage</h1>
          <p className="font-robotoMono text-base z-10">
            Performant, scalable, and seamless – forever.{' '}
          </p>
        </div>
      </header>
      <section className="h-[584px] flex justify-between text-white bg-black">
        {/* Vertical text 'stats' aligned to left */}
        <div>
          <h3 className="inline-block transform -rotate-90 mt-[92px] ml-[108px] text-[26px] uppercase">
            WHAT BUNDLR OFFERS
          </h3>
        </div>
        {/* 2 columns grid */}
        <div className="grid grid-cols-2 gap-[32px] gap-y-0 pr-[109px] leading-none pt-[83px]">
          <div className="max-w-[501px]">
            <small className="font-fkDisplay font-light text-5xl leading-none">
              Scales to Millions of TPS
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              Bundlr can scale horizontally to handle millions of transactions
              per second
            </h2>
          </div>
          <div className="max-w-[441px]">
            <small className="font-fkDisplay font-light text-5xl leading-none">
              Instant Uploads
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              You can upload data to Bundlr in under 8ms
            </h2>
          </div>
          <div className="max-w-[332px]">
            <small className="font-fkDisplay font-light text-5xl leading-none">
              Seamless Integration
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              It takes 3-4 lines of code to integrate Bundlr
            </h2>
          </div>
          <div className="max-w-[332px]">
            <small className="font-fkDisplay font-light text-5xl leading-none">
              Pay in Any Token
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              You can pay to use Bundlr in 14 supported tokens
            </h2>
          </div>
        </div>
      </section>
      <section className="relative h-[911px] px-5 lg:px-[109px]">
        <h2 className="text-5xl font-fkDisplay py-48 w-[440px]">
          Data Stored for as Long as You Need
        </h2>
        <img
          src="/assets/descentralizedStorage/data-spiral.png"
          alt="data-spiral"
          className="absolute right-0 top-0"
        />
        <ul className="flex gap-10">
          <li className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg w-1/2">
            {/* add gradient background that goes from gray to transparent */}

            <div className="flex flex-col gap-8 bg-seashell rounded-lg overflow-hidden p-11">
              {/* make image as background of rectangle box */}
              <div className="flex flex-col gap-4 px-5 pb-10">
                <h3 className="text-black font-light text-5xl font-fkDisplay">
                  Arweave
                </h3>
                <div className="bg-black text-white p-1 font-light text-xs font-robotoMono uppercase self-start">
                  Launched
                </div>
                <p className="font-robotoMono text-lg">
                  Permanent storage on Arweave.{' '}
                </p>
                <p className="font-robotoMono text-lg">
                  In the same way the internet connected people across
                  geographies, Arweave connects people across time. Bundlr is
                  currently handling over 90% of all transaction volume on
                  Arweave.{' '}
                </p>
              </div>
            </div>
          </li>
          <li className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg w-1/2">
            {/* add gradient background that goes from gray to transparent */}

            <div className="flex flex-col gap-8 bg-seashell rounded-lg overflow-hidden p-11 h-full">
              {/* make image as background of rectangle box */}
              <div className="flex flex-col gap-4 px-5 pb-10">
                <h3 className="text-black font-light text-5xl font-fkDisplay">
                  Preweave
                </h3>
                <div className="bg-black text-white p-1 font-light text-xs font-robotoMono uppercase self-start">
                  Coming soon
                </div>
                <p className="font-robotoMono text-lg">
                  Storage for as long as you need.{' '}
                </p>
                <p className="font-robotoMono text-lg">
                  Preweave is a peer-to-peer caching layer built on top of
                  Bundlr. Data on Preweave can also easily be transferred to
                  Arweave for permanent storage.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section className='px-5 lg:px-[109px] flex py-24 relative overflow-hidden'>
        <div className="">
          <h3 className="inline-block transform -rotate-90 mt-24 text-[26px] uppercase -ml-[96px]">
            WE ARE DIFFERENT
          </h3>
        </div>
        <div className="flex flex-col gap-36 w-1/2 ml-auto">
          <div className="">
            <h2 className='text-4xl font-fkDisplay'>Lightning Fast Uploads, at Industrial Scale</h2>
            <p className='font-robotoMono max-w-[770px] pl-28 pt-16 text-lg'>With uploads time under 8 milliseconds and the <u>ability to  scale to millions of transactions per seconds</u>, Bundlr’s performance is on par with traditional providers. Bundlr is ready to store the world’s data.</p>
          </div>
          <div className="">
            <h2 className='text-4xl font-fkDisplay'>Seamless for Developers</h2>
            <p className='font-robotoMono max-w-[770px] pl-28 pt-16 text-lg'>Our intuitive docs and SDK help you integrate Bundlr with just 3-4 lines of code. Further, you can sign and pay for storage in of our 14 supported tokens, including ETH, SOL, and MATIC. <a href="#"><u>Find out</u></a> how simple working with Bundlr is.</p>
          </div>
        </div>
        <img src="/assets/descentralizedStorage/data-splash.png" alt="data-splash" className='absolute -bottom-64 left-0' />
      </section>

      <HomeProduct
        content={PRODUCT_CONTENT}
        title={'Learn More About'}
      ></HomeProduct>
      <CtaCentralized {...CTA_CONTENT} />
      <Footer />
    </>
  )
}

export default DescentralizedStorage
