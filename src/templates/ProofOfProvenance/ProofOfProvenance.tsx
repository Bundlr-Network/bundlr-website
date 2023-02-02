import { Button, Footer, HomeProduct, NavbarDesktop } from '@/components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

import { DevIcon } from '@/svg'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useProofOfProvenance = () => {
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
        'Performant, scalable, and seamless data, stored permanently on Arweave ',
      href: '/solutions/decentralized-storage'
    },
    {
      title: 'Optimistic Data Availability',
      description: 'Pay for consensus only when you need it',
      href: '/solutions/data-availability'
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

const ProofOfProvenance: NextPage = () => {
  const { PAGE_SEO, PRODUCT_CONTENT, x } = useProofOfProvenance()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <header className="bg-ghostWhite">
        <NavbarDesktop />
        <div className="h-[700px] flex flex-col items-start justify-center relative overflow-hidden px-[109px] gap-5">
          <img
            src="/assets/proofofprovenance/data.png"
            className="absolute -top-30 right-0"
            alt="cloud"
          />
          <h1 className="text-7xl z-10">Proof of Provenance</h1>
          <p className="font-robotoMono text-base z-10">
            Trustlessly identify original information by accurately attributing
            characteristics of its origin.
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
            <small className="font-spaceGrotesk font-light text-5xl leading-none">
              Trustless Truth
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              Unfalsifiable guarantees around provenance through Bundlr’s Proof
              of Time
            </h2>
          </div>
          <div className="max-w-[441px]">
            <small className="font-spaceGrotesk font-light text-5xl leading-none">
              Searchability
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              Flexible data querying through custom metadata tagging
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
              Instant
            </small>
            <h2 className="text-lg font-robotoMono leading-none mt-4">
              Instant access to information with detailed metadata attributes
            </h2>
          </div>
        </div>
      </section>

      <section className="px-[109px] flex py-24 relative overflow-hidden">
        <div className="flex flex-col gap-36 w-full">
          <div className="">
            <h2 className="text-4xl font-spaceGrotesk">Proof of Time</h2>
            <p className="font-robotoMono max-w-[770px] pl-28 pt-16 text-lg">
              Receive signed receipts timestamps down to the millisecond that
              serve as a verifiable ‘proof of time’ for when information was
              stored on Bundlr.
            </p>
          </div>
          <div className="">
            <h2 className="text-4xl font-spaceGrotesk">
              Custom Metadata Tagging
            </h2>
            <p className="font-robotoMono max-w-[770px] pl-28 pt-16 text-lg">
              You can add custom tags to the metadata of the content that you
              store on Bundlr. This makes it simple to index and query any data
              that you need to find on Bundlr.
            </p>
          </div>
        </div>
        <div className="w-[310px]">
          <h3 className="inline-block transform -rotate-90 mt-24 text-[20px] uppercase ml-auto">
            PROVE AND FIND TRUTH
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

export default ProofOfProvenance
