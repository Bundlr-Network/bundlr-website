import { Button, CtaSection, Footer, NavbarDesktop, SectionTitle, SpotifySection } from '@/components'
import { useEffect, useState } from 'react'

import { DevIcon } from '@/svg'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useAbout = () => {

  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description',
  }

  const MEMBERS = [
    {
      name:
        'Josh Benaron',
      role: 'FOUNDER & CEO',
      image: '/assets/about/josh.png'
    },
    {
      name:
        'Josh Benaron',
      role: 'FOUNDER & CEO',
      image: '/assets/about/josh.png'
    },
    {
      name:
        'Josh Benaron',
      role: 'FOUNDER & CEO',
      image: '/assets/about/josh.png'
    },
    {
      name:
        'Josh Benaron',
      role: 'FOUNDER & CEO',
      image: '/assets/about/josh.png'
    },
    {
      name:
        'Josh Benaron',
      role: 'FOUNDER & CEO',
      image: '/assets/about/josh.png'
    },
    {
      name:
        'Josh Benaron',
      role: 'FOUNDER & CEO',
      image: '/assets/about/josh.png'
    },
  ]

  return { PAGE_SEO, MEMBERS }
}

const About: NextPage = () => {
  const { PAGE_SEO, MEMBERS } = useAbout()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />

      <header
        className="px-5 lg:px-[109px]"
        style={{
          backgroundImage: 'url(/assets/about/header.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: '100%',
          height: '894px'
        }}
      >
        <div className="flex flex-col gap-[32px] max-w-[742px] leading-none pt-[83px] mb-10">
          <h1 className="text-[76px]">
            Meet the World&apos;s Next Data Layer
          </h1>
        </div>
      </header>

      <section className="px-5 lg:px-[109px] relative bg-seashell pt-16 flex justify-between">
        <div>
          <SectionTitle title="What is Bundlr?" />
          <div className="flex flex-col gap-10 font-robotoMono max-w-[600px] ml-24 pt-16">
            <p className="">
              Bundlr is developing a decentralized data network to help developers solve complex data integrity issues. {' '}
            </p>
            <p className="">
              We provide solutions for storage, provenance, and data availability that help you establish a trustless data foundation.{' '}
            </p>
            <p>Our vision is to be data’s trustless source of truth.</p>
          </div>

        </div>
      </section>

      <div className="py-28">
        <SpotifySection />
      </div>

      <section className='flex flex-col lg:flex-row px-5 lg:px-[109px] justify-start gap-10 lg:gap-0'>
        <p className='text-5xl font-fkDisplay text-center lg:text-left'>Our<br />Team</p>
        {/* 3 column grid  */}
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:ml-auto">
          {MEMBERS.map((item, index) => {
            return (

              <li key={index} className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg">
                {/* add gradient background that goes from gray to transparent */}

                <div className="hover:shadow-md transition-all flex flex-col gap-8 w-full lg:w-[204px] xl:w-[334px] bg-seashell rounded-lg overflow-hidden">
                  {/* make image as background of rectangle box */}
                  <div
                    className="w-full h-[348px] bg-cover bg-center hover:bg-zoom  overflow-hidden"
                    style={{
                      backgroundImage: `url(${item.image})`
                    }}
                  />
                  <div className="flex flex-col gap-4 px-5 pb-10">
                    <h3 className="text-black font-light text-sm font-robotoMono uppercase">
                      {item.name}
                    </h3>
                    <p className="text-black font-light text-sm font-robotoMono">
                      {item.role}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </section>



      <CtaSection>
        <p className="text-[62px] font-light leading-none">
          Ready to Become a BUNDLOOOOR?
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

export default About
