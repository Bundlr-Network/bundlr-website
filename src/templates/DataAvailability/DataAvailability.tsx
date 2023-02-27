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
          'Can scale horizontally to handle millions of transactions per second'
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
      <header className="border-b-2 bg-ghostWhite lg:border-none">
        <NavbarDesktop scheme={SchemeColor.ghostWhite} />
        <div className="relative flex flex-col items-start justify-center gap-5 px-5 pt-20 pb-52 lg:h-[700px] lg:overflow-hidden lg:px-[79px] lg:pt-0 lg:pb-0">
          <div className="absolute top-6 left-[79px] hidden gap-4 lg:flex">
            <Link href={'/solutions/decentralized-storage'}>
              <div className="cursor-pointer px-2 py-1 font-robotoMono text-xs uppercase">
                Storage
              </div>
            </Link>
            <Link href={'/solutions/proof-of-provenance'}>
              <div className="cursor-pointer px-2 py-1 font-robotoMono text-xs uppercase">
                Provenance
              </div>
            </Link>
            <div className="bg-black px-2 py-1 font-robotoMono text-xs uppercase text-white">
              Data availability
            </div>
          </div>
          <img
            src="/assets/dataavailability/blocks.png"
            className="-top-30 absolute right-0 -bottom-56 md:-right-64 lg:bottom-auto"
            alt="cloud"
          />
          <h1 className="z-10 text-5xl lg:text-7xl">
            Optimistic <br />
            Data Availability
          </h1>
          <p className="z-10 font-robotoMono text-base">
            Improve performance, scalability, and costs by opting in to
            consensus
          </p>
        </div>
      </header>
      <section className="relative flex bg-ghostWhite px-5 py-28 lg:px-[79px]  lg:py-56">
        <div className="z-10 ml-auto flex w-full flex-col gap-36 lg:w-1/2">
          <div className="">
            <h2 className="text-center font-fkDisplay text-4xl lg:text-left">
              What is Optimistic Data Availability?
            </h2>
            <p className="w-full pl-0 pt-8 text-center font-robotoMono text-lg leading-loose lg:max-w-[770px] lg:pl-28 lg:pt-16 lg:text-left">
              Bundlr is the trust assumption, but it always gets settled on L1,
              Arweave.
            </p>
          </div>
        </div>
        <img
          src="/assets/dataavailability/cloud.png"
          alt="data-splash"
          className="absolute bottom-0 -left-40 hidden w-[767px] md:-left-96 lg:-left-32 lg:block"
        />
      </section>

      <Benefits {...BENEFITS_CONTENT} />

      <section className="relative flex overflow-hidden px-5 py-24 lg:px-[79px]">
        <div className="flex w-full flex-col gap-36">
          <div className="">
            <h2 className="text-center font-fkDisplay text-4xl lg:text-left">
              Opt-in to Consensus
            </h2>
            <p className="w-full pl-0 pt-16 text-center font-robotoMono text-lg leading-loose lg:max-w-[770px] lg:pl-16 lg:pl-28 lg:text-left">
              People pay for consensus to update the state of a blockchain in
              every transaction. For non-financial transactions, this is
              wasteful and unnecessarily increases blockchain fees.
            </p>
            <p className="w-full pl-0 pt-16 text-center font-robotoMono text-lg leading-loose lg:max-w-[770px] lg:pl-28 lg:text-left">
              For such use cases, you can have stateless transactions, which
              don’t require consensus. This allows incredibly low latency
              transactions at industrial scales for an affordable price.
            </p>
          </div>
          <div className="">
            <h2 className="text-center font-fkDisplay text-4xl lg:text-left">
              “And What If I Need My Data On-chain?”
            </h2>
            <p className="w-full pl-0 pt-16 text-center font-robotoMono text-lg leading-loose lg:max-w-[770px] lg:pl-28 lg:text-left">
              Easy,just connect to an oracle. Bundlr allows you to pay for state
              only when you need it.
            </p>
          </div>
        </div>
        <div className="hidden lg:w-[310px]">
          <h3 className="mt-24 ml-auto inline-block -rotate-90 transform text-[20px] uppercase">
            PAY FOR WHAT YOU USE
          </h3>
        </div>
      </section>

      <div className="overflow-hidden">
        <Marquee gradientColor={[254, 244, 238]} speed={155}>
          <motion.h2 className="whitespace-nowrap py-10 text-4xl uppercase lg:py-32 lg:text-8xl">
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
