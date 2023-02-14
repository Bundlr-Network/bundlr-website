import {
  Button,
  CtaSection,
  Footer,
  HomeHeader,
  HomeHorizontalScroll,
  HomeProduct,
  HomeStats,
  HomeTrustedBy,
  HomeWhyUseBundlr,
  NavbarDesktop,
  SectionTitle,
  SupportedCurrencies,
  Testimonial,
} from '@/components';
import { useLayoutEffect, useRef } from 'react';

import { ButtonScheme } from '@/components/Button/Button'
import { DevIcon } from '@/svg';
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const useHome = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Home',
    description: 'Bundlr is the world’s next data layer. We solve data integrity issues through permanent storage, proof of provenance, and optimistic data availability.'
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
        title: 'Decentralized Storage',
        description:
          'Performant, scalable, and seamless data, stored permanently on Arweave',
        href: '/solutions/decentralized-storage'
      },
      {
        title: 'Proof of Provenance',
        description:
          'Identify original information by accurately attributing origin',
        href: '/solution/proof-of-provenance'
      },
      {
        title: 'Data Availability',
        description:
          'Pay for consensus only when you need it',
        href: '/solutions/data-availability'
      }
    ]

  return { PAGE_SEO, WHY_USE_BUNDLR, PRODUCT_CONTENT }
}

const Home: NextPage = () => {
  const { PAGE_SEO, WHY_USE_BUNDLR, PRODUCT_CONTENT } = useHome()

  // const wrapper = useRef<any>()
  // const slider = useRef<any>()

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let panels = slider.current.children
  //     gsap.to(panels, {
  //       xPercent: -100 * (panels.length - 1),
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: slider.current,
  //         pin: true,
  //         scrub: 1,
  //         snap: 1 / (panels.length - 1),
  //         end: () => '+=' + slider?.current?.offsetWidth * 4,
  //         // markers: true
  //       }
  //     })
  //   }, wrapper)
  //   return () => ctx.revert()
  // })

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <HomeHeader />
      <HomeStats />

      <HomeProduct content={PRODUCT_CONTENT} title={'The Technology'}>
        <div className="h-[271px] lg:h-[171px] text-white mt-[122px]">
          <HomeTrustedBy scheme={'dark'} />
        </div>
      </HomeProduct>

      <section className="bg-ghostWhite pb-10 lg:pb-[124px]">
        <HomeWhyUseBundlr content={WHY_USE_BUNDLR}>
          <div className="mx-4 lg:mx-[79px] rounded-[20px] overflow-hidden mt-0 lg:mt-10">
            <SupportedCurrencies />
          </div>
        </HomeWhyUseBundlr>
      </section>

      <div className="overflow-hidden">
        <HomeHorizontalScroll />
      </div>

      <section className="flex items-center justify-center lg:items-start flex-col px-5 lg:px-[79px] pt-12 lg:pt-[122px] bg-seashell overflow-hidden" style={{
        boxShadow: '0 0 70px rgba(0,0,0,.2)'
      }}>
        <SectionTitle title="Testimonials" />
        <div className="flex mt-[89px] justify-center relative">
          <h2 className="text-5xl text-center lg:text-[76px] font-light leading-none font-fkDisplay">
            What Users Say About Us
          </h2>
        </div>
        <Testimonial />
      </section>

      <div className="bg-seashell py-[88px]">
        <CtaSection>
          <div className="flex flex-col items-center md:items-center lg:items-start justify-center gap-10 lg:gap-0">
            <p className="text-4xl md:text-5xl text-center lg:text-[62px] lg:text-start font-light leading-none -mt-20 lg:mt-0">
              Ready to Become a BUNDLOOOOR?
            </p>
            <div className="mt-0 lg:mt-10">
              <a href="https://docs.bundlr.network/" target={"_blank"} rel="noreferrer">
                <Button scheme={ButtonScheme.white}>
                  START BUILDING
                  <DevIcon color="black" />
                </Button>
              </a>
            </div>
          </div>
        </CtaSection>
      </div>
      <Footer />
    </>
  )
}

export default Home
