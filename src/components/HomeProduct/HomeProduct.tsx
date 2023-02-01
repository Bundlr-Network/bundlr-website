import { useEffect, useState } from 'react'

import SectionTitle from '../SectionTitle'

const HomeProduct = ({
  content,
  title,
  children
}: {
  content: {
    title: string
    description: string
  }[]
  title: string
  children?: React.ReactNode
}) => {

  return (
    <>
      <section className="bg-black px-[109px] pb-[120px]">
        <div className="text-white pt-[117px]">
          <SectionTitle title={title} />
        </div>
        {/* 4 column grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${content.length} gap-4 mt-[182px]`}>
          {/* 1st column title, text, and find out more button */}
          {content.map((content, index) => {
            return (
              <div
                key={`content-${index}`}
                className="flex flex-col gap-4 text-white items-start max-w-[275px]"
              >
                <h3
                  className="text-[46px] leading-none"
                  dangerouslySetInnerHTML={{
                    __html: content.title
                  }}
                ></h3>
                <p className="text-lg mt-auto font-robotoMono font-normal">
                  {content.description}
                </p>
                <button className="text-white font-robotoMono text-base mt-auto">
                  [ Find out more ]
                </button>
              </div>
            )
          })}
        </div>
        {children}
      </section>
    </>
  )
}

export default HomeProduct
