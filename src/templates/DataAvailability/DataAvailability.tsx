import Benefits, {
  BenefitsProps
} from '@/components/Differentials/Differentials'
import {
  Button,
  CtaCentralized,
  Footer,
  HomeProduct,
  NavbarDesktop
} from '@/components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

import { CtaCentralizedProps } from '@/components/CtaCentralized/CtaCentralized'
import { DevIcon } from '@/svg'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'

const useDataAvailability = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Optimistic Data Availability',
    description:
      'Improve performance, scalability, and costs by opting into consensus. Use a level of consensus that makes sense for your app.'
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

  const BENEFITS_CONTENT: BenefitsProps = {
    title: 'What Bundlr Offers',
    items: [
      {
        title: 'Scales to Millions <br/>of TPS',
        description:
          'Bundlr can scale horizontally to handle millions of transactions per second'
      },
      {
        title: 'Optimize Costs',
        description:
          'High throughput, low latency applications at a fraction of the cost'
      },
      {
        title: 'Seamless Integration',
        description: '<10 lines of code to integrate Bundlr'
      },
      {
        title: 'Instant Finality',
        description: 'Transaction ordering and finality in under 8 milliseconds'
      }
    ]
  }

  return { PAGE_SEO, PRODUCT_CONTENT, CTA_CONTENT, BENEFITS_CONTENT }
}

const DataAvailability: NextPage = () => {
  const { PAGE_SEO, PRODUCT_CONTENT, CTA_CONTENT, BENEFITS_CONTENT } =
    useDataAvailability()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <header className="bg-ghostWhite border-b-2 lg:border-none">
        <NavbarDesktop scheme={SchemeColor.ghostWhite} />
        <div className="pt-20 pb-52 lg:pt-0 lg:pb-0 lg:h-[700px] flex flex-col items-start justify-center relative lg:overflow-hidden px-5 lg:px-[79px] gap-5">
          <div className="hidden lg:flex absolute top-6 left-[79px] gap-4">
            <Link href={'/solutions/descentralized-storage'}>
              <div className="uppercase px-2 py-1 font-robotoMono text-xs cursor-pointer">
                Storage
              </div>
            </Link>
            <Link href={'/solutions/proof-of-provenance'}>
              <div className="uppercase px-2 py-1 font-robotoMono text-xs cursor-pointer">
                Provenance
              </div>
            </Link>
            <div className="uppercase px-2 py-1 font-robotoMono text-xs bg-black text-white">
              Data availability
            </div>
          </div>
          <img
            src="/assets/dataavailability/blocks.png"
            className="absolute -top-30 right-0 md:-right-64 -bottom-56 lg:bottom-auto"
            alt="cloud"
          />
          <h1 className="text-5xl lg:text-7xl z-10">
            Optimistic <br />
            Data Availability
          </h1>
          <p className="font-robotoMono text-base z-10">
            Improve performance, scalability, and costs by opting in to
            consensus
          </p>
        </div>
      </header>
      <section className="px-5 lg:px-[79px] flex py-28 lg:py-56 relative  bg-ghostWhite">
        <div className="flex flex-col gap-36 w-full lg:w-1/2 ml-auto z-10">
          <div className="">
            <h2 className="text-4xl font-fkDisplay text-center lg:text-left">
              What is Optimistic Data Availability?
            </h2>
            <p className="font-robotoMono w-full lg:max-w-[770px] pl-0 lg:pl-28 pt-8 lg:pt-16 text-lg leading-loose text-center lg:text-left">
              Bundlr is the trust assumption, but it always gets settled on L1,
              Arweave.
            </p>
          </div>
        </div>
        <img
          src="/assets/dataavailability/cloud.png"
          alt="data-splash"
          className="hidden lg:block absolute bottom-0 -left-40 md:-left-96 lg:-left-32 w-[767px]"
        />
      </section>

      <Benefits {...BENEFITS_CONTENT} />

      <section className="px-5 lg:px-[79px] flex py-24 relative overflow-hidden">
        <div className="flex flex-col gap-36 w-full">
          <div className="">
            <h2 className="text-4xl font-fkDisplay text-center lg:text-left">Opt-in to Consensus</h2>
            <p className="font-robotoMono w-full lg:max-w-[770px] pl-0 lg:pl-16 lg:pl-28 pt-16 text-lg leading-loose text-center lg:text-left">
              People pay for consensus to update the state of a blockchain in
              every transaction. For non-financial transactions, this is
              wasteful and unnecessarily increases blockchain fees.
            </p>
            <p className="font-robotoMono w-full lg:max-w-[770px] pl-0 lg:pl-28 pt-16 text-lg leading-loose text-center lg:text-left">
              For such use cases, you can have stateless transactions, which
              don’t require consensus. This allows incredibly low latency
              transactions at industrial scales for an affordable price.
            </p>
          </div>
          <div className="">
            <h2 className="text-4xl font-fkDisplay text-center lg:text-left">
              “And What If I Need My Data On-chain?”
            </h2>
            <p className="font-robotoMono w-full lg:max-w-[770px] pl-0 lg:pl-28 pt-16 text-lg leading-loose text-center lg:text-left">
              Easy,just connect to an oracle. Bundlr allows you to pay for state
              only when you need it.
            </p>
          </div>
        </div>
        <div className="hidden lg:w-[310px]">
          <h3 className="inline-block transform -rotate-90 mt-24 text-[20px] uppercase ml-auto">
            PAY FOR WHAT YOU USE
          </h3>
        </div>
      </section>

      <div className="overflow-hidden">
        <Marquee gradientColor={[254, 244, 238]} speed={155}>
          <motion.h2 className="text-4xl lg:text-8xl whitespace-nowrap py-10 lg:py-32 uppercase">
            {Array.from({ length: 50 }).map((_, i) => (
              <span key={i}> OPTIMISM IS SENSIBLE {';) '} </span>
            ))}
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

export default DataAvailability
