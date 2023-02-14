import {
  DiscordIcon,
  FooterLogo,
  GitIcon,
  MediumIcon,
  MinusFooterDetailIcon,
  MirrorIcon,
  PlusFooterDetailIcon,
  TelegramIcon,
  TwitterIcon
} from '@/svg'
import { useEffect, useState } from 'react'

import Link from 'next/link'

const FooterMobile = ({
  data
}: {
  data: {
    title: string
    options: {
      name: string
      href: string
      label?: string
    }[]
  }[]
}) => {
  return (
    <>
      <footer className="border-t border-timberwolf pt-[56px] px-[20px] font-robotoMono lg:hidden bg-seashell pb-10">
        <FooterLogo />
        <p className="mt-[60px] text-[40px] tracking-tighter whitespace-normal leading-none mb-[68px]">
          THE WORLD&apos;S <br />
          NEXT DATA LAYER
        </p>
        {data.map((definition) => (
          <ExpandableSection
            title={definition.title}
            options={definition.options}
            key={definition.title}
          />
        ))}
        <a href="">
          <p className="uppercase text-[15px] mt-[26px]">Community</p>
        </a>
        <a href="">
          <p className="uppercase text-[15px] mt-[26px]">Partner Program</p>
        </a>
        <section className="flex items-center gap-[21px] pb-[10px] mt-[60px]">
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
        </section>
        <p className="mt-[17px] mb-[36px]">
          {new Date().getFullYear()} Bundlr. All rights reserved.
        </p>
      </footer>
    </>
  )
}

const ExpandableSection = ({
  title,
  options
}: {
  title: string
  options: {
    name: string
    href: string
    label?: string
    newTab?: boolean
  }[]
}) => {
  return (
    <details>
      <summary className="text-[15px] font-medium mt-[26px] flex justify-between items-center cursor-pointer">
        {title}
        <PlusFooterDetailIcon />
        <MinusFooterDetailIcon />
      </summary>
      <ul className="mt-[20px]">
        {options.map((option, index) => (
          <li className="mt-[20px]" key={`option-${option}-${index}`}>
            <Link
              href={option.href}
              className="text-[15px]"
              target={option.newTab ? '_blank' : '_self'}
              rel="noreferrer"
            >
              {option.name}
            </Link>
            {option.label && (
              <span className="ml-[10px] text-xs font-bold bg-black rounded-full px-[10px] py-[5px] text-white">
                {option.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </details>
  )
}

export default FooterMobile
