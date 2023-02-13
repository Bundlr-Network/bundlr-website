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
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'

const useDescentralizedStorage = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Decentralized Storage',
    description:
      'Reliable and secure decentralized storage solutions. Upgrade your data management with performant, scalable, and permanent storage.'
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

  const BENEFITS_CONTENT: BenefitsProps = {
    title: 'What Bundlr Offers',
    items: [
      {
        title: 'Scales to Millions of TPS',
        description:
          'Bundlr can scale horizontally to handle millions of transactions per second'
      },
      {
        title: 'Instant Uploads',
        description: 'You can upload data to Bundlr in under 8ms'
      },
      {
        title: 'Seamless Integration',
        description:
          'Bundlr is easy to integrate into your existing infrastructure'
      },
      {
        title: 'Pay in Any Token',
        description: 'You can pay to use Bundlr in 14 supported tokens'
      }
    ]
  }

  const CTA_CONTENT: CtaCentralizedProps = {
    title: 'Ready to Become <br /> a BUNDLOOOOR?',
    cta: 'Start Building',
    href: 'https://docs.bundlr.network',
    newTab: true
  }

  return { PAGE_SEO, PRODUCT_CONTENT, CTA_CONTENT, BENEFITS_CONTENT }
}

const DescentralizedStorage: NextPage = () => {
  const { PAGE_SEO, PRODUCT_CONTENT, CTA_CONTENT, BENEFITS_CONTENT } =
    useDescentralizedStorage()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <header className="bg-ghostWhite ">
        <NavbarDesktop scheme={SchemeColor.ghostWhite} />
        <div className="pt-20 pb-52 lg:pt-0 lg:pb-0 lg:h-[700px] flex flex-col items-center justify-center relative overflow-hidden px-4 lg:px-0">
          <div className="hidden lg:flex absolute top-6 left-[109px] gap-4">
            <Link href={'/solutions/descentralized-storage'}>
              <div className="uppercase px-2 py-1 font-robotoMono text-xs cursor-pointer bg-black text-white">
                Storage
              </div>
            </Link>
            <Link href={'/solutions/proof-of-provenance'}>
              <div className="uppercase px-2 py-1 font-robotoMono text-xs cursor-pointer">
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
            src="/assets/descentralizedStorage/cloud.png"
            className="absolute -top-30 left-0 -bottom-20 lg:bottom-auto"
            width={'600px'}
            alt="cloud"
            loading="eager"
          />
          <h1 className="text-5xl lg:text-7xl z-10">Decentralized Storage</h1>
          <p className="font-robotoMono text-base z-10 mt-5">
            Performant, scalable, and seamless – forever.{' '}
          </p>
        </div>
      </header>

      <Benefits {...BENEFITS_CONTENT} />

      <section className="relative h-auto lg:h-[911px] px-5 lg:px-[109px] w-full">
        <h2 className="text-4xl lg:text-5xl font-fkDisplay py-12 lg:py-48 w-full lg:w-[440px] text-center lg:text-left">
          Data Stored for as Long as You Need
        </h2>
        <img
          src="/assets/descentralizedStorage/data-spiral.png"
          alt="data-spiral"
          className="absolute right-0 top-0 hidden lg:block"
        />
        <ul className="flex flex-col lg:flex-row gap-10">
          <li className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg w-full lg:w-1/2">
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
          <li className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg w-full lg:w-1/2">
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
      <section className="px-5 lg:px-[109px] flex py-24 relative overflow-hidden">
        <div className="">
          <h3 className="transform -rotate-90 mt-24 text-[26px] uppercase -ml-[96px] hidden lg:inline-block">
            WE ARE DIFFERENT
          </h3>
        </div>
        <div className="flex flex-col gap-36 w-full lg:w-1/2 ml-auto">
          <div className="">
            <h2 className="text-4xl font-fkDisplay text-center lg:text-left">
              Lightning Fast Uploads, at Industrial Scale
            </h2>
            <p className="font-robotoMono max-w-[770px] pl-0 lg:pl-28 pt-16 text-lg text-center lg:text-left">
              With uploads time under 8 milliseconds and the{' '}
              <u>ability to scale to millions of transactions per seconds</u>,
              Bundlr’s performance is on par with traditional providers. Bundlr
              is ready to store the world’s data.
            </p>
          </div>
          <div className="">
            <h2 className="text-4xl font-fkDisplay text-center lg:text-left">Seamless for Developers</h2>
            <p className="font-robotoMono max-w-[770px] pl-0 lg:pl-28 pt-16 text-lg text-center lg:text-left">
              Our intuitive docs and SDK help you integrate Bundlr with just 3-4
              lines of code. Further, you can sign and pay for storage in of our
              14 supported tokens, including ETH, SOL, and MATIC.{' '}
              <a href="#">
                <u>Find out</u>
              </a>{' '}
              how simple working with Bundlr is.
            </p>
          </div>
        </div>
        <img
          src="/assets/descentralizedStorage/data-splash.png"
          alt="data-splash"
          className="absolute -bottom-64 left-0"
        />
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
