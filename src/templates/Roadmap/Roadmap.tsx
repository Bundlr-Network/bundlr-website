import { Footer, NavbarDesktop } from '@/components'
import { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useRoadmap = () => {

  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description',
  }

  return { PAGE_SEO }
}

const Roadmap: NextPage = () => {
  const { PAGE_SEO } = useRoadmap()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      {/* <div ref={scrollRef} style={{ overflow: "auto" }} className="h-96 w-[4000px] bg-black border-red-100">
        <h2>The Roadmap</h2>
        <p></p>
      </div> */}
      WIP.
      <Footer />
    </>
  )
}

export default Roadmap
