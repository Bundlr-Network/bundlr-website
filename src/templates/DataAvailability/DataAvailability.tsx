import { Button, Footer, HomeProduct, NavbarDesktop } from '@/components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useDataAvailability = () => {

  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [600, -1000])

  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
  }

  const PRODUCT_CONTENT = [
    {
      title: 'Decentralized Storage',
      description:
        'Performant, scalable, and seamless data, stored permanently on Arweave '
    },
    {
      title: 'Proof of Provenance',
      description: 'Identify original information by accurately attributing origin'
    }
  ]

  return { PAGE_SEO, PRODUCT_CONTENT, x }
}

const CTA: React.FC = () => {
  return (
    <div className="h-[740px] relative bg-seashell text-white py-4 px-6 flex flex-col items-center justify-center">
      <h2 className="text-black font-light mb-2 text-[76px] max-w-[668px] text-center leading-none mb-11">
        Ready to Become a <br /> BUNDLOOOOR?
      </h2>
      <Button />

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

const DataAvailability: NextPage = () => {
  const { PAGE_SEO, PRODUCT_CONTENT, x } = useDataAvailability()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <header className="bg-ghostWhite">
        <NavbarDesktop />
        <div className="h-[700px] flex flex-col items-start justify-center relative overflow-hidden px-[109px] gap-5">
          <img
            src="/assets/dataavailability/blocks.png"
            className="absolute -top-30 right-0"
            alt="cloud"
          />
          <h1 className="text-7xl z-10">Optimistic <br />Data Availability</h1>
          <p className="font-robotoMono text-base z-10">
            Improve performance, scalability, and costs by opting in to consensus
          </p>
        </div>
      </header>
      <section className='px-[109px] flex py-56 relative  bg-ghostWhite'>
        <div className="flex flex-col gap-36 w-1/2 ml-auto">
          <div className="">
            <h2 className='text-4xl font-spaceGrotesk'>What is Optimistic Data Availability?</h2>
            <p className='font-robotoMono max-w-[770px] pl-28 pt-16 text-lg'>Bundlr is the trust assumption, but it always gets settled on L1, Arweave.</p>
          </div>
        </div>
        <img src="/assets/dataavailability/cloud.png" alt="data-splash" className='absolute bottom-0 -left-32 w-[767px]' />
      </section>
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
            <small className="font-spaceGrotesk font-light text-5xl leading-none">
              Scales to Millions of TPS
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              Bundlr can scale horizontally to handle millions of transactions per second
            </h2>
          </div>
          <div className="max-w-[441px]">
            <small className="font-spaceGrotesk font-light text-5xl leading-none">
              Optimize Costs
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              High throughput, low latency applications at a fraction of the cost
            </h2>
          </div>
          <div className="max-w-[332px]">
            <small className="font-spaceGrotesk font-light text-5xl leading-none">
              Seamless Integration
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              {"<"}10 lines of code to integrate Bundlr
            </h2>
          </div>
          <div className="max-w-[332px]">
            <small className="font-spaceGrotesk font-light text-5xl leading-none">
              Instant Finality
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              Transaction ordering and finality in under 8 milliseconds
            </h2>
          </div>
        </div>
      </section>

      <section className="px-[109px] flex py-24 relative overflow-hidden">
        <div className="flex flex-col gap-36 w-full">
          <div className="">
            <h2 className="text-4xl font-spaceGrotesk">Opt-in to Consensus</h2>
            <p className="font-robotoMono max-w-[770px] pl-28 pt-16 text-lg">
              People pay for consensus to update the state of a blockchain in every transaction. For non-financial transactions, this is wasteful and unnecessarily increases blockchain fees.
            </p>
            <p className="font-robotoMono max-w-[770px] pl-28 pt-16 text-lg">For such use cases, you can have stateless transactions, which don’t require consensus. This allows incredibly low latency transactions at industrial scales for an affordable price.</p>
          </div>
          <div className="">
            <h2 className="text-4xl font-spaceGrotesk">
              “And What If I Need My Data On-chain?”
            </h2>
            <p className="font-robotoMono max-w-[770px] pl-28 pt-16 text-lg">
              Easy,just connect to an oracle. Bundlr allows you to pay for state only when you need it.
            </p>
          </div>
        </div>
        <div className="w-[310px]">
          <h3 className="inline-block transform -rotate-90 mt-24 text-[20px] uppercase ml-auto">
            PAY FOR WHAT YOU USE
          </h3>
        </div>
      </section>

      <div className="overflow-hidden">
        <motion.h2 className="text-8xl whitespace-nowrap py-32" style={{ x }}>
          ONE STEP CLOSER TO OUR FULLY ONE STEP CLOSER TO OUR FULLY ONE STEP
          CLOSER TO OUR FULLY
        </motion.h2>
      </div>

      <HomeProduct
        content={PRODUCT_CONTENT}
        title={'Learn More About'}
      ></HomeProduct>
      <CTA />
      <Footer />
    </>
  )
}

export default DataAvailability
