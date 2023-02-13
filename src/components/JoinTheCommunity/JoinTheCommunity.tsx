import {
  DiscordIcon,
  GitIcon,
  MediumIcon,
  MirrorIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon
} from '@/svg'

export const Socials = ({
  links
}: {
  links: {
    name: string
    href: string
    icon: React.FC
  }[]
}) => (
  <ul className="flex flex-wrap items-center justify-center z-[99] w-full gap-8 xl:gap-11">
    {links.map((link, index) => {
      const Icon = link.icon
      return (
        <a href={link.href} target="_blank" rel="noreferrer" key={index} className="w-full md:w-1/4 xl:w-1/5">
          <li
            className="text-white font-light flex items-center justify-center gap-4 bg-smoky rounded-3xl py-11 text-2xl communityShadow"
          >
            <Icon />
            {link.name}
          </li>
        </a>
      )
    })}
  </ul>
)

export const SOCIAL_LINKS = [
  {
    name: 'Discord',
    icon: DiscordIcon,
    href: 'https://discord.gg/bundlr'
  },
  {
    name: 'Twitter',
    icon: TwitterIcon,
    href: 'https://twitter.com/BundlrNetwork'
  },
  {
    name: 'Github',
    icon: GitIcon,
    href: 'https://github.com/Bundlr-Network'
  },
  {
    name: 'Medium',
    icon: MediumIcon,
    href: 'https://medium.com/bundlr-network'
  },
  {
    name: 'Telegram',
    icon: TelegramIcon,
    href: 'https://t.me/bundlr'
  },
  {
    name: 'Mirror',
    icon: MirrorIcon,
    href: 'https://mirror.xyz/0x9AbB09BF9F58E72A532E859d798eB4E8e10A35e1'
  },
  {
    name: 'Youtube',
    icon: YoutubeIcon,
    href: 'https://www.youtube.com/@bundlr-network'
  }
]

const JoinTheCommunity = () => {
  return (
    <>
      <section className="px-4 md:px-5 lg:px-[79px] bg-seashell py-24">
        <div className="bg-black px-4 lg:px-7 py-20 rounded-3xl">
          <h2 className="text-white hidden md:block text-7xl text-center pb-20 font-fkDisplay font-light">
            Join the Community
          </h2>
          <Socials links={SOCIAL_LINKS} />
        </div>
      </section>
    </>
  )
}

export default JoinTheCommunity
