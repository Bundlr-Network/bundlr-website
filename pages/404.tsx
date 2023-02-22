import { Button, Footer, Heading, NavbarDesktop } from '@/components'

import Link from 'next/link'
import { NextSeo } from 'next-seo'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {

  const PAGE_SEO = {
    title: 'Bundlr | Page not found',
    description:
      'The page you are looking for does not exist.'
  }

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <div className="px-5 lg:px-[79px] overflow-hidden flex items-start justify-center flex-col gap-10 h-[400px] relative">
        <Heading level={1}>Page not found</Heading>
        <Link href={'/'}>
          <Button className='self-start'>Return to home</Button>
        </Link>
        <img
          src="/new/assets/home/data-storm.webp"
          className="absolute hidden lg:flex -bottom-60 sm:-bottom-[400px] lg:top-[0px] lg:-right-[270px] xl:-right-10 w-[600px] transform -rotate-180 -scale-y-100"
          alt="cloud"
        />
      </div>
      <Footer />
    </>
  )
}

export default NotFound
