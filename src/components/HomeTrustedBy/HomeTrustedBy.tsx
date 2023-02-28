// import {
//   AptosIcon,
//   AvalancheIcon,
//   BobaIcon,
//   KyveIcon,
//   MetaplexIcon,
//   MintbaseIcon,
//   PolygonIcon,
//   SolseaIcon
// } from '@/svg'

import {
  AptosIcon,
  BobaIcon,
  KyveIcon,
  MintbaseIcon,
  PolygonIcon,
  SolseaIcon
} from '@/svg'

import AlexLogo from '@assets/home/users/alex.svg'
import BackpackLogo from '@assets/home/users/backpack.svg'
import BeemLogo from '@assets/home/users/beem.svg'
import CryptoUnicornsLogo from '@assets/home/users/unicorns.png'
import ExchangeLogo from '@assets/home/users/exchange.svg'
import GlassLogo from '@assets/home/users/glass.png'
import Image from 'next/image'
import KyveLogo from '@assets/home/users/kyve.svg'
import Marquee from 'react-fast-marquee'
import MetaplexLogo from '@assets/home/users/metaplex.svg'
import OrbLogo from '@assets/solutions/logos/orb.webp'
import SolanaMobileLogo from '@assets/home/users/sol-mobile.png'
import SoundLogo from '@assets/home/users/sound.svg'
import WordCelLogo from '@assets/home/users/wordcel.svg'

const useHomeTrustedBy = () => {
  const TITLE = 'TRUSTED BY LEADING WEB3 PROJECTS'
  return { TITLE }
}

const HomeTrustedBy = ({
  customTitle,
  scheme
}: {
  customTitle?: string
  scheme?: 'light' | 'dark'
}) => {
  const { TITLE } = useHomeTrustedBy()

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const USERS = [
    {
      title: 'Sound XYZ',
      icon: SoundLogo,
      invert: false,
      whiteinvert: true,
      link: 'https://sound.xyz'
    },
    {
      title: 'Metaplex',
      icon: MetaplexLogo,
      invert: false,
      whiteinvert: true,
      link: 'https://metaplex.com'
    },
    {
      title: 'Solana mobile',
      icon: SolanaMobileLogo,
      invert: false,
      whiteinvert: true,
      link: 'https://solanamobile.com/'
    },
    {
      title: 'Glass XYZ',
      icon: GlassLogo,
      link: 'https://glass.xyz'
    },
    {
      title: 'Backpack',
      icon: BackpackLogo,
      invert: false,
      whiteinvert: true,
      link: 'https://www.backpack.app/'
    },
    {
      title: 'KYVE',
      icon: KyveLogo,
      invert: true,
      whiteinvert: false,
      link: 'https://www.kyve.network/'
    },
    {
      title: 'Exchange',
      icon: ExchangeLogo,
      invert: false,
      whiteinvert: true,
      link: 'https://exchange.art/'
    },
    {
      title: 'Beem XYZ',
      icon: BeemLogo,
      invert: false,
      whiteinvert: true,
      link: 'https://beem.xyz'
    },
    {
      title: 'Orb',
      icon: OrbLogo,
      invert: false,
      whiteinvert: true,
      link: 'https://orb.ac'
    },
    {
      title: 'Alex',
      icon: AlexLogo,
      invert: false,
      whiteinvert: true,
      link: 'https://alex.arweave.dev/'
    },
    // {
    //   title: 'Lens',
    //   icon: '/assets/home/users/lens.png',
    //   invert: false,
    //   whiteinvert: true
    // },
    {
      title: 'Wordcel',
      icon: WordCelLogo,
      invert: true,
      whiteinvert: false,
      link: 'https://wordcelclub.com'
    },
    {
      title: 'CryptoUnicorns',
      icon: CryptoUnicornsLogo,
      invert: false,
      whiteinvert: true,
      link: 'https://cryptounicorns.fun'
    }
  ]

  return (
    <>
      <section
        className={`flex flex-col items-center justify-center pt-[40px] pb-[64px] text-center ${{
            dark: 'bg-black text-white',
            light: 'bg-white text-black'
          }[scheme || 'light']
          }`}
      >
        <h3 className="pb-[46px] font-robotoMono">{customTitle || TITLE}</h3>
        {/* <Marquee gradientColor={[238, 240, 246]} speed={50}> */}
        <Marquee
          gradientColor={scheme === 'dark' ? [0, 0, 0] : [255, 255, 255]}
          speed={isMobile ? 90 : 50}
        >
          <div className="flex items-center gap-10 lg:gap-20">
            {[
              ...USERS,
              ...USERS,
              ...USERS,
              ...USERS,
              ...USERS,
              ...USERS,
              ...USERS
            ].map((user, index) => (
              <a href={user.link} target="_blank" key={index} rel="noreferrer">
                <div
                  className={`relative flex h-14 w-[140px] flex-col items-center rounded-xl p-4 ${index === 0 && 'ml-[40px]'
                    }`}
                >
                  <Image
                    src={user.icon}
                    alt={user.title}
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="contain"
                    className={`
                    ${scheme === 'dark' && user.invert && 'invert'}
                    ${(!scheme || scheme === 'light') &&
                      user.whiteinvert &&
                      'invert'
                      }
                    `}
                  />
                </div>
              </a>
            ))}
          </div>
        </Marquee>
      </section>
    </>
  )
}

export default HomeTrustedBy
