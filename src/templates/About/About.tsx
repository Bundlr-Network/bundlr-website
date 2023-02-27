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
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import OpenseaLogo from '@assets/about/investors/opensea.webp'
import PermanentVenturesLogo from '@assets/about/investors/permanent.webp'
import RaceCapitalLogo from '@assets/about/investors/racecapital.webp'

export const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}

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
      mobileImage: '/assets/about/heads/mobile/Josh.jpeg',
      link: 'https://twitter.com/josh_benaron'
    },
    {
      name: 'Amélia',
      role: 'COO',
      image: '/assets/about/heads/Amelia.jpeg',
      mobileImage: '/assets/about/heads/mobile/Amelia.jpeg',
      link: 'https://twitter.com/amelia_guertin'
    },
    {
      name: 'Pranit',
      role: 'Head of Marketing',
      image: '/assets/about/heads/Pranit.jpeg',
      mobileImage: '/assets/about/heads/mobile/Pranit.jpeg',
      link: 'https://twitter.com/PranitGarg'
    },
    {
      name: 'Jesse',
      role: 'Lead Engineer',
      image: '/assets/about/heads/Jesse.jpeg',
      mobileImage: '/assets/about/heads/mobile/Jesse.jpeg',
      link: 'https://twitter.com/JesseCruzWright'
    },
    {
      name: 'Miko',
      role: 'Engineer',
      image: '/assets/about/heads/Miko.jpeg',
      mobileImage: '/assets/about/heads/mobile/Miko.jpeg',
      link: 'https://mobile.twitter.com/miko_nieminen'
    },
    {
      name: 'Gus',
      role: 'Engineer',
      image: '/assets/about/heads/Gus.jpeg',
      mobileImage: '/assets/about/heads/mobile/Gus.jpeg'
    },
    {
      name: 'William',
      role: 'Lead Front-end Engineer',
      image: '/assets/about/heads/Will.jpeg',
      mobileImage: '/assets/about/heads/mobile/Will.jpeg',
      link: 'https://twitter.com/ih0ltz'
    },
    {
      name: 'Rez',
      role: 'Community Moderator',
      image: '/assets/about/heads/Rez.jpeg',
      mobileImage: '/assets/about/heads/mobile/Rez.jpeg',
      link: 'https://twitter.com/Rez_aahmadi'
    },
    {
      name: 'Luke',
      role: 'Developer Relations',
      image: '/assets/about/heads/Luke.jpeg',
      mobileImage: '/assets/about/heads/mobile/Luke.jpeg',
      link: 'https://twitter.com/spaceagente'
    }
    // {
    //   name: 'Kevin',
    //   role: 'Engineer',
    //   image: '/assets/about/heads/Kevin.jpeg',
    //   mobileImage: '/assets/about/heads/mobile/Kevin.jpeg',
    // }
  ]

  const INVESTORS = [
    {
      name: 'Arweave',
      logo: ArweaveLogo,
      logoHref: '/assets/about/investors/arweave.svg',
      link: 'https://www.arweave.org/'
    },
    {
      name: 'Framework',
      logo: FrameworkLogo,
      logoHref: '/assets/about/investors/framework.svg',
      link: 'https://framework.ventures/'
    },
    {
      name: 'Hypersphere',
      logo: HypersphereLogo,
      logoHref: '/assets/about/investors/hypersphere.svg',
      link: 'https://hypersphere.capital/'
    },
    {
      name: 'Permanent Ventures',
      logo: PermanentVenturesLogo,
      logoHref: '/assets/about/investors/permanent.webp',
      link: 'https://tqjushdada2qw2abowhuntnplwacih4pa4nb6mitibg2i645xkvq.arweave.net/nBNJHGAYNQtoAXWPRs2vXYAkH48HGh8xE0BNpHuduqs'
    },
    {
      name: 'Race Capital',
      logo: RaceCapitalLogo,
      logoHref: '/assets/about/investors/racecapital.webp',
      link: 'https://race.capital'
    },
    {
      name: 'OpenSea',
      logo: OpenseaLogo,
      logoHref: '/assets/about/investors/opensea-logo.png',
      link: 'https://opensea.io/'
    }
  ]

  return { PAGE_SEO, MEMBERS, INVESTORS }
}

const About: NextPage = () => {
  const { PAGE_SEO, MEMBERS, INVESTORS } = useAbout()
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className="overflow-hidden">
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />

      <header className="relative mb-10 overflow-hidden px-5 pt-20 pb-52 lg:h-[794px] lg:border-none lg:px-[79px] lg:pt-0 lg:pb-0">
        <div className="mb-10 flex max-w-[742px] flex-col gap-[32px] pt-10 leading-none md:mb-20 md:pt-0 lg:pt-[83px]">
          <Heading level={1} className="z-10">
            Meet the World&apos;s Data Layer
          </Heading>
        </div>
        <img
          src="/new/assets/home/data-exponential.webp"
          alt=""
          className="absolute bottom-20 right-0 md:bottom-10 lg:bottom-36"
        />
      </header>

      <section className="relative -z-20 flex items-center justify-center bg-seashell px-5 lg:justify-between lg:px-[79px]">
        <div className="flex flex-col items-center justify-center lg:items-start">
          <SectionTitle title="What is Bundlr?" />
          <div className="ml-0 flex max-w-[600px] flex-col gap-10 pt-16 font-robotoMono lg:ml-24">
            <p className="z-10 text-center leading-loose lg:text-left">
              Bundlr is developing a decentralized data network to help
              developers solve complex data integrity issues.{' '}
            </p>
            <p className="z-10 text-center leading-loose lg:text-left">
              We provide solutions for storage, provenance, and data
              availability that help you establish a trustless data foundation.{' '}
            </p>
            <p className="z-10 text-center leading-loose lg:text-left">
              Our vision is to be data’s trustless source of truth.
            </p>
          </div>
        </div>
        <img
          src="/new/assets/home/data-cluster-rotated.webp"
          alt=""
          className="absolute -z-10 -mb-4 hidden w-[800px] -scale-y-100 lg:-right-96 lg:block xl:-right-56"
        />
      </section>

      <div className="py-16 lg:py-28">
        <SpotifySection />
      </div>

      <section className="flex flex-col justify-start gap-10 px-5 lg:flex-row lg:gap-0 lg:px-[79px]">
        <p className="text-center font-fkDisplay text-5xl lg:text-left">
          Our
          <br />
          Team
        </p>
        {/* 3 column grid  */}
        <ul className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 lg:ml-auto lg:w-4/5">
          {MEMBERS.map((item, index) => {
            return (
              <li
                key={index}
                className="rounded-lg bg-gradient-to-b from-[#968982] to-transparent p-[1px]"
              >
                {/* add gradient background that goes from gray to transparent */}
                <a href={item?.link} target="_blank" rel="noreferrer">
                  <div className="flex w-full flex-col gap-8 overflow-hidden rounded-lg bg-seashell transition-all hover:shadow-md">
                    {/* make image as background of rectangle box */}
                    <div
                      className="hover:bg-zoom h-[348px] w-full overflow-hidden bg-cover  bg-center"
                      style={{
                        backgroundImage: `url(${
                          isMobile ? item.mobileImage : item.image
                        })`
                      }}
                    />
                    <div className="flex flex-col gap-4 px-5 pb-10">
                      <h3 className="font-robotoMono text-sm font-light uppercase text-black">
                        {item.name}
                      </h3>
                      <p className="font-robotoMono text-sm font-light text-black">
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

      <section className="mx-2 -mb-40 mt-10 flex flex-col gap-20 rounded-[30px] bg-white p-14 pb-52 lg:mx-[59px]">
        <Heading level={2} className="text-center lg:text-left">
          Backed by Visionaries
        </Heading>

        <div className="flex flex-wrap items-center justify-center gap-10 xl:justify-between">
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
          <div className="flex flex-col items-center justify-center gap-10 md:items-center lg:items-start lg:gap-0">
            <Heading level={2} className="text-center lg:text-left">
              Ready to Become a BUNDLOOOOR?
            </Heading>
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
    </div>
  )
}

export default About
