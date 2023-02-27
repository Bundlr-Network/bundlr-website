import { DevIcon } from '@/svg'

const CtaSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="relative mx-4 flex h-[473px] items-center overflow-hidden rounded-[30px] bg-black text-white lg:mx-[79px]">
        {/* <div
            className="absolute left-0 bottom-0 bg-no-repeat"
            style={{ backgroundImage: "url(')", backgroundSize: '100% 100%' }}
          ></div> */}
        {/* <img src="/assets/home/cta-blocks.png" alt="" className="absolute -left-20 hidden xl:block" /> */}
        {/* <img src="/assets/home/cta-blocks-mobile.png" alt="" className="absolute bottom-0 xl:hidden block w-full bg-cover" /> */}
        <img
          src="/new/assets/home/data-sphere.webp"
          alt=""
          className="absolute -bottom-[350px] block w-[600px] md:-bottom-[520px] md:-left-[420px] md:w-[800px] lg:bottom-auto xl:-left-[350px]"
        />
        <div className="z-10 ml-auto w-full p-4 text-white lg:mr-10 lg:w-1/2 lg:p-0">
          {children}
        </div>
      </section>
      {/* <section className='mx-[79px] my-[88px]'>
        <div className="bg-black rounded-[30px] overflow-hidden flex items-center h-[473px]">
          <div
            className="w-1/2 h-full bg-no-repeat"
            style={{ backgroundImage: "url('/assets/home/cta-blocks.png')", backgroundSize: '100% 100%' }}
          ></div>
          <div className="w-1/2 text-white ml-4">
            {children}
          </div>
        </div>
      </section> */}
    </>
  )
}

export default CtaSection
