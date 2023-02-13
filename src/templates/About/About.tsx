import { Button, CtaSection, Footer, NavbarDesktop, SectionTitle, SpotifySection } from '@/components'
import { useEffect, useState } from 'react'

import { ButtonScheme } from '@/components/Button/Button'
import { DevIcon } from '@/svg'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useAbout = () => {

  const PAGE_SEO = {
    title: 'Bundlr | About',
    description: 'Learn about Bundlr’s vision and technology. Discover how our innovative solutions are revolutionizing data.',
  }

  const MEMBERS = [
    {
      name:
        'Josh Benaron',
      role: 'FOUNDER & CEO',
      image: '/assets/about/heads/Josh.jpeg'
    },
    {
      name:
        'Amélia Guertin',
      role: 'COO',
      image: '/assets/about/heads/Amelia.jpeg'
    },
    {
      name:
        'Pranit Garg',
      role: 'Head of Marketing',
      image: '/assets/about/heads/Pranit.jpeg'
    },
    {
      name:
        'Jesse Wright',
      role: 'Lead Engineer',
      image: '/assets/about/heads/Jesse.jpeg'
    },
    {
      name:
        'Miko Nieminen',
      role: 'System Architect',
      image: '/assets/about/heads/Miko.jpeg'
    },
    {
      name:
        'Gustavo',
      role: 'Engineer',
      image: '/assets/about/heads/Gus.jpeg'
    },
    {
      name:
        'William G',
      role: 'Lead Front-end Engineer',
      image: '/assets/about/heads/Will.jpeg'
    },
    {
      name:
        'Rez',
      role: 'Community Moderator',
      image: '/assets/about/heads/Rez.jpeg'
    },
    {
      name:
        'Luke Cassady',
      role: 'Dev Rel',
      image: '/assets/about/heads/Luke.jpeg'
    },
    {
      name:
        'Kevin German',
      role: 'Engineer',
      image: '/assets/about/heads/Kevin.jpeg'
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
        className="px-5 lg:px-[109px] relative overflow-hidden"
        style={{
          height: '894px'
        }}
      >
        <div className="flex flex-col gap-[32px] max-w-[742px] leading-none pt-[83px] mb-10">
          <h1 className="text-[76px]">
            Meet the World&apos;s Next Data Layer
          </h1>
        </div>
        <img src="/assets/about/header.png" alt="" className='absolute bottom-36 right-0' />
      </header>

      <section className="px-5 lg:px-[109px] items-center bg-seashell flex justify-between relative">
        <div>
          <SectionTitle title="What is Bundlr?" />
          <div className="flex flex-col gap-10 font-robotoMono max-w-[600px] ml-24 pt-16">
            <p className="z-10">
              Bundlr is developing a decentralized data network to help developers solve complex data integrity issues. {' '}
            </p>
            <p className="z-10">
              We provide solutions for storage, provenance, and data availability that help you establish a trustless data foundation.{' '}
            </p>
            <p className='z-10'>Our vision is to be data’s trustless source of truth.</p>
          </div>

        </div>
        <img src="/assets/about/section.png" alt="" className='absolute right-0 hidden lg:block' />
      </section>

      <div className="py-28">
        <SpotifySection />
      </div>

      <section className='flex flex-col lg:flex-row px-5 lg:px-[109px] justify-start gap-10 lg:gap-0'>
        <p className='text-5xl font-fkDisplay text-center lg:text-left'>Our<br />Team</p>
        {/* 3 column grid  */}
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:ml-auto w-full lg:w-4/5">
          {MEMBERS.map((item, index) => {
            return (

              <li key={index} className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg">
                {/* add gradient background that goes from gray to transparent */}

                <div className="hover:shadow-md transition-all flex flex-col gap-8 w-full bg-seashell rounded-lg overflow-hidden">
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
        <div className="flex flex-col items-start md:items-center lg:items-start justify-center gap-10 lg:gap-0">
          <p className="text-4xl md:text-5xl text-left md:text-center lg:text-[62px] lg:text-start font-light leading-none -mt-20 lg:mt-0">
            Ready to Become a BUNDLOOOOR?
          </p>
          <div className="mt-0 lg:mt-10">
            <a href="https://docs.bundlr.network/" target={"_blank"} rel="noreferrer">
              <Button scheme={ButtonScheme.white}>
                START BUILDING
                <DevIcon color="black" />
              </Button>
            </a>
          </div>
        </div>
      </CtaSection>
      <Footer />
    </>
  )
}

export default About
