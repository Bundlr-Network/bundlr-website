import { useEffect, useState } from 'react'

import Heading from '../Heading'
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
      <section className="flex flex-col items-center justify-center bg-black px-5 pb-10 md:items-center lg:items-start lg:px-[79px] lg:pb-[120px]">
        <div className="pt-20 text-white lg:pt-[117px]">
          <SectionTitle title={title} />
        </div>
        <div
          style={{}}
          className={`mt-16 flex w-full flex-col items-center gap-20 md:flex-row md:justify-evenly lg:mt-28 lg:gap-0`}
        >
          {/* 1st column title, text, and find out more button */}
          {content.map((info, index) => {
            return (
              <div
                key={`info-${index}`}
                className={`flex max-w-[275px] flex-col items-start gap-4 text-white ${
                  content.length === 1 ? 'max-w-full flex-row items-center' : ''
                }`}
              >
                {/* <h3
                className="text-3xl lg:text-5xl leading-none font-fkDisplay"
                dangerouslySetInnerHTML={{
                  __html: info.title
                }}
              ></h3> */}
                <Heading
                  level={3}
                  className="text-white"
                  dangerouslySetInnerHTML={{
                    __html: info.title
                  }}
                ></Heading>
                <p
                  className={`mt-auto font-robotoMono text-lg font-normal leading-loose ${
                    content.length === 1 ? 'text-center' : ''
                  }`}
                >
                  {info.description}
                </p>
                <a
                  href={info.href}
                  className="mt-auto whitespace-nowrap font-robotoMono text-base uppercase tracking-widest text-white hover:font-bold hover:font-bold"
                >
                  [ Find out more ]
                </a>
              </div>
            )
          })}
        </div>
        <div className="w-full self-start">{children}</div>
        {!children && <div className="h-10" />}
      </section>
    </>
  )
}

export default HomeProduct
