import {
  Button,
  CtaCentralized,
  Footer,
  HomeHeader,
  HomeWhyUseBundlr,
  NavbarDesktop
} from '@/components'
import {
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
    title: 'Page Title',
    description: 'Page Description'
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
  const NEWS_ITEMS = [
    {
      title:
        'Wordcel integrates with Bundlr to permanently store it’s users data',
      description: 'Lorem ipsum dolor sit amet.',
      image: 'https://picsum.photos/400'
    },
    {
      title:
        'Wordcel integrates with Bundlr to permanently store it’s users data',
      description: 'Lorem ipsum dolor sit amet.',
      image: 'https://picsum.photos/400'
    },
    {
      title:
        'Wordcel integrates with Bundlr to permanently store it’s users data',
      description: 'Lorem ipsum dolor sit amet.',
      image: 'https://picsum.photos/400'
    },
    {
      title:
        'Wordcel integrates with Bundlr to permanently store it’s users data',
      description: 'Lorem ipsum dolor sit amet.',
      image: 'https://picsum.photos/400'
    }
  ]

  const { latestArticles } = useLatestArticles()

  return (
    <section>
      <h2 className="text-7xl font-light pb-[60px]">News</h2>

      <ul className="grid grid-cols-4 gap-10">
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

                <div className="flex flex-col items-center gap-11 max-w-[348px] bg-seashell rounded-lg overflow-hidden">
                  {/* make image as background of rectangle box */}
                  <div
                    className="w-full h-[200px] bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.thumbnail})`
                    }}
                  />
                  <div className="flex flex-col gap-4 px-5 pb-10">
                    <h3 className="text-black font-light text-2xl line-clamp-2">
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
          className="px-5 lg:px-[109px] border-b border-timberwolf bg-black pt-[113px] h-auto pb-40"
          style={{
            backgroundImage: 'url(/assets/home/header.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: '100%'
          }}
        >
          <div className="leading-none flex flex-col gap-[197px]">
            <h1 className="font-light text-6xl lg:text-7xl text-white">
              Join the #bundloooor <br />
              community
            </h1>
            <Socials links={SOCIAL_LINKS} />
          </div>
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
