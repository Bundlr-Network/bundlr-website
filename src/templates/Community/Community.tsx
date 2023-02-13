import {
  Button,
  CtaCentralized,
  Footer,
  HomeHeader,
  HomeWhyUseBundlr,
  NavbarDesktop
} from '@/components'
import {
  ChevronRight,
  DevIcon,
  DiscordIcon,
  GitIcon,
  MediumIcon,
  MirrorIcon,
  TelegramIcon,
  TwitterIcon
} from '@/svg'
import {
  SOCIAL_LINKS,
  Socials
} from '@/components/JoinTheCommunity/JoinTheCommunity'
import { useEffect, useState } from 'react'

import { CtaCentralizedProps } from '@/components/CtaCentralized/CtaCentralized'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'
import { useLatestArticles } from '../Blog/Blog'

const useCommunity = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Community',
    description: 'Join a growing community of Bundloooors! Engage with users, devs, and an entire community of people at the frontier of data.'
  }

  const COMMUNITY_VALUES = [
    {
      title: 'Value one',
      description: 'Lorem ipsum dolor sit amitis et'
    },
    {
      title: 'Value two',
      description: 'Lorem ipsum dolor sit amitis et'
    },
    {
      title: 'Value three',
      description: 'Lorem ipsum dolor sit amitis et'
    }
  ]

  const SOCIAL_LINKS = [
    {
      name: 'Discord',
      icon: DiscordIcon,
      href: 'https://discord.com'
    },
    {
      name: 'Twitter',
      icon: TwitterIcon,
      href: 'https://twitter.com'
    },
    {
      name: 'Github',
      icon: GitIcon,
      href: 'https://github.com'
    },
    {
      name: 'Medium',
      icon: MediumIcon,
      href: 'https://medium.com'
    },
    {
      name: 'Telegram',
      icon: TelegramIcon,
      href: 'https://telegram.com'
    },
    {
      name: 'Mirror',
      icon: MirrorIcon,
      href: 'https://mirror.xyz'
    }
  ]

  const CTA_CONTENT: CtaCentralizedProps = {
    title: 'Ready to Become <br /> a BUNDLOOOOR?',
    cta: 'Start Building',
    href: 'https://docs.bundlr.network',
    newTab: true
  }


  return { PAGE_SEO, COMMUNITY_VALUES, CTA_CONTENT }
}

const NewsSection: React.FC = () => {

  const { latestArticles } = useLatestArticles()

  // const [currentSlice, setCurrentSlice] = useState(3)

  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-7xl font-light pb-[60px]">News</h2>
        {/* <button
          onClick={() => setCurrentSlice(currentSlice + 3)}
          className="flex items-center gap-3 border rounded-full font-robotoMono px-3 py-2 border-black self-start"
        >
          More
          <ChevronRight width={13} height={13} />
        </button> */}
      </div>

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {latestArticles.map((item, index) => {
          return (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg w-full"
              key={`blog-post-${index}`}
            >
              <li className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg">
                {/* add gradient background that goes from gray to transparent */}

                <div className="flex flex-col items-center gap-11 w-full lg:max-w-[348px] bg-seashell rounded-lg overflow-hidden">
                  {/* make image as background of rectangle box */}
                  <div
                    className="w-full h-[200px] bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.thumbnail})`
                    }}
                  />
                  <div className="flex flex-col gap-4 px-5 pb-10 -mt-6">
                    <h3 className="text-black font-light text-xl line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </li>
            </a>
          )
        })}
      </ul>
    </section>
  )
}

const Community: NextPage = () => {
  const { PAGE_SEO, COMMUNITY_VALUES, CTA_CONTENT } = useCommunity()

  return (
    <>
      <div className="bg-black">
        <NextSeo {...PAGE_SEO} />
        <div className="text-white">
          <NavbarDesktop scheme={SchemeColor.onyx} />
        </div>
        <header
          className="px-5 lg:px-[109px] border-b border-timberwolf pt-[93px] h-auto pb-40 relative overflow-hidden"
        // style={{
        //   backgroundImage: 'url(/assets/home/header.png)',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: '50% 140%',
        //   backgroundSize: '100%'
        // }}
        >
          <div className="leading-none flex flex-col gap-10 lg:gap-[197px] ">
            <h1 className="font-light text-5xl lg:text-7xl text-white z-[99]">
              Join the #bundloooor <br />
              community
            </h1>
            <Socials links={SOCIAL_LINKS} />
          </div>
          <img src="/assets/home/header.png" alt="hero" className="absolute top-96 lg:top-0 lg:bottom-0" />
        </header>

        {/* <section className="bg-seashell text-black">
          <HomeWhyUseBundlr content={COMMUNITY_VALUES} />
        </section> */}

        <section className="px-5 lg:px-[109px] bg-seashell flex items-center justify-center pt-20">
          <NewsSection />
        </section>

        <CtaCentralized {...CTA_CONTENT} />
        <Footer />
      </div>
    </>
  )
}

export default Community
