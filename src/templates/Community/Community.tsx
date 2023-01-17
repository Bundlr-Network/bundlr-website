import {
  Button,
  Footer,
  HomeHeader,
  HomeWhyUseBundlr,
  NavbarDesktop
} from '@/components'
import {
  DiscordIcon,
  GitIcon,
  MediumIcon,
  MirrorIcon,
  TelegramIcon,
  TwitterIcon
} from '@/svg'
import { useEffect, useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

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

  return { PAGE_SEO, COMMUNITY_VALUES }
}

const CTA: React.FC = () => {
  return (
    <div className="h-[740px] relative bg-seashell text-white py-4 px-6 rounded-lg flex flex-col items-center justify-center">
      <h2 className="text-black font-light mb-2 text-[76px] max-w-[399px] text-center leading-none mb-11">
        Join the community
      </h2>
      <Button />

      <div className="hidden lg:flex absolute top-0 right-0 overflow-hidden transform rotate-180">
        <img
          src="/assets/community/cta-blocks-2.png"
          className="w-full h-full rounded-lg"
          alt="image1"
        />
      </div>
      <div className="hidden lg:flex absolute top-0 left-0 overflow-hidden">
        <img
          src="/assets/community/cta-blocks-2.png"
          className="w-full h-full rounded-lg"
          alt="image2"
        />
      </div>
    </div>
  )
}

const Socials: React.FC = () => {
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

  return (
    // grid 3 columns
    <ul className="grid grid-cols-3 gap-11">
      {SOCIAL_LINKS.map((link, index) => {
        const Icon = link.icon
        return (
          <a href={link.href} target="_blank" rel="noreferrer" key={index}>
            <li
              className="text-white font-light flex items-center justify-center gap-4 bg-smoky rounded-3xl py-11 text-4xl"
              style={{
                boxShadow: '1px 1px 0px rgba(255, 255, 255, .5)'
              }}
            >
              <Icon />
              {link.name}
            </li>
          </a>
        )
      })}
    </ul>
  )
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

  return (
    <section>
      <h2 className='text-7xl font-light pb-[60px]'>News</h2>

      <ul className="flex gap-7">
        {NEWS_ITEMS.map((item, index) => {
          return (

            <li key={index} className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg">
              {/* add gradient background that goes from gray to transparent */}

              <div className="flex flex-col items-center gap-11 max-w-[348px] bg-seashell rounded-lg overflow-hidden">
                {/* make image as background of rectangle box */}
                <div
                  className="w-full h-[200px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`
                  }}
                />
                <div className="flex flex-col gap-4 px-5 pb-10">
                  <h3 className="text-black font-light text-2xl ">
                    {item.title}
                  </h3>
                  <p className="text-black font-light text-sm font-robotoMono">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

const Community: NextPage = () => {
  const { PAGE_SEO, COMMUNITY_VALUES } = useCommunity()

  return (
    <>
      <div className="bg-black">
        <NextSeo {...PAGE_SEO} />
        <div className="text-white">
          <NavbarDesktop scheme="onyx" />
        </div>
        <header
          className="px-[109px] border-b border-timberwolf bg-black pt-[183px]"
          style={{
            backgroundImage: 'url(/assets/home/blocks.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: '140%',
            height: '1070px'
          }}
        >
          <div className="leading-none flex flex-col gap-[197px]">
            <h1 className="max-w-[464px] font-light text-[76px] text-white">
              Join the #bundloooor community
            </h1>
            <Socials />
          </div>
        </header>

        <section className="bg-seashell text-black">
          <HomeWhyUseBundlr content={COMMUNITY_VALUES} />
        </section>

        <section className='px-[109px] bg-seashell flex items-center justify-center'>
          <NewsSection />
        </section>

        <CTA />
        <Footer />
      </div>
    </>
  )
}

export default Community
