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
      title: 'Orb',
      icon: '/assets/home/users/orb.jpg',
      invert: true
    },
    {
      title: 'Sound XYZ',
      icon: '/assets/home/users/sound.svg',
      invert: true
    },
    {
      title: 'Metaplex',
      icon: '/assets/home/users/metaplex.svg',
      invert: true
    },
    {
      title: 'Glass XYZ',
      icon: '/assets/home/users/glass.png'
    },
    {
      title: 'Backpack',
      icon: '/assets/home/users/backpack.svg',
      invert: true
    },
    {
      title: 'Exchange',
      icon: '/assets/home/users/exchange.svg',
      invert: true
    },
    {
      title: 'Beem XYZ',
      icon: '/assets/home/users/beem.svg',
      invert: true
    },
    {
      title: 'Orb',
      icon: '/assets/home/users/orb.jpg',
      invert: true
    },
    {
      title: 'Alex',
      icon: '/assets/home/users/alex.svg',
      invert: true
    },
    {
      title: 'Lens',
      icon: '/assets/home/users/lens.png',
      invert: false,
      whiteinvert: true
    },
    {
      title: 'Wordcel',
      icon: '/assets/home/users/wordcel.svg',
      invert: false,
      whiteinvert: true
    },
    {
      title: 'CryptoUnicorns',
      icon: '/assets/home/users/unicorns.png',
      invert: true
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
          speed={10}
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
              <div
                key={index}
                className={`flex flex-col items-center rounded-xl p-4 ${index === 0 && 'ml-[40px]'
                  } ${scheme === 'dark' ? 'bg-white' : 'bg-black'}`}
              >
                <img
                  src={user.icon}
                  alt={user.title}
                  width={103}
                  // (scheme === 'light' && user.whiteinvert) ? 'whiteinvert' : '')
                  className={`
                    ${(scheme === 'dark') && user.invert && 'invert'}
                    ${(!scheme || scheme === 'light') && user.whiteinvert && 'invert'}
                    `}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </>
  )
}

export default HomeTrustedBy
