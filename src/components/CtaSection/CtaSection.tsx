import { DevIcon } from '@/svg'

const CtaSection = ({ children }: {
  children: React.ReactNode
}) => {

  return (
    <>
      <section className='mx-[109px] my-[88px]'>
        <div className="bg-black rounded-[30px] overflow-hidden flex items-center h-[473px]">
          <div
            className="w-1/2 h-full bg-no-repeat"
            style={{ backgroundImage: "url('/assets/home/cta-blocks.png')", backgroundSize: '100% 100%' }}
          ></div>
          <div className="w-1/2 text-white ml-4">
            {children}
          </div>
        </div>
      </section>
    </>
  )
}

export default CtaSection
