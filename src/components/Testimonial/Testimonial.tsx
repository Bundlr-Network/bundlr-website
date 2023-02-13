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
        '“Bundlr helped us streamline NFT’s minting with their super fast infrastructure and also very robust and easy to use JS client. By adding option to pay for storage in Sol, we love it even more.“',
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
      <section className="flex flex-col lg:flex-row relative order-solid border text-black bg-[rgba(251,242,237,1)] border-[rgba(216,_207,_202,_1.00)] overflow-clip rounded-[30px] p-4 lg:py-[43px] lg:px-[40px] gap-10 lg:gap-10 mt-20 lg:mt-[99px]">
        <div className="bg-white text-black lg:w-[488px] h-[210px] lg:h-auto flex items-center justify-center">
          <img
            src={TESTIMONIALS_CONTENT[currentTestimonial].image}
            alt={TESTIMONIALS_CONTENT[currentTestimonial].imageAlt}
            className={
              TESTIMONIALS_CONTENT[currentTestimonial].invert ? 'invert' : ''
            }
          />
        </div>
        <div className="flex flex-col w-full h-auto">
          <div className="h-auto w-full lg:mt-[27px]">
            <p className="text-xl lg:text-3xl leading-tight font-light leading-relaxed">
              {TESTIMONIALS_CONTENT[currentTestimonial].description}
            </p>
          </div>
          <div className="pt-[43px] flex justify-between">
            <div className="">
              <p className="uppercase text-[13px] tracking-[2.72px] leading-[1.66]">
                {TESTIMONIALS_CONTENT[currentTestimonial].author}
              </p>
              <p className="uppercase text-[13px] tracking-[2.72px] leading-[1.66]">
                {TESTIMONIALS_CONTENT[currentTestimonial].authorRole}
              </p>
            </div>
            <button
              className="flex items-center justify-center gap-2 border rounded-full px-3 py-2 border-black uppercase font-robotoMono"
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
