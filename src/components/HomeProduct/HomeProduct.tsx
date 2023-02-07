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
    href: string
  }[]
  title: string
  children?: React.ReactNode
}) => {
  return (
    <>
      <section className="bg-black px-5 lg:px-[109px] pb-[120px]">
        <div className="text-white pt-[117px]">
          <SectionTitle title={title} />
        </div>
        <div style={{
        }} className={`grid gap-20 lg:gap-4 mt-16 lg:mt-[122px] grid-cols-1 ${{
          2: 'lg:grid-cols-2',
          3: 'lg:grid-cols-3',
          4: 'lg:grid-cols-4'
        }[
          content.length
        ]}`} >
          {/* 1st column title, text, and find out more button */}
          {content.map((info, index) => {
            return (
              <div
                key={`info-${index}`}
                className="flex flex-col gap-4 text-white items-start max-w-[275px]"
              >
                <h3
                  className="text-[46px] leading-none font-fkDisplay"
                  dangerouslySetInnerHTML={{
                    __html: info.title
                  }}
                ></h3>
                <p className="text-lg mt-auto font-robotoMono font-normal">
                  {info.description}
                </p>
                <a href={info.href} className="text-white font-robotoMono text-base mt-auto hover:font-bold">
                  [ Find out more ]
                </a>
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
