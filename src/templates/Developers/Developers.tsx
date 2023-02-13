import Benefits, {
  BenefitsProps
} from '@/components/Differentials/Differentials'
import {
  Button,
  CtaCentralized,
  ExpandableSection,
  Footer,
  HomeTrustedBy,
  JoinTheCommunity,
  NavbarDesktop,
  SectionTitle
} from '@/components'

import { ButtonScheme } from '@/components/Button/Button'
import { CtaCentralizedProps } from '@/components/CtaCentralized/CtaCentralized'
import { DevIcon } from '@/svg'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'

const useDevelopers = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Developers',
    description: 'Unlock the full potential of Bundlr\'s technology with our developer resources. Use our SDK and start storing data permanently with 3-4 lines of code.'
  }

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
        description: 'It takes 3-4 lines of code to integrate Bundlr'
      },
      {
        title: 'Pay in Any Token',
        description: 'You can pay to use Bundlr in 14 supported tokens'
      }
    ]
  }

  return { PAGE_SEO, CTA_CONTENT, BENEFITS_CONTENT }
}

const Developers: NextPage = () => {
  const { PAGE_SEO, CTA_CONTENT, BENEFITS_CONTENT } = useDevelopers()

  return (
    <div className="">
      <NextSeo {...PAGE_SEO} />
      <header className=" text-white bg-black">
        <NavbarDesktop scheme={SchemeColor.black} />
        <div className="px-5 lg:px-0 flex flex-col items-center gap-9 h-[calc(100vh-90px)] relative">
          <h1 className="text-6xl lg:text-7xl leading-none mt-24 z-10 text-center">
            Build Seamlessly with Bundlr
          </h1>
          <p className="text-lg font-robotoMono font-light z-10 text-center max-w-5xl">
            Bundlr is a decentralized data network to help developers solve
            complex data integrity issues. Our performant, scalable, seamless
            storage, proof of provenance, and data availability guarantees
            allows you establish a trustless data foundation.
          </p>
          <a
            href="https://docs.bundlr.network/"
            target={'_blank'}
            rel="noreferrer"
            className="z-10"
          >
            <Button scheme={ButtonScheme.white}>
              START BUILDING
              <DevIcon />
            </Button>
          </a>

          <img
            src="/assets/developers/header.png"
            alt="hero"
            className="absolute bg-cover bottom-0 w-full h-64"
          />
        </div>
      </header>

      <Benefits {...BENEFITS_CONTENT} />

      <section className="flex flex-col lg:block gap-20 lg:gap-0 h-auto lg:h-[489px] text-black px-5 lg:px-[109px] bg-seashell pt-32">
        <div className="flex flex-col items-start">
          <div className="text-9xl">&gt;90%</div>
          <p className="font-robotoMono text-lg">
            Bundlr processes over 90% of data uploaded to Arweave
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-9xl">&lt;8ms</div>
          <p className="font-robotoMono text-lg">
            Data is uploaded to Bundlr in less than 8 milliseconds
          </p>
        </div>
      </section>

      <section className="bg-seashell pt-44 pb-20">
        <div className="mx-5 lg:mx-44 rounded-[20px] overflow-hidden bg-black z-10">
          <HomeTrustedBy scheme="dark" />
        </div>
      </section>

      <section className="px-5 lg:px-[109px] bg-seashell pt-16 pb-36 flex justify-between items-center gap-24">
        <div>
          <SectionTitle title="How Bundlr Works" />
          <div className="flex flex-col gap-10 font-robotoMono max-w-[600px] ml-24 pt-16">
            <p className="">
              Bundlr uses binary encoding methods to compact multiple Layer 2
              transactions into a Layer 1 transaction know as a bundle. Like
              Ethereum rollups, Bundles reduce block usage.
            </p>
            <p className="">
              {' '}
              As bundle sizes increase, Bundlr permits transactions per second
              to scale horizontally and linearly, which means that Bunldr can
              easily scale to millions of transactions per second.
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/assets/developers/cloud.png" alt="" width={689} />
        </div>
      </section>
      <section className='bg-black text-white flex gap-20 items-center relative h-auto flex-col-reverse lg:flex-row px-4 lg:px-[109px] py-20'>
        <div className="hidden lg:inline-block absolute top-32 left-0">
          <h2 className="transform -rotate-90 text-[26px] uppercase w-[300px]">
            BUILD ON BUNDLR
          </h2>
        </div>
        <img src="/assets/developers/data-donuts.png" alt="" />
        <div className="ml-auto">
          <ExpandableSection />
        </div>
      </section>
      <section className="px-5 lg:px-[109px] bg-seashell pt-16 flex justify-between gap-24 items-center">
        <div>
          <SectionTitle title="Why on Arweave?" />
          <div className="flex flex-col gap-10 font-robotoMono max-w-[600px] ml-24 pt-16">
            <p className="">
              <a href="https://arweave.org" target={'_blank'} rel="noreferrer">
                Arweave
              </a>{' '}
              makes it possible to store data permanently for the first time
              ever. This is fundamental to solving the data integrity challenges
              we face today.{' '}
            </p>
            <p className="">
              In the same way that the internet connected humans across
              geographies, Arweave connects humans across time.{' '}
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/assets/developers/vortex.png" alt="" width={689} />
        </div>
      </section>
      <JoinTheCommunity />

      <CtaCentralized {...CTA_CONTENT} />

      <Footer />
    </div>
  )
}

export default Developers
