import {
  DiscordIcon,
  FooterLogo,
  GitIcon,
  MediumIcon,
  MirrorIcon,
  TelegramIcon,
  TwitterIcon
} from '@/svg'
import { useEffect, useState } from 'react'
const useFooterDesktop = () => {
  const DEFINITIONS = [
    {
      title: 'BUNDLR',
      options: [
        {
          name: 'About',
          href: '/learn/about'
        },
        {
          name: 'Join our team',
          href: '/learn/join-our-team',
          label: 'Hiring'
        },
        {
          name: 'FAQs',
          href: '/learn/faqs'
        },
        {
          name: 'Media Kit',
          href: '/media-kit'
        },
        {
          name: 'Roadmap',
          href: '/roadmap'
        }
      ],
      footer: (
        <p className="text-base mt-auto pb-[10px] whitespace-nowrap">
          Community
        </p>
      )
    },
    {
      title: 'DEVELOPERS',
      options: [
        {
          name: 'Get Started',
          href: '/learn/get-started'
        },
        {
          name: 'Docs',
          href: '/learn/docs'
        },
        {
          name: 'Resources',
          href: '/learn/resources'
        },
        {
          name: 'Tutorials',
          href: '/learn/tutorials'
        },
        {
          name: 'JS Client',
          href: '/learn/js-client'
        }
      ],
      footer: (
        <p className="text-base mt-auto pb-[10px] whitespace-nowrap">
          Partner program
        </p>
      )
    },
    {
      title: 'PARTICIPATE',
      options: [
        {
          name: 'Testnet Faucet',
          href: '/testnet-faucet'
        },
        {
          name: 'Run a Validator',
          href: '/learn/run-a-validator'
        }
      ],
      footer: (
        <div className="flex items-center gap-[21px] mt-auto pb-[10px]">
          <a
            href="https://medium.com/bundlr-network"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="hover:rotate-6 hover:scale-105 transition-all"
          >
            <MediumIcon />
          </a>
          <a
            href="https://mirror.xyz/0x9AbB09BF9F58E72A532E859d798eB4E8e10A35e1"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="hover:rotate-6 hover:scale-105 transition-all"
          >
            <MirrorIcon className="w-6 h-6 text-black" />
          </a>
          <a
            href="https://twitter.com/BundlrNetwork"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="hover:rotate-6 hover:scale-105 transition-all"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://discord.gg/bundlr"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="hover:rotate-6 hover:scale-105 transition-all"
          >
            <DiscordIcon />
          </a>
          <a
            href="https://github.com/Bundlr-Network"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="hover:rotate-6 hover:scale-105 transition-all"
          >
            <GitIcon />
          </a>
          <a
            href="https://t.me/bundlr"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="hover:rotate-6 hover:scale-105 transition-all"
          >
            <TelegramIcon />
          </a>
        </div>
      )
    }
  ]

  return { DEFINITIONS }
}

const FooterDesktop = () => {
  const { DEFINITIONS } = useFooterDesktop()

  return (
    <>
      <footer className="hidden lg:flex items-center bg-seashell antialiased border-t border-timberwolf font-robotoMono px-[50px] pb-[25px]">
        <section className="flex flex-col max-w-[513px] leading-none pt-[73px] w-auto">
          <FooterLogo />
          <p className="mt-[230px] text-[62px] tracking-tighter whitespace-normal">
            THE FUTURE OF DATA STORAGE
          </p>
          <p className="mt-[47px]">2022 Bundlr. All rights reserved.</p>
        </section>
        <section className="flex gap-20 h-[568px] ml-auto min-w-[272px]">
          {DEFINITIONS.map((definition) => {
            return (
              <div
                key={definition.title}
                className="flex flex-col mb-auto border-l border-timberwolf h-full pt-[76px] pl-[30px]"
              >
                <p className="text-[13px] font-bold">{definition.title}</p>
                <ul className="mt-[50px] flex flex-col gap-[10px]">
                  {definition.options.map((option) => {
                    return (
                      <li key={option.name}>
                        <a
                          href={option.href}
                          className="text-base whitespace-nowrap"
                        >
                          {option.name}
                          {option.label && (
                            <span className="ml-[10px] text-xs font-bold bg-black rounded-full px-[10px] py-[5px] text-white">
                              {option.label}
                            </span>
                          )}
                        </a>
                      </li>
                    )
                  })}
                </ul>
                {definition.footer}
              </div>
            )
          })}
        </section>

        <section className="border-l border-timberwolf"></section>
      </footer>
    </>
  )
}

export default FooterDesktop
