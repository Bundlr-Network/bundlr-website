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
  return <>
    <section className="flex flex-col items-center md:items-center lg:items-start justify-center bg-black px-5 lg:px-[79px] pb-10 lg:pb-[120px]">
      <div className="text-white pt-20 lg:pt-[117px]">
        <SectionTitle title={title} />
      </div>
      <div
        style={{}}
        className={`flex flex-col md:flex-row gap-20 lg:gap-0 items-center md:justify-evenly w-full mt-16 lg:mt-28`}
      >
        {/* 1st column title, text, and find out more button */}
        {content.map((info, index) => {
          return (
            <div
              key={`info-${index}`}
              className={`flex flex-col gap-4 text-white items-start max-w-[275px] ${content.length === 1 ? 'flex-row items-center max-w-full' : ''
                }`}
            >
              {/* <h3
                className="text-3xl lg:text-5xl leading-none font-fkDisplay"
                dangerouslySetInnerHTML={{
                  __html: info.title
                }}
              ></h3> */}
              <Heading level={3} className="text-white" dangerouslySetInnerHTML={{
                __html: info.title
              }}></Heading>
              <p className={`text-lg mt-auto font-robotoMono font-normal leading-loose ${content.length === 1 ? 'text-center' : ''
                }`}>
                {info.description}
              </p>
              <a
                href={info.href}
                className="text-white font-robotoMono text-base mt-auto hover:font-bold whitespace-nowrap uppercase tracking-widest"
              >
                [ Find out more ]
              </a>
            </div>
          );
        })}
      </div>
      <div className="self-start w-full">{children}</div>
      {!children && <div className="h-10" />}
    </section>
  </>;
}

export default HomeProduct
