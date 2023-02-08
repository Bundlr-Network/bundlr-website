import {
  Button,
  CtaSection,
  Footer,
  HomeCloudImage,
  HomeHeader,
  HomeProduct,
  HomeStats,
  HomeTrustedBy,
  HomeWhyUseBundlr,
  NavbarDesktop,
  SectionTitle,
  Testimonial
} from '@/components'
import { useEffect, useState } from 'react'

import { ButtonScheme } from '@/components/Button/Button'
import { DevIcon } from '@/svg'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { url } from 'inspector'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'

const useHome = () => {
  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
  }

  const WHY_USE_BUNDLR = [
    {
      title: 'Performant',
      description:
        'Instant uploads and retrievability. Finalized in under 8 milliseconds'
    },

    {
      title: 'Scalable',
      description:
        'Scales to millions of transactions per second with horizontal scaling'
    },

    {
      title: 'Seamless',
      description:
        'Integrate with 3-4 lines of code. Sign and pay in 14 major tokens'
    },
    {
      title: 'Verifiable',
      description:
        'Quick and easy to verify the provenance of data and transactions'
    },

    {
      title: 'Customizable',
      description: 'Customize data with metadata tags for easy querying'
    },
    {
      title: 'Enduring',
      description: 'Affordable, long-term data solutions'
    }
  ]

  const PRODUCT_CONTENT: {
    title: string
    description: string
    href: string
  }[] = [
      {
        title: 'Data Availability',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec neque velit enim non.',
        href: '#'
      },
      {
        title: 'Decentralized Storage',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec neque velit enim non.',
        href: '#'
      },
      {
        title: 'Proof of Provenance',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec neque velit enim non.',
        href: '#'
      }
    ]



  return { PAGE_SEO, WHY_USE_BUNDLR, PRODUCT_CONTENT }
}

const Home: NextPage = () => {
  const { PAGE_SEO, WHY_USE_BUNDLR, PRODUCT_CONTENT } = useHome()
  const scrollRef = useHorizontalScroll()


  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <HomeHeader />
      <HomeStats />

      <HomeProduct content={PRODUCT_CONTENT} title={'The Technology'}>
        {/* <div className="h-[271px] text-white border border-white mt-[192px]">
          Supported currencies
        </div> */}
      </HomeProduct>

      <section className="bg-ghostWhite pb-10 lg:pb-[144px]">
        <HomeWhyUseBundlr content={WHY_USE_BUNDLR}>
          <div className="mx-4 lg:mx-44 rounded-[20px] overflow-hidden">
            <HomeTrustedBy />
          </div>
        </HomeWhyUseBundlr>
      </section>

      <div
        ref={scrollRef as any}
        className="w-screen overflow-x-hidden flex h-screen"
      >
        <div className="h-full w-screen shrink-0 font-fkDisplay text-7xl flex items-center justify-center">
          Data is Evolving
        </div>
        <div className="relative h-full w-screen shrink-0 flex items-center justify-between flex-col pt-24">
          <h2 className="text-7xl font-fkDispla z-10">On-Premise Servers</h2>
          <p className="font-robotoMono text-base max-w-md text-center z-10 mb-32">
            In the internet’s early days, online data was stored in local
            servers. This was inconvenient and expensive for most people.
          </p>
          <div />
          {/* centered absolute image  */}
          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[90%]">
            <img src="/assets/home/particles.png" alt="On-Premise Servers" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[90%]">
            <img src="/assets/home/servers.png" alt="On-Premise Servers" />
          </div>
        </div>
        <div className="relative h-full w-screen	shrink-0 px-5 lg:px-[109px] pt-[120px]">
          <div className="w-2/5 ml-auto">
            <h2 className="text-7xl font-fkDispla z-10">The Cloud</h2>
            <div className="flex flex-col gap-6 mt-12 ml-16">
              <p className="font-robotoMono text-base max-w-md z-10">
                With the advent of the cloud, data storage became more
                affordable, convenient, and performant.
              </p>
              <p className="font-robotoMono text-base max-w-md z-10">
                But, data centralized in the cloud.
              </p>
            </div>
          </div>
          {/* center of screen absolute image */}
          <img
            src="/assets/home/cloud.png"
            alt="cloud"
            className="absolute bottom-0 -left-32 right-0 mx-auto max-w-[80%]"
          />
        </div>
        <div className="relative h-full w-screen flex flex-col items-center justify-start	shrink-0 px-5 lg:px-[109px] pt-[120px]">
          <div>
            <div className="flex flex-col gap-6 mt-4">
              <p className="font-robotoMono text-base max-w-md z-10 text-center">
                Bundlr is the successor to on-premise servers and the cloud.
              </p>
              <p className="font-robotoMono text-base max-w-md z-10 text-center">
                Through cryptographic guarantees and trustless provenance, you
                can now secure your data, make it censorship resistant and
                available forever – all while retaining the performance and
                convenience that you expect
              </p>
            </div>
          </div>
          {/* center of screen absolute image */}
          <img
            src="/assets/home/dataverse.png"
            alt="dataverse"
            className="absolute bottom-0 left-0 right-0 mx-auto"
          />
        </div>
        <div className="relative h-full w-screen flex flex-col items-center justify-start	shrink-0 px-5 lg:px-[109px] pt-[120px]">
          <div>
            <div className="flex flex-col gap-6 mt-4">
              <p className="text-center text-7xl font-fkDispla z-10">
                Bundlr is the <br /> trustless source of truth
              </p>
              <div className="self-center">
                <Button>
                  LEARN MORE
                  <DevIcon />
                </Button>
              </div>
            </div>
          </div>
          {/* center of screen absolute image */}
          <img
            src="/assets/home/dataverse.png"
            alt="dataverse"
            className="absolute bottom-0 left-0 right-0 mx-auto"
          />
        </div>
      </div>

      <section className="px-5 lg:px-[109px] mt-[122px]">
        <SectionTitle title="Testimonials" />
        <div className="flex mt-[89px] justify-center relative">
          <h2 className="text-[76px] font-light leading-none font-fkDisplay">
            What Users Say About Us
          </h2>
        </div>
        <Testimonial />
      </section>

      <CtaSection>
        <div className="flex flex-col">
          <p className="text-[62px] font-light leading-none">
            Ready to Become a BUNDLOOOOR?
          </p>
          <div className="mt-10">
            <Button scheme={ButtonScheme.white}>
              START BUILDING
              <DevIcon color="black" />
            </Button>
          </div>
        </div>
      </CtaSection>
      <Footer />
    </>
  )
}

export default Home
