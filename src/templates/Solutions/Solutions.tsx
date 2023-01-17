import { Button, CtaSection, Footer, NavbarDesktop } from '@/components'
import { useEffect, useState } from 'react'

import { DevIcon } from '@/svg'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useSolutions = () => {

  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description',
  }

  return { PAGE_SEO }
}

const Solutions: NextPage = () => {
  const { PAGE_SEO } = useSolutions()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <section className='flex flex-col items-center justify-center gap-8 pt-28'>
        <h1 className='text-7xl font-spaceGrotesk font-light'>Technology</h1>
        <p className='font-robotoMono max-w-[830px] text-center'>Bundlr is the world’s next data layer. It provides true provenance with data availability guarantees backed by permanent, decentralized storage.</p>
        <Button />
      </section>
      <CtaSection>
        <p className="text-[62px] font-light leading-none">
          Ready to Become a BUNDLOOOR?
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

export default Solutions
