import { DevIcon } from '@/svg'

const CtaSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="mx-4 lg:mx-[79px] rounded-[30px] overflow-hidden h-[473px] relative bg-black text-white flex items-center">
        {/* <div
            className="absolute left-0 bottom-0 bg-no-repeat"
            style={{ backgroundImage: "url(')", backgroundSize: '100% 100%' }}
          ></div> */}
        {/* <img src="/assets/home/cta-blocks.png" alt="" className="absolute -left-20 hidden xl:block" /> */}
        {/* <img src="/assets/home/cta-blocks-mobile.png" alt="" className="absolute bottom-0 xl:hidden block w-full bg-cover" /> */}
        <img src="/assets/home/cta-block.png" alt="" className="absolute -bottom-[180px] md:-bottom-[580px] lg:bottom-auto lg:-left-[300px] block w-full lg:w-auto bg-cover" />
        <div className="w-full lg:w-1/2 p-4 lg:p-0 text-white ml-auto lg:mr-10 z-10">{children}</div>
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
