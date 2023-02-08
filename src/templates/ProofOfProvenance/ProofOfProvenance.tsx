import { Button, CtaCentralized, Footer, HomeProduct, NavbarDesktop } from '@/components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

import Benefits from '@/components/Differentials'
import { BenefitsProps } from '@/components/Differentials/Differentials'
import { CtaCentralizedProps } from '@/components/CtaCentralized/CtaCentralized'
import { DevIcon } from '@/svg'
import Marquee from 'react-fast-marquee'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'

const useProofOfProvenance = () => {

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

  const CTA_CONTENT: CtaCentralizedProps = {
    title: 'Ready to Become <br /> a BUNDLOOOOR?',
    cta: 'Start Building',
    href: 'https://docs.bundlr.network',
    newTab: true
  }

  const BENEFITS_CONTENT: BenefitsProps = {
    title: 'What Bundlr Offers',
    items: [
      {
        title: 'Unlimited Scalability',
        description:
          'There are no limits to the transactions per second that Bundlr can handle'
      },
      {
        title: 'Instant Uploads',
        description:
          'You can upload data to Bundlr in under 8ms'
      },
      {
        title: 'Seamless Integration',
        description:
          'It takes 3-4 lines of code to integrate Bundlr'
      },
      {
        title: 'Multichain',
        description:
          'Bundlr is a multichain, meaning that it can store data on multiple blockchains'
      }
    ]
  }

  return { PAGE_SEO, PRODUCT_CONTENT, CTA_CONTENT, BENEFITS_CONTENT }
}


const ProofOfProvenance: NextPage = () => {
  const { PAGE_SEO, PRODUCT_CONTENT, CTA_CONTENT, BENEFITS_CONTENT } = useProofOfProvenance()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <header className="bg-ghostWhite">
        <NavbarDesktop scheme={SchemeColor.ghostWhite} />
        <div className="h-[700px] flex flex-col items-start justify-center relative overflow-hidden px-5 lg:px-[109px] gap-5">
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

      <Benefits {...BENEFITS_CONTENT} />

      <section className="px-5 lg:px-[109px] flex py-24 relative overflow-hidden">
        <div className="flex flex-col gap-36 w-full">
          <div className="">
            <h2 className="text-4xl font-fkDisplay">Proof of Time</h2>
            <p className="font-robotoMono max-w-[770px] pl-28 pt-16 text-lg">
              Receive signed receipts timestamps down to the millisecond that
              serve as a verifiable ‘proof of time’ for when information was
              stored on Bundlr.
            </p>
          </div>
          <div className="">
            <h2 className="text-4xl font-fkDisplay">
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
        <Marquee
          gradientColor={[254, 244, 238]}
          speed={25}
        >
          <motion.h2 className="text-8xl whitespace-nowrap py-32 uppercase">
            Identify original information with true provenance{' '}
            Identify original information with true provenance{' '}
            Identify original information with true provenance{' '}
          </motion.h2>
        </Marquee>
      </div>

      <HomeProduct
        content={PRODUCT_CONTENT}
        title={'Learn More About'}
      ></HomeProduct>

      <CtaCentralized {...CTA_CONTENT} />

      <Footer />
    </>
  )
}

export default ProofOfProvenance
