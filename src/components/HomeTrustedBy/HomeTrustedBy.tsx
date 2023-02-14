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

import Marquee from 'react-fast-marquee'

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

  const USERS = [
    {
      title: 'Sound XYZ',
      icon: '/assets/home/users/sound.svg',
      invert: false,
      whiteinvert: true,
      link: 'https://sound.xyz'
    },
    {
      title: 'Metaplex',
      icon: '/assets/home/users/metaplex.svg',
      invert: false,
      whiteinvert: true,
      link: 'https://metaplex.com'
    },
    {
      title: 'Glass XYZ',
      icon: '/assets/home/users/glass.png',
      link: 'https://glass.xyz',
    },
    {
      title: 'Backpack',
      icon: '/assets/home/users/backpack.svg',
      invert: false,
      whiteinvert: true,
      link: '#'
    },
    {
      title: 'Exchange',
      icon: '/assets/home/users/exchange.svg',
      invert: false,
      whiteinvert: true,
      link: '#'
    },
    {
      title: 'Beem XYZ',
      icon: '/assets/home/users/beem.svg',
      invert: false,
      whiteinvert: true,
      link: 'https://beem.xyz'
    },
    {
      title: 'Orb',
      icon: '/assets/home/users/orb.jpg',
      invert: false,
      whiteinvert: true,
      link: 'https://orb.ac'
    },
    {
      title: 'Alex',
      icon: '/assets/home/users/alex.svg',
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
      icon: '/assets/home/users/wordcel.svg',
      invert: true,
      whiteinvert: false,
      link: 'https://wordcelclub.com'
    },
    {
      title: 'CryptoUnicorns',
      icon: '/assets/home/users/unicorns.png',
      invert: false,
      whiteinvert: true,
      link: 'https://cryptounicorns.fun'
    }
  ]

  return (
    <>
      <section
        className={`pt-[40px] pb-[64px] flex flex-col items-center justify-center text-center ${{
          dark: 'bg-black text-white',
          light: 'bg-white text-black'
        }[scheme || 'light']
          }`}
      >
        <h3 className="font-robotoMono pb-[46px]">{customTitle || TITLE}</h3>
        {/* <Marquee gradientColor={[238, 240, 246]} speed={50}> */}
        <Marquee
          gradientColor={scheme === 'dark' ? [0, 0, 0] : [255, 255, 255]}
          speed={50}
        >
          <div className="flex items-center gap-20">
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

                  className={`flex flex-col items-center rounded-xl p-4 ${index === 0 && 'ml-[40px]'
                    }`}
                >
                  <img
                    src={user.icon}
                    alt={user.title}
                    // width={103}
                    // (scheme === 'light' && user.whiteinvert) ? 'whiteinvert' : '')
                    className={`
                      h-12
                      ${(scheme === 'dark') && user.invert && 'invert'}
                      ${(!scheme || scheme === 'light') && user.whiteinvert && 'invert'}
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
