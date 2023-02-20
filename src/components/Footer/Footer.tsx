import { DiscordIcon, GitIcon, MediumIcon, MirrorIcon, TelegramIcon, TwitterIcon } from "@/svg"

import FooterDesktop from "../FooterDesktop"
import FooterMobile from "../FooterMobile"

const Footer = () => {

  const DEFINITIONS = [
    {
      title: 'LEARN',
      options: [
        {
          name: 'About',
          href: '/learn/about'
        },
        {
          name: 'Join Our Team',
          href: 'https://bundlrnetwork.notion.site/Bundlr-Careers-ee5a8841bc1e4728ba1dc66a9ee8ec2c',
          label: 'Hiring',
          newTab: true
        },
        {
          name: 'FAQs',
          href: '/faq'
        },
        {
          name: 'Media Kit',
          href: '/media-kit'
        },
        {
          name: 'Roadmap',
          href: '/roadmap'
        }
      ]
    },
    {
      title: 'DEVELOPERS',
      options: [
        {
          name: 'Get Started',
          href: 'https://docs.bundlr.network/sdk/basic-features/',
          newTab: true

        },
        {
          name: 'Docs',
          href: 'https://docs.bundlr.network/',
          newTab: true

        },
        {
          name: 'Tutorials',
          href: 'https://docs.bundlr.network/tutorials/bundlr-nodejs',
          newTab: true

        },
        {
          name: 'JS SDK',
          href: 'https://docs.bundlr.network/category/basic-features',
          newTab: true

        }
      ]
    },
    {
      title: 'PARTICIPATE',
      options: [
        {
          name: 'Community',
          href: '/community'
        },
        {
          name: 'Partner Program',
          href: '/partner-program'
        }
      ],
      footer: (
        <div className="flex items-center gap-[21px] mt-auto pb-[40px]">
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
            <img src="/assets/home/mirror.svg" alt="mirror" className="w-6 h-6" />
            {/* <MirrorIcon className="w-6 h-6 text-black" /> */}
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

  return (
    <>
      <FooterMobile data={DEFINITIONS} />
      <FooterDesktop data={DEFINITIONS} />
    </>
  )
}

export default Footer
