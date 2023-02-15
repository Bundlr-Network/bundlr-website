import {
  Button,
  CtaCentralized,
  Footer,
  HomeProduct,
  NavbarDesktop
} from '@/components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

import Benefits from '@/components/Differentials'
import { BenefitsProps } from '@/components/Differentials/Differentials'
import { CtaCentralizedProps } from '@/components/CtaCentralized/CtaCentralized'
import { DevIcon } from '@/svg'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'

const useProofOfProvenance = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Proof Of Provenance',
    description:
      'Identify original information by accurately attributing characteristics of its origin. Ensure authenticity and traceability for your data.'
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
        description: 'You can upload data to Bundlr in under 8ms'
      },
      {
        title: 'Seamless Integration',
        description: 'It takes 3-4 lines of code to integrate Bundlr'
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
  const { PAGE_SEO, PRODUCT_CONTENT, CTA_CONTENT, BENEFITS_CONTENT } =
    useProofOfProvenance()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <header className="bg-ghostWhite">
        <NavbarDesktop scheme={SchemeColor.ghostWhite} />
        <div className="pt-20 pb-52 lg:pt-0 lg:pb-0 lg:h-[700px] flex flex-col items-start justify-center relative overflow-hidden px-5 lg:px-[79px] gap-5">
          <div className="hidden lg:flex absolute top-6 left-[79px] gap-4">
            <Link href={'/solutions/decentralized-storage'}>
              <div className="uppercase px-2 py-1 font-robotoMono text-xs cursor-pointer">
                Storage
              </div>
            </Link>
            <Link href={'/solutions/proof-of-provenance'}>
              <div className="uppercase px-2 py-1 font-robotoMono text-xs cursor-pointer bg-black text-white">
                Provenance
              </div>
            </Link>
            <Link href={'/solutions/data-availability'}>
              <div className="uppercase px-2 py-1 font-robotoMono text-xs cursor-pointer">
                Data availability
              </div>
            </Link>
          </div>
          <img
            src="/new/assets/home/data-cluster-rotated.webp"
            className="absolute -bottom-20 lg:-top-30 -right-52 w-[900px]"
            alt="cloud"
          />
          <h1 className="text-5xl lg:text-7xl z-10">Proof of Provenance</h1>
          <p className="font-robotoMono text-base z-10">
            Trustlessly identify original information by accurately attributing
            characteristics of its origin.
          </p>
        </div>
      </header>

      <Benefits {...BENEFITS_CONTENT} />

      <section className="px-5 lg:px-[79px] flex py-12 lg:py-24 relative overflow-hidden">
        <div className="flex flex-col gap-36 w-full">
          <div className="">
            <h2 className="text-4xl font-fkDisplay text-center lg:text-left">Proof of Time</h2>
            <p className="font-robotoMono w-full lg:max-w-[770px] pl-0 lg:pl-28 pt-16 text-lg leading-loose text-center lg:text-left">
              Receive signed receipts timestamps down to the millisecond that
              serve as a verifiable ‘proof of time’ for when information was
              stored on Bundlr.
            </p>
          </div>
          <div className="">
            <h2 className="text-4xl font-fkDisplay text-center lg:text-left">Custom Metadata Tagging</h2>
            <p className="font-robotoMono w-full lg:max-w-[770px] pl-0 lg:pl-28 pt-16 text-lg leading-loose text-center lg:text-left">
              You can add custom tags to the metadata of the content that you
              store on Bundlr. This makes it simple to index and query any data
              that you need to find on Bundlr.
            </p>
          </div>
        </div>
        <p className="hidden lg:block transform rotate-180 text-center text-[26px] uppercase" style={{ writingMode: 'vertical-rl' }}>
          PROVE AND FIND TRUTH
        </p>
      </section>

      <div className="overflow-hidden">
        <Marquee gradientColor={[254, 244, 238]} speed={155}>
          <motion.h2 className="text-4xl lg:text-8xl whitespace-nowrap py-10 lg:py-32 uppercase">
            Identify original information with true provenance Identify original
            information with true provenance Identify original information with
            true provenance{' '}
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
