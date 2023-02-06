import Benefits, { BenefitsProps } from '@/components/Differentials/Differentials'
import {
  Button,
  CtaCentralized,
  Footer,
  HomeTrustedBy,
  JoinTheCommunity,
  NavbarDesktop,
  SectionTitle,
} from '@/components';

import { ButtonScheme } from '@/components/Button/Button';
import { CtaCentralizedProps } from '@/components/CtaCentralized/CtaCentralized'
import { DevIcon } from '@/svg'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'

const useDevelopers = () => {
  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
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
        description: 'Bundlr can scale horizontally to handle millions of transactions per second',
      },
      {
        title: 'Instant Uploads',
        description: 'You can upload data to Bundlr in under 8ms',
      },
      {
        title: 'Seamless Integration',
        description: 'It takes 3-4 lines of code to integrate Bundlr',
      },
      {
        title: 'Pay in Any Token',
        description: 'You can pay to use Bundlr in 14 supported tokens',
      },
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
          <h1 className="text-6xl lg:text-7xl leading-none mt-24 z-10">
            Performant, Scalable, Seamless
          </h1>
          <p className="text-lg font-robotoMono font-light z-10">
            Just what you’d expect from the world’s next data layer
          </p>
          <a href="https://docs.bundlr.network/" target={"_blank"} rel="noreferrer" className='z-10'>
            <Button scheme={ButtonScheme.white}>
              START BUILDING
              <DevIcon />
            </Button>
          </a>

          <img src="/assets/developers/header.png" alt="hero" className='absolute bg-cover bottom-0 w-full' />

        </div>
      </header>

      <Benefits {...BENEFITS_CONTENT} />

      <section className="flex flex-col lg:block gap-20 lg:gap-0 h-auto lg:h-[489px] text-black px-5 lg:px-[109px] bg-seashell pt-32" >
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
      </section >

      <section className='bg-seashell pt-44 pb-20'>
        <div className="mx-5 lg:mx-44 rounded-[20px] overflow-hidden bg-black z-10">
          <HomeTrustedBy scheme="dark" />
        </div>
      </section>
      <section className="px-5 lg:px-[109px] bg-seashell pt-16 flex justify-between">
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
          <img src="/assets/developers/cloud.png" alt="" />
        </div>
      </section>
      <section className="px-5 lg:px-[109px] bg-seashell pt-16 flex justify-between">
        <div>
          <SectionTitle title="Why on Arweave?" />
          <div className="flex flex-col gap-10 font-robotoMono max-w-[600px] ml-24 pt-16">
            <p className="">
              Arweave makes it possible to store data permanently for the first
              time ever. This is fundamental to solving the data integrity
              challenges we face today.{' '}
            </p>
            <p className="">
              In the same way that the internet connected humans across
              geographies, Arweave connects humans across time.{' '}
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/assets/developers/vortex.png" alt="" />
        </div>
      </section>
      <JoinTheCommunity />

      <CtaCentralized {...CTA_CONTENT} />

      <Footer />
    </div >
  )
}

export default Developers
