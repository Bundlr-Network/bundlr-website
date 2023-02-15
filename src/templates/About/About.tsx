import {
  Button,
  CtaSection,
  Footer,
  Heading,
  NavbarDesktop,
  SectionTitle,
  SpotifySection
} from '@/components'
import { useEffect, useState } from 'react'

import ArweaveLogo from '@assets/about/investors/arweave.svg'
import { ButtonScheme } from '@/components/Button/Button'
import { DevIcon } from '@/svg'
import FrameworkLogo from '@assets/about/investors/framework.svg'
import HypersphereLogo from '@assets/about/investors/hypersphere.svg'
import Image from 'next/image'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import OpenseaLogo from '@assets/about/investors/opensea.webp'
import PermanentVenturesLogo from '@assets/about/investors/permanent.webp'
import RaceCapitalLogo from '@assets/about/investors/racecapital.webp'

const useAbout = () => {
  const PAGE_SEO = {
    title: 'Bundlr | About',
    description:
      'Learn about Bundlr’s vision and technology. Discover how our innovative solutions are revolutionizing data.'
  }

  const MEMBERS = [
    {
      name: 'Josh',
      role: 'FOUNDER & CEO',
      image: '/assets/about/heads/Josh.jpeg',
      link: 'https://twitter.com/josh_benaron'
    },
    {
      name: 'Amélia',
      role: 'COO',
      image: '/assets/about/heads/Amelia.jpeg',
      link: 'https://twitter.com/amelia_guertin'
    },
    {
      name: 'Pranit',
      role: 'Head of Marketing',
      image: '/assets/about/heads/Pranit.jpeg',
      link: 'https://twitter.com/PranitGarg'
    },
    {
      name: 'Jesse',
      role: 'Lead Engineer',
      image: '/assets/about/heads/Jesse.jpeg',
      link: 'https://twitter.com/JesseCruzWright'
    },
    {
      name: 'Miko',
      role: 'Engineer',
      image: '/assets/about/heads/Miko.jpeg'
    },
    {
      name: 'Gustavo',
      role: 'Engineer',
      image: '/assets/about/heads/Gus.jpeg'
    },
    {
      name: 'William',
      role: 'Lead Front-end Engineer',
      image: '/assets/about/heads/Will.jpeg'
    },
    {
      name: 'Rez',
      role: 'Community Moderator',
      image: '/assets/about/heads/Rez.jpeg'
    },
    {
      name: 'Luke',
      role: 'Developer Relations',
      image: '/assets/about/heads/Luke.jpeg',
      link: 'https://twitter.com/spaceagente'
    },
    {
      name: 'Kevin',
      role: 'Engineer',
      image: '/assets/about/heads/Kevin.jpeg'
    }
  ]

  const INVESTORS = [
    {
      name: 'Arweave',
      logo: ArweaveLogo,
      logoHref: '/assets/about/investors/arweave.svg',
      link: 'https://www.arweave.org/'
    },
    {
      name: 'Permanent Ventures',
      logo: PermanentVenturesLogo,
      logoHref: '/assets/about/investors/permanent.webp',
      link: 'https://tqjushdada2qw2abowhuntnplwacih4pa4nb6mitibg2i645xkvq.arweave.net/nBNJHGAYNQtoAXWPRs2vXYAkH48HGh8xE0BNpHuduqs'
    },
    {
      name: 'OpenSea',
      logo: OpenseaLogo,
      logoHref: '/assets/about/investors/opensea.webp',
      link: 'https://opensea.io/'
    },
    {
      name: 'Race Capital',
      logo: RaceCapitalLogo,
      logoHref: '/assets/about/investors/racecapital.webp',
      link: 'https://race.capital'
    },
    {
      name: 'Hypersphere',
      logo: HypersphereLogo,
      logoHref: '/assets/about/investors/hypersphere.svg',
      link: 'https://hypersphere.capital/'
    },
    {
      name: 'Framework',
      logo: FrameworkLogo,
      logoHref: '/assets/about/investors/framework.svg',
      link: 'https://framework.ventures/'
    },
  ]

  return { PAGE_SEO, MEMBERS, INVESTORS }
}

const About: NextPage = () => {
  const { PAGE_SEO, MEMBERS, INVESTORS } = useAbout()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />

      <header className="pt-20 pb-52 lg:pt-0 lg:pb-0 lg:h-[794px] px-5 lg:px-[79px] relative overflow-hidden border-b border-2 mb-10 lg:border-none">
        <div className="flex flex-col gap-[32px] max-w-[742px] leading-none pt-10 lg:pt-[83px] mb-10">
          <h1 className="text-5xl lg:text-7xl">
            Meet the World&apos;s Next Data Layer
          </h1>
        </div>
        <img
          src="/new/assets/home/data-exponential.webp"
          alt=""
          className="absolute bottom-36 right-0"
        />
      </header>

      <section className="px-5 lg:px-[79px] items-center bg-seashell flex lg:justify-between relative justify-center">
        <div className="flex flex-col items-center justify-center lg:items-start">
          <SectionTitle title="What is Bundlr?" />
          <div className="flex flex-col gap-10 font-robotoMono max-w-[600px] ml-0 lg:ml-24 pt-16">
            <p className="z-10 text-center lg:text-left">
              Bundlr is developing a decentralized data network to help
              developers solve complex data integrity issues.{' '}
            </p>
            <p className="z-10 text-center lg:text-left">
              We provide solutions for storage, provenance, and data
              availability that help you establish a trustless data foundation.{' '}
            </p>
            <p className="z-10 text-center lg:text-left">
              Our vision is to be data’s trustless source of truth.
            </p>
          </div>
        </div>
        <img
          src="/assets/about/section.png"
          alt=""
          className="absolute right-0 hidden lg:block -mb-4"
        />
      </section>

      <div className="py-16 lg:py-28">
        <SpotifySection />
      </div>

      <section className="flex flex-col lg:flex-row px-5 lg:px-[79px] justify-start gap-10 lg:gap-0">
        <p className="text-5xl font-fkDisplay text-center lg:text-left">
          Our
          <br />
          Team
        </p>
        {/* 3 column grid  */}
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:ml-auto w-full lg:w-4/5">
          {MEMBERS.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg"
              >
                {/* add gradient background that goes from gray to transparent */}
                <a href={item?.link} target="_blank" rel="noreferrer">
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
                </a>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="bg-white mx-2 lg:mx-[59px] p-14 flex flex-col gap-20 rounded-[30px] pb-52 -mb-40 mt-10">
        <Heading level={2} className="text-center lg:text-left">
          Backed by Visionaries
        </Heading>

        <div className="flex items-center xl:justify-between flex-wrap justify-center gap-10">
          {INVESTORS.map((item, index) => {
            return (
              <a href={item.link} target="_blank" rel="noreferrer" key={index}>
                <img src={item.logoHref} className="h-7" />
              </a>
            )
          })}
        </div>
      </section>

      <div className="py-10">
        <CtaSection>
          <div className="flex flex-col items-center md:items-center lg:items-start justify-center gap-10 lg:gap-0">
            <p className="text-4xl md:text-5xl text-center lg:text-[62px] lg:text-start font-light leading-none -mt-20 lg:mt-0">
              Ready to Become a BUNDLOOOOR?
            </p>
            <div className="mt-0 lg:mt-10">
              <a
                href="https://docs.bundlr.network/"
                target={'_blank'}
                rel="noreferrer"
              >
                <Button scheme={ButtonScheme.white}>
                  START BUILDING
                  <DevIcon color="black" />
                </Button>
              </a>
            </div>
          </div>
        </CtaSection>
      </div>
      <Footer />
    </>
  )
}

export default About
