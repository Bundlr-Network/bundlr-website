import {
  AptosIcon,
  AvalancheIcon,
  BobaIcon,
  KyveIcon,
  MetaplexIcon,
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
          speed={55}
        >
          <div className="flex gap-20 items-center">
            <div className="ml-20">
              <AptosIcon />
            </div>
            <PolygonIcon />
            <AvalancheIcon />
            <BobaIcon />
            <KyveIcon />
            {/* <MetaplexIcon /> */}
            <MintbaseIcon />
            <SolseaIcon />
          </div>
        </Marquee>
      </section>
    </>
  )
}

export default HomeTrustedBy
