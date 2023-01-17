import { useEffect, useState } from 'react'

import SectionTitle from '../SectionTitle'

const useHomeProduct = () => {

  const CONTENT = [
    {
      title: "Permanent Storage",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit donec neque velit enim non.",
    },
    {
      title: "Fiat <br/>On-Ramp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit donec neque velit enim non.",
    },
    {
      title: "Preweave <br/><br/>",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit donec neque velit enim non.",
    },
    {
      title: "Mutability Layer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit donec neque velit enim non."
    }
  ]

  return { CONTENT }
}

const HomeProduct = () => {
  const { CONTENT } = useHomeProduct()

  return (
    <>
      <section className='bg-black px-[109px] pb-[120px]'>
        <div className='text-white pt-[117px]'>
          <SectionTitle title='The product' />
        </div>
        {/* 4 column grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[182px]'>
          {/* 1st column title, text, and find out more button */}
          {
            CONTENT.map((content, index) => {
              return (
                <div key={`content-${index}`} className='flex flex-col gap-4 text-white items-start max-w-[275px]'>
                  <h3 className='text-[46px] leading-none' dangerouslySetInnerHTML={{
                    __html: content.title
                  }}></h3>
                  <p className='text-lg mt-auto font-robotoMono font-normal'>{content.description}</p>
                  <button className='text-white font-robotoMono text-base mt-auto'>[ Find out more ]</button>
                </div>
              )
            })
          }
        </div>
        <div className="h-[271px] text-white border border-white mt-[192px]">Supported currencies</div>
      </section>
    </>
  )
}

export default HomeProduct
