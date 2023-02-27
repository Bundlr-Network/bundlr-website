import {
  Button,
  CtaCentralized,
  Footer,
  Heading,
  HomeProduct,
  NavbarDesktop
} from '@/components'
import { FC, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Benefits from '@/components/Differentials'
import { BenefitsProps } from '@/components/Differentials/Differentials'
import { CtaCentralizedProps } from '@/components/CtaCentralized/CtaCentralized'
import { DevIcon } from '@/svg'
import Image from 'next/image'
import Link from 'next/link'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'
import { useRouter } from 'next/router'

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
      title: 'Proof of Provenance',
      description:
        'Identify original information by accurately attributing origin',
      href: '/solutions/proof-of-provenance'
    }
    // {
    //   title: 'Optimistic Data Availability',
    //   description: 'Pay for consensus only when you need it',
    //   href: '/solutions/data-availability'
    // }
  ]

  const BENEFITS_CONTENT: BenefitsProps = {
    title: 'What Bundlr Offers',
    items: [
      {
        title: 'Scales to Millions of TPS',
        description:
          'Can scale horizontally to handle millions of transactions per second'
      },
      {
        title: 'Instant Uploads',
        description: 'Upload data to Bundlr in under 8ms'
      },
      {
        title: 'Seamless Integration',
        description: '3-4 lines of code to integrate Bundlr'
      },
      {
        title: 'Pay in Any Token',
        description: 'Sign and pay to use Bundlr in 14 supported tokens'
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

export const SubNav: FC = () => {
  const currentRoute = useRouter().pathname

  const SUBNAV_CONTENT = [
    {
      title: 'Storage',
      href: '/solutions/decentralized-storage'
    },
    {
      title: 'Provenance',
      href: '/solutions/proof-of-provenance'
    }
    // {
    //   title: 'Data Availability',
    //   href: '/solutions/data-availability'
    // }
  ]

  return (
    <div className="absolute top-6 left-[79px] hidden gap-4 lg:flex">
      {SUBNAV_CONTENT.map((item, index) => (
        <Link href={item.href} key={`sub-nav-${index}`}>
          <div
            className={`cursor-pointer px-2 py-1 font-robotoMono text-xs uppercase ${
              currentRoute === item.href ? 'bg-black text-white' : ''
            }`}
          >
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  )
}

const DescentralizedStorage: NextPage = () => {
  const { PAGE_SEO, PRODUCT_CONTENT, CTA_CONTENT, BENEFITS_CONTENT } =
    useDescentralizedStorage()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <header className="bg-ghostWhite ">
        <NavbarDesktop scheme={SchemeColor.ghostWhite} />
        <div className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-52 lg:h-[700px] lg:px-0 lg:pt-0 lg:pb-0">
          <SubNav />

          <div className="absolute -left-[650px] -bottom-96 -scale-x-100 lg:-left-[650px] lg:-bottom-10 xl:-left-[450px] 2xl:-left-48">
            <Image
              src="/new/assets/home/data-dust.webp"
              width={'1200px'}
              height={'614px'}
              alt="cloud"
              loading="eager"
            />
          </div>
          <div className="z-50 ml-auto pr-5 lg:pr-[79px]">
            <Heading level={1} className={'z-10 text-center md:text-left'}>
              Decentralized <br /> Storage
            </Heading>
            <p className="z-50 mt-5 text-center font-robotoMono text-base md:text-left">
              Performant, scalable, and seamless – forever.{' '}
            </p>
          </div>
        </div>
      </header>

      <Benefits {...BENEFITS_CONTENT} />

      <section className="relative h-auto w-full px-5 lg:h-[911px] lg:px-[79px]">
        {/* <h2 className="text-4xl lg:text-5xl font-fkDisplay py-12 lg:py-48 w-full lg:w-[440px] text-center lg:text-left">
          Data Stored for as Long as You Need
        </h2> */}
        <Heading
          level={3}
          className={
            'w-full py-12 text-center lg:w-[440px]  lg:py-48 lg:text-left'
          }
        >
          Data Stored Permanently
        </Heading>
        <img
          src="/new/assets/home/spiral.webp"
          alt="data-spiral"
          width={500}
          className="absolute right-10 top-10 hidden lg:block"
        />
        <ul className="flex flex-col gap-10 lg:flex-row">
          <li className="w-full rounded-lg bg-gradient-to-b from-[#968982] to-transparent p-[1px] lg:w-1/2">
            <a href="https://arweave.org/" target={'_blank'} rel="noreferrer">
              {/* add gradient background that goes from gray to transparent */}
              <div className="flex flex-col gap-8 overflow-hidden rounded-lg bg-seashell px-2 py-8 lg:p-11">
                {/* make image as background of rectangle box */}
                <div className="flex flex-col gap-4 px-5 pb-10">
                  <Heading level={3}>Arweave</Heading>
                  <div className="self-start bg-black p-1 font-robotoMono text-xs font-light uppercase text-white">
                    LIVE
                  </div>
                  <p className="font-robotoMono text-lg leading-loose">
                    Permanent storage on Arweave.{' '}
                  </p>
                  <p className="font-robotoMono text-lg leading-loose">
                    In the same way the internet connected people across
                    geographies, Arweave connects people across time. Bundlr is
                    currently handling over 90% of all transaction volume on
                    Arweave.{' '}
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="w-full rounded-lg bg-gradient-to-b from-[#968982] to-transparent p-[1px] lg:w-1/2">
            {/* add gradient background that goes from gray to transparent */}

            <div className="flex h-full flex-col gap-8 overflow-hidden rounded-lg bg-seashell px-2 py-8 lg:p-11">
              {/* make image as background of rectangle box */}
              <div className="flex flex-col gap-4 px-5 pb-10">
                <Heading level={3}>Preweave</Heading>
                <div className="self-start bg-black p-1 font-robotoMono text-xs font-light uppercase text-white">
                  Coming soon
                </div>
                <p className="font-robotoMono text-lg leading-loose">
                  Storage for as long as you need.{' '}
                </p>
                <p className="font-robotoMono text-lg leading-loose">
                  Preweave is a peer-to-peer caching layer built on top of
                  Bundlr. Data on Preweave can also easily be transferred to
                  Arweave for permanent storage.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section className="relative flex overflow-hidden px-5 py-24 lg:px-[79px]">
        <div className="">
          <h3 className="mt-24 -ml-[96px] hidden -rotate-90 transform text-[26px] uppercase lg:inline-block">
            WE ARE DIFFERENT
          </h3>
        </div>
        <div className="ml-auto flex w-full flex-col gap-36 lg:w-2/3">
          <div className="">
            {/* <h2 className="text-4xl font-fkDisplay text-center lg:text-left">
              Lightning Fast Uploads, at Industrial Scale
            </h2> */}
            <Heading level={3} className="text-center lg:text-left">
              Lightning Fast Uploads, at Industrial Scale
            </Heading>
            <p className="max-w-[870px] pl-0 pt-16 text-center font-robotoMono text-lg leading-loose lg:pl-28 lg:text-left">
              With uploads time under 8 milliseconds and the ability to scale to
              millions of transactions per seconds, Bundlr’s performance is on
              par with traditional providers. Bundlr is ready to store the
              world’s data.
            </p>
          </div>
          <div className="">
            {/* <h2 className="text-4xl font-fkDisplay text-center lg:text-left z-50">Seamless for Developers</h2> */}
            <Heading level={3} className="z-50 text-center lg:text-left">
              Seamless for Developers
            </Heading>
            <p className="z-50 max-w-[870px] pl-0 pt-16 text-center font-robotoMono text-lg leading-loose lg:pl-28 lg:text-left">
              Our intuitive docs and SDK help you integrate Bundlr with just 3-4
              lines of code. Further, you can sign and pay for storage in of our
              14 supported tokens, including ETH, SOL, and MATIC.{' '}
              <a
                href="https://www.youtube.com/watch?v=Wxfyd0veaEc&t=847s"
                target={'_blank'}
                rel="noreferrer"
              >
                <u>Find out</u>
              </a>{' '}
              how simple working with Bundlr is.
            </p>
          </div>
        </div>
        <img
          src="/new/assets/home/data-donuts.webp"
          alt="data-splash"
          className="absolute -bottom-72 -left-32 hidden w-[600px] rotate-[-30deg] lg:block"
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
