import { MetaplexIcon, SolseaIcon } from '@/svg'
import { useEffect, useState } from 'react'

const useTestimonial = () => {
  return {}
}

const Testimonial = () => {
  const { } = useTestimonial()

  return (
    <>
      <section className='flex relative order-solid border text-black bg-[rgba(251,242,237,1)] border-[rgba(216,_207,_202,_1.00)] overflow-clip rounded-[30px] py-[43px] px-[40px] gap-[147px] mt-[99px]'>
        <div className='bg-white text-black w-[388px] h-[377px] flex items-center justify-center'>
          <SolseaIcon />
        </div>
        <div className=" h-[204px] w-[647px] mt-[27px]">
          <p className='text-3xl leading-tight font-light'>“Bundlr has become a mainstay of Metaplex’s NFT toolkit and makes it much easier to store metadata on Arweave. The ability to pay for NFT storage in native SOL is a killer feature, as is the lightening fast upload capability.”</p>
          <div className="mt-[43px]">
            <p className='uppercase text-[13px] tracking-[2.72px] leading-[1.66]'>James Strawthorne</p>
            <p className='uppercase text-[13px] tracking-[2.72px] leading-[1.66]'>CTO at Metaplex</p>
          </div>
        </div>
        <div>
          <div
            className="[rotate:75deg] [transform:scaleY(-1)] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/435c219a33e92fdee4f17ecfdcf30e59551b33f6.webp)_center_/_cover] origin-top-left absolute w-[1141px] h-[642px] left-[1108px] top-[-549.84px]"
          />
        </div>
      </section>

    </>
  )
}

export default Testimonial
