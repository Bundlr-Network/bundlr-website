import {
  DiscordIcon,
  GitIcon,
  MediumIcon,
  MirrorIcon,
  TelegramIcon,
  TwitterIcon
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
  <ul className="grid grid-cols-1 md:grid-cols-3 gap-11">
    {links.map((link, index) => {
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

const useJoinTheCommunity = () => {
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

  return { SOCIAL_LINKS }
}

const JoinTheCommunity = () => {
  const { SOCIAL_LINKS } = useJoinTheCommunity()

  return (
    <>
      <section className="px-4 md:px-[109px] bg-seashell py-24">
        <div className="bg-black px-14 py-20 rounded-3xl">
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
