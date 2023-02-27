import {
  ChevronRight,
  MetaplexIcon,
  MetaplexVerticalIcon,
  SolseaIcon
} from '@/svg'
import { useEffect, useState } from 'react'

const useTestimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const TESTIMONIALS_CONTENT = [
    {
      title: 'Metaplex',
      description:
        '“Bundlr has become a mainstay of Metaplex’s NFT toolkit and makes it much easier to store metadata on Arweave. The ability to pay for NFT storage in native SOL is a killer feature, as is the lightening fast upload capability.”',
      image: '/assets/home/metaplex.png',
      imageAlt: 'Metaplex',
      invert: false,
      author: 'James Strawthorne',
      authorRole: 'CTO at Metaplex'
    },
    {
      title: 'Solsea',
      description:
        '“Bundlr helped us streamline NFT’s minting with their super fast infrastructure and also very robust and easy to use JS client. By adding option to pay for storage in SOL, we love it even more.“',
      image: '/assets/home/solsea.svg',
      imageAlt: 'Solsea',
      invert: true,
      author: 'Vitomir Jevremovic',
      authorRole: 'Founder at Solsea'
    }
  ]

  return { TESTIMONIALS_CONTENT, currentTestimonial, setCurrentTestimonial }
}

const Testimonial = () => {
  const { TESTIMONIALS_CONTENT, currentTestimonial, setCurrentTestimonial } =
    useTestimonial()

  return (
    <>
      <section className="order-solid relative mt-20 flex flex-col gap-10 overflow-clip rounded-[30px] border border-[rgba(216,_207,_202,_1.00)] bg-[rgba(251,242,237,1)] p-4 text-black lg:mt-[99px] lg:flex-row lg:gap-10 lg:py-[43px] lg:px-[40px]">
        <div className="flex h-[210px] items-center justify-center bg-white text-black lg:h-auto lg:w-[488px]">
          <img
            src={TESTIMONIALS_CONTENT[currentTestimonial].image}
            alt={TESTIMONIALS_CONTENT[currentTestimonial].imageAlt}
            className={
              TESTIMONIALS_CONTENT[currentTestimonial].invert ? 'invert' : ''
            }
          />
        </div>
        <div className="flex w-full flex-col ">
          <div className="h-auto w-full lg:mt-[27px]">
            <p className="h-[280px] text-lg font-light leading-loose md:h-[140px] lg:h-[330px] lg:text-3xl xl:h-[220px]">
              {TESTIMONIALS_CONTENT[currentTestimonial].description}
            </p>
          </div>
          <div className="flex flex-col">
            <div className="mt-auto">
              <p className="text-[13px] uppercase leading-[1.66] tracking-[2.72px]">
                {TESTIMONIALS_CONTENT[currentTestimonial].author}
              </p>
              <p className="text-[13px] uppercase leading-[1.66] tracking-[2.72px]">
                {TESTIMONIALS_CONTENT[currentTestimonial].authorRole}
              </p>
            </div>
            <button
              className="mt-6 flex items-center justify-center gap-2 rounded-full border border-black px-3 py-2 font-robotoMono uppercase"
              onClick={() => {
                if (currentTestimonial === TESTIMONIALS_CONTENT.length - 1) {
                  setCurrentTestimonial(0)
                } else {
                  setCurrentTestimonial(currentTestimonial + 1)
                }
              }}
            >
              Next <ChevronRight className="w-2" />
            </button>
          </div>
        </div>
        {/* [rotate:75deg] [transform:scaleY(-1)] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/435c219a33e92fdee4f17ecfdcf30e59551b33f6.webp)_center_/_cover] origin-top-left absolute w-[1141px] h-[642px] left-[1108px] top-[-549.84px] */}
        {/* <img src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/435c219a33e92fdee4f17ecfdcf30e59551b33f6.webp" alt="" srcSet="" className='absolute right-0 top-0 [rotate:75deg]' /> */}
      </section>
    </>
  )
}

export default Testimonial
