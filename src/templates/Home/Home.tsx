import {
  Button,
  CtaSection,
  Footer,
  HomeCloudImage,
  HomeHeader,
  HomeProduct,
  HomeTrustedBy,
  HomeWhyUseBundlr,
  NavbarDesktop,
  SectionTitle,
  Testimonial
} from '@/components'

import { DevIcon } from '@/svg'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { url } from 'inspector'

const useHome = () => {
  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
  }

  const WHY_USE_BUNDLR = [
    {
      title: 'Multichain Compatible',
      description: 'Upload your data from any major blockchain'
    },

    {
      title: 'Pay With Any Token',
      description: 'Pay in any major token including ETH, SOL, MATIC, and more'
    },

    {
      title: 'Pay Once. Stored Forever.',
      description:
        'Pay just once when you have your data stored forever on Arweave'
    },

    {
      title: 'Own Your Data',
      description:
        'With no singular entity holding your data, you’re always in control'
    },

    {
      title: 'Unlimited Storage',
      description:
        'Thanks to Arweave, you’ll never be restricted by data limits ever again'
    },

    {
      title: 'Guaranteed Seeding',
      description: 'Your data is guaranteed to be uploaded to Arweave'
    },

    {
      title: 'Instant Data',
      description:
        'From the moment you upload, your data is instantly accessible'
    },

    {
      title: 'Free Transactions',
      description: 'Free for data uploads under 100kb'
    }
  ]

  return { PAGE_SEO, WHY_USE_BUNDLR }
}

const Home: NextPage = () => {
  const { PAGE_SEO, WHY_USE_BUNDLR } = useHome()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <HomeHeader />
      {/* <HomeStats /> */}

      <HomeProduct />

      <section className='bg-ghostWhite pb-[144px]'>
        <HomeWhyUseBundlr content={WHY_USE_BUNDLR}>
          <div className="mx-44 rounded-[20px] overflow-hidden">
            <HomeTrustedBy />
          </div>
        </HomeWhyUseBundlr>
      </section>
      <HomeCloudImage />

      <section className='px-[109px] mt-[122px]'>
        <SectionTitle title='Testimonials' />
        <div className="flex mt-[89px] justify-center relative">
          <h2 className='text-[76px] font-light max-w-[407px] leading-none'>Endorsed by the best</h2>
          <p className='absolute bottom-0 right-0 font-robotoMono w-[321px]'>Our clients love us, but don’t just take our word for it. </p>
        </div>
        <Testimonial />
      </section>
      <CtaSection>
        <p className="text-[62px] font-light leading-none">
          We’re here to revolutionize data storage. Try us.
        </p>
        <button className='mt-[52px] font-robotoMono text-sm bg-white text-black flex items-center gap-2 px-4 py-3 rounded-full hover:font-bold'>
          START BUILDING
          <DevIcon color='black' />
        </button>
      </CtaSection>
      <Footer />
    </>
  )
}

export default Home
