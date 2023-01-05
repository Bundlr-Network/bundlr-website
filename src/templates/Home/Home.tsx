import { Footer, HomeHeader, HomeTrustedBy, HomeWhyUseBundlr, NavbarDesktop } from '@/components';

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useHome = () => {
  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
  }

  return { PAGE_SEO }
}

const Home: NextPage = () => {
  const { PAGE_SEO } = useHome()


  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <HomeHeader />
      {/* <HomeStats /> */}
      <HomeWhyUseBundlr />
      <HomeTrustedBy />

      <Footer />
    </>
  )
}

export default Home
