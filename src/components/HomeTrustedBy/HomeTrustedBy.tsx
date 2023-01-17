import {
  AptosIcon,
  AvalancheIcon,
  BobaIcon,
  KyveIcon,
  MetaplexIcon,
  MintbaseIcon,
  PolygonIcon,
  SolseaIcon,
} from '@/svg'

import Marquee from 'react-fast-marquee'

const useHomeTrustedBy = () => {
  const TITLE = 'TRUSTED BY LEADING WEB3 PROJECTS'
  return { TITLE }
}

const HomeTrustedBy = ({ customTitle }: {
  customTitle?: string
}) => {
  const { TITLE } = useHomeTrustedBy()

  return (
    <>
      <section className='bg-white pt-[40px] pb-[64px] flex flex-col items-center justify-center text-center'>
        <h3 className='font-robotoMono pb-[46px]'>{customTitle || TITLE}</h3>
        {/* <Marquee gradientColor={[238, 240, 246]} speed={50}> */}
        <Marquee gradientColor={[255, 255, 255]} speed={55}>
          <div className="flex gap-20 items-center text-black">
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
        <Marquee gradientColor={[255, 255, 255]} speed={75} className="mt-10">
          <div className="flex gap-20 items-center text-black">
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
