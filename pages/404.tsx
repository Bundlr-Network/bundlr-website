import { Button, Footer, Heading, NavbarDesktop } from '@/components'

import Link from 'next/link'
import { NextSeo } from 'next-seo'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  const PAGE_SEO = {
    title: 'Bundlr | Page Not Found',
    description: 'The page you are looking for does not exist.'
  }

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <div className="relative flex h-[400px] flex-col items-start justify-center gap-10 overflow-hidden px-5 lg:px-[79px]">
        <Heading level={1}>Page Not Found</Heading>
        <Link href={'/'}>
          <Button className="self-start">Return to home</Button>
        </Link>
        <img
          src="/new/assets/home/data-storm.webp"
          className="absolute -bottom-60 hidden w-[600px] -rotate-180 -scale-y-100 transform sm:-bottom-[400px] lg:top-[0px] lg:-right-[270px] lg:flex xl:-right-10"
          alt="cloud"
        />
      </div>
      <Footer />
    </>
  )
}

export default NotFound
