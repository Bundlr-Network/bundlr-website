import { DevIcon } from '@/svg'

const CtaSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="mx-4 lg:mx-[109px] my-[88px] rounded-[30px] overflow-hidden h-[473px] relative bg-black text-white flex items-center">
        {/* <div
            className="absolute left-0 bottom-0 bg-no-repeat"
            style={{ backgroundImage: "url(')", backgroundSize: '100% 100%' }}
          ></div> */}
        <img src="/assets/home/cta-blocks.png" alt="" className="absolute left-0" />
        <div className="w-1/2 text-white ml-auto mr-10">{children}</div>
      </section>
      {/* <section className='mx-[109px] my-[88px]'>
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
