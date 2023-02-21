import Benefits, {
  BenefitsProps
} from '@/components/Differentials/Differentials'
import {
  Button,
  CtaCentralized,
  ExpandableSection,
  Footer,
  Heading,
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
          'Can scale horizontally to handle millions of transactions per second'
      },
      {
        title: 'Instant Uploads',
        description: 'Upload data to Bundlr in under 8ms'
      },
      {
        title: 'Seamless Integration',
        description:
          '3-4 lines of code to integrate Bundlr'
      },
      {
        title: 'Pay in Any Token',
        description: 'Sign and pay to use Bundlr in 14 supported tokens'
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
        <div className="px-5 lg:px-0 flex flex-col items-center justify-center h-[calc(100vh-90px)] relative">
          <div className="flex flex-col gap-9 mb-32 items-center justify-center">
            <Heading level={1} className="z-10 text-center">
              Build Seamlessly
            </Heading>
            <p className="text-lg font-robotoMono font-light z-10 text-center max-w-5xl leading-loose">
              Develop your dApp with delightful data infrastructure
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
          </div>

          <img
            src="/new/assets/home/dataverse.webp"
            alt="hero"
            className="absolute bg-cover bottom-0 w-full h-48 lg:h-64"
          />
        </div>
      </header>

      {/* <p className="block lg:hidden text-lg font-robotoMono font-light z-10 text-center max-w-5xl leading-loose py-10">
        Bundlr is a decentralized data network to help developers solve
        complex data integrity issues. Our performant, scalable, seamless
        storage, proof of provenance, and data availability guarantees
        allows you establish a trustless data foundation.
      </p> */}

      <Benefits {...BENEFITS_CONTENT} />

      {/* <section className="flex flex-col lg:block gap-20 lg:gap-0 h-auto lg:h-[489px] text-black px-5 lg:px-[79px] bg-seashell pt-20 lg:pt-32">
        <div className="flex flex-col items-start">
          <div className="text-9xl">&gt;90%</div>
          <p className="font-robotoMono text-lg">
            Bundlr processes over 90% of transactions on Arweave
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-9xl">&lt;8ms</div>
          <p className="font-robotoMono text-lg">
            Data is uploaded to Bundlr in less than 8 milliseconds
          </p>
        </div>
      </section> */}



      <section className="px-5 lg:px-[79px] bg-seashell lg:pt-16 pb-20 flex justify-between items-center gap-24 flex-col lg:flex-row pt-20">
        <div className='flex flex-col items-center justify-center lg:items-start'>
          <SectionTitle title="How Bundlr Works" />
          <div className="flex flex-col gap-10 font-robotoMono max-w-[600px] ml-l lg:ml-24 pt-16 text-center lg:text-left">
            <p className="leading-loose">
              Bundlr uses binary encoding methods to compact multiple Layer 2
              transactions into a Layer 1 transaction know as a bundle. Like
              Ethereum rollups, Bundles reduce block usage.
            </p>
            <p className="leading-loose">
              {' '}
              As bundle sizes increase, Bundlr permits transactions per second
              to scale horizontally and linearly, which means that Bunldr can
              easily scale to millions of transactions per second.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-center">
          <div className="text-9xl">&gt;90%</div>
          <p className="font-robotoMono text-lg text-center">
            Bundlr processes over 90% <br />of transactions on Arweave
          </p>
        </div>
        {/* <div className="hidden lg:block">
          <img src="/new/assets/home/cloud.webp" alt="" width={689} />
        </div> */}
      </section>

      <section className="bg-seashell pt-20 pb-20 lg:pb-32">
        <div className="mx-5 lg:mx-[79px] rounded-[20px] overflow-hidden bg-black z-10">
          <HomeTrustedBy scheme="dark" />
        </div>
      </section>

      <section className='bg-black text-white flex gap-20 items-start relative h-auto md:flex-row px-4 lg:px-[79px] pt-20 min-h-[990px] overflow-hidden'>
        <div className="hidden md:inline-block absolute top-32 left-0">
          <h2 className="transform -rotate-90 text-[26px] uppercase w-[300px]">
            BUILD ON BUNDLR
          </h2>
        </div>
        <img src="/new/assets/home/data-donuts.webp" alt="" className='w-[320px] md:w-[450px] lg:w-[640px] absolute -left-40 -bottom-40' />
        <div className="ml-auto w-full md:w-2/3">
          <ExpandableSection />
        </div>
      </section>
      <section className="px-5 lg:px-[79px] bg-seashell pt-16 flex justify-between gap-24 items-center">
        <div className='flex items-center justify-center flex-col lg:items-start'>
          <SectionTitle title="Why on Arweave?" />
          <div className="flex flex-col gap-10 font-robotoMono max-w-[600px] ml-0 lg:ml-24 pt-16 text-center lg:text-left">
            <p className="leading-loose">
              <a href="https://arweave.org" target={'_blank'} rel="noreferrer">
                Arweave
              </a>{' '}
              makes it possible to store data permanently for the first time
              ever. This is fundamental to solving the data integrity challenges
              we face today.{' '}
            </p>
            <p className="leading-loose">
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

      <div className="-mt-10">
        <CtaCentralized {...CTA_CONTENT} />
      </div>

      <Footer />
    </div>
  )
}

export default Developers
