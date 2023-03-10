import Button from '../Button';
import { DevIcon } from '@/svg';
import Heading from '../Heading';
import Paragraph from '../Paragraph';

const HomeHeader = () => {
  return (
    <>
      <header
        className="relative overflow-hidden border-b border-timberwolf px-5 pb-20 lg:px-[79px]"
      // style={{
      //   backgroundImage: 'url()',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: '20% -10%',
      //   backgroundSize: '120%',
      //   height: '894px'
      // }}
      >
        <img
          src="/new/assets/home/header.webp"
          alt=""
          className="lg:-right-18 xl:-right-18 absolute top-80 rotate-[-20.24deg] scale-150 md:top-28 lg:top-36 xl:top-10 2xl:right-0 2xl:max-w-[1600px]"
        />

        <div className="flex max-w-[742px] flex-col gap-[32px] pt-[83px] leading-none">
          <Heading level={1} className="z-10">
            THE <br className="md:hidden" />
            WORLD’S <br />
            DATA
            <br className="md:hidden" /> LAYER
          </Heading>
          {/* <h1 className="text-5xl lg:text-7xl font-fkDisplay z-10">
            {TITLE}
          </h1> */}
          <Paragraph size="sm" className="z-50">
            Store your data on a
            <br /> trustless source of truth
          </Paragraph>
        </div>
        <div className="mt-56 flex items-center gap-[21px] font-robotoMono lg:mt-[320px]">
          <a href="https://docs.bundlr.network" className="z-50">
            <Button>
              START BUILDING
              <DevIcon />
            </Button>
          </a>
          <a
            href="https://arweave.org/"
            target={'_blank'}
            rel="noreferrer"
            className="z-10 -ml-14 rounded-tr-full rounded-br-full bg-white px-4 py-3 pl-10 uppercase text-black lg:px-6 lg:py-5 lg:pl-14"
          >
            Permanent on Arweave
          </a>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
