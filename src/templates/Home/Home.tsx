import {
  Button,
  CtaSection,
  Footer,
  Heading,
  HomeHeader,
  HomeHorizontalScroll,
  HomeProduct,
  HomeStats,
  HomeTrustedBy,
  HomeWhyUseBundlr,
  NavbarDesktop,
  SectionTitle,
  SupportedCurrencies,
  Testimonial
} from '@/components'
import { useLayoutEffect, useRef } from 'react'

import { ButtonScheme } from '@/components/Button/Button'
import { DevIcon } from '@/svg'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const useHome = () => {
  const PAGE_SEO = {
    title: 'Bundlr',
    description:
      'Bundlr is the world’s data layer. We solve data integrity issues through permanent storage and proof of provenance.'
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
      description: 'Affordable long-term data solutions'
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
        href: '/solutions/proof-of-provenance'
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
        <div className="mt-[122px] h-[271px] text-white lg:h-[171px]">
          <HomeTrustedBy scheme={'dark'} />
        </div>
      </HomeProduct>

      <section className="bg-ghostWhite pb-10 lg:pb-[124px]">
        <HomeWhyUseBundlr content={WHY_USE_BUNDLR}>
          <div className="mx-4 mt-0 overflow-hidden rounded-[20px] lg:mx-[79px] lg:mt-10">
            <SupportedCurrencies />
          </div>
        </HomeWhyUseBundlr>
      </section>

      <div className="overflow-hidden">
        <HomeHorizontalScroll />
      </div>

      <section
        className="flex flex-col items-center justify-center overflow-hidden bg-seashell px-5 pt-12 lg:items-start lg:px-[79px] lg:pt-[122px]"
        style={
          {
            // boxShadow: '0 0 70px rgba(0,0,0,.2)'
          }
        }
      >
        <SectionTitle title="Testimonials" />
        <div className="relative mt-[89px] flex justify-center">
          <h2 className="text-center font-fkDisplay text-5xl font-light leading-none lg:text-7xl">
            What Users Say About Us
          </h2>
        </div>
        <Testimonial />
      </section>

      <div className="bg-seashell py-[88px]">
        <CtaSection>
          <div className="flex flex-col items-center justify-center gap-10 md:items-center lg:items-start lg:gap-0">
            <Heading level={2} className="text-center lg:text-left">
              Ready to Become a BUNDLOOOOR?
            </Heading>
            <div className="mt-0 lg:mt-10">
              <a
                href="https://docs.bundlr.network/"
                target={'_blank'}
                rel="noreferrer"
              >
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
