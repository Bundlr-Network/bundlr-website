import {
  Button,
  CtaSection,
  Footer,
  HomeTrustedBy,
  NavbarDesktop,
  SectionTitle
} from '@/components'
import { useEffect, useState } from 'react'

import { DevIcon } from '@/svg'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useSolutions = () => {
  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
  }

  const SECTION_DATA = [
    {
      title: 'Decentralized Social Media',
      description:
        'Prior to Bundlr, decentralized social media networks have  not had the infrastructure that allows the transactional throughout needed for mass adoption. With Bundlr’s Optimisitc Data Availability, social media dApps have access to performant and affordable infrastructure that delivers a seamless user experience, regardless of traffic volume.',
      image: 'lens.png',
      example: 'Lens Protocol'
    },
    {
      title: 'Audio',
      description:
        'With Bundlr, dApps can store audio permanently on Arweave while being to pay for storage in the token of their choice. With the ability to store metadata, dApps can incorporate algorithms to create personalized experiences for listeners. And even at peak listening times, Bundlr ensures a reliable streaming experience.',
      image: 'sound.png',
      example: 'Sound'
    },
    {
      title: 'Video',
      description:
        'Through Bundlr, dApps can pay once and store their videos forever on Arweave. Once stored, videos do not require any ongoing maintenance. And of course, users can stream and upload seamlessly.',
      image: 'glass.png',
      example: 'Glass.xyz'
    },
    {
      title: 'Images',
      description:
        'Bundlr makes it possible to instantly upload and retrieve large batches of images, creating a seamless user experience. It also makes it possible to store these images permanently on Arweave, preventing any risk of censorship.',
      image: 'metaplex.png',
      example: 'Metaplex'
    },
    {
      title: 'Content',
      description:
        'Through Bundlr, writers can store content on Arweave forever, without any fear of censorship. Bundlr also provides high resolution timestamps for data provenance, which make it possible to verify and guarantee when content was created and by whom.',
      image: 'wordcel.png',
      example: 'Wordcel'
    },
    {
      title: 'Gaming',
      description:
        'As online games are providing on-chain assets to users, they are being forced to sacrifice user-experience because of the time it takes for blockchains to execute transactions. With Bundlr, assets can be instantly uploaded and retrieved during gameplay. Further, Bundlr ensures the immutability of these assets and their metadata.',
      image: 'crypto-unicorns.png',
      example: 'Sandbox'
    },
    {
      title: 'Data Archiving',
      description:
        'It is often said that “history is written by the victors.” This is no longer true. Bundlr enables permanent, censorship-resistant storage on Arweave. With dynamic customization with unlimited data-tagging, this information information becomes simple to find. Bundlr enables the preservation of history, forever.',
      image: 'alex.png',
      example: 'Alex'
    }
  ]

  return { PAGE_SEO, SECTION_DATA }
}

const Solutions: NextPage = () => {
  const { PAGE_SEO, SECTION_DATA } = useSolutions()

  return (
    <div className='bg-ghostWhite'>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      {/* <section className='flex flex-col items-center justify-center gap-8 pt-28'>
        <h1 className='text-7xl font-spaceGrotesk font-light'>Technology</h1>
        <p className='font-robotoMono max-w-[830px] text-center'>Bundlr is the world’s next data layer. It provides true provenance with data availability guarantees backed by permanent, decentralized storage.</p>
        <Button />
      </section> */}

      <header className="flex flex-col bg-ghostWhite px-[109px] pb-24">
        <div className="flex">
          <div className="max-w-[865px] container pt-[293px]">
            <h1 className="text-7xl z-10">
              Bundlr Is the Ideal Solution Across a Range of Use Cases
            </h1>
            <p className="text-base font-robotoMono font-light mt-5">
              Here are just a few examples
            </p>
          </div>
          <img
            src="/assets/solutions/blocks.png"
            alt=""
            className="absolute right-0"
          />
        </div>

        <div className="mx-44 rounded-[20px] overflow-hidden bg-black mt-40 z-10">
          <HomeTrustedBy scheme="dark" />
        </div>
      </header>

      {/* left aligned fixed navigation */}

      <div className="flex">
        {/* <section className='sticky ml-10 top-10 self-start'>
          <ul className='flex flex-col gap-4'>
            {
              SECTION_DATA.map((section, index) => (
                <li key={index} className='font-robotoMono text-sm uppercase'>{section.title}</li>
              ))
            }
          </ul>
        </section> */}

        <section className="flex flex-col w-full">
          {SECTION_DATA.map((section, index) => (
            <section key={`section-${index}`} className="w-full flex gap-20 justify-center items-center bg-ghostWhite odd:bg-seashell py-20">
              <div
                key={index}
                className="flex flex-col items-start justify-center gap-8 "
              >
                <SectionTitle title={section.title} />
                <p className="font-robotoMono max-w-[600px] ml-[126px] pt-12">
                  {section.description}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-10">
                <img src={`/assets/solutions/logos/${section.image}`} alt="" />
                <p className='font-robotoMono'>Example: {section.example}</p>
              </div>
            </section>
          ))}
        </section>
      </div>

      <CtaSection>
        <p className="text-[62px] font-light leading-none">
          Ready to Become a BUNDLOOOR?
        </p>
        <button className="mt-[52px] font-robotoMono text-sm bg-white text-black flex items-center gap-2 px-4 py-3 rounded-full hover:font-bold">
          START BUILDING
          <DevIcon color="black" />
        </button>
      </CtaSection>
      <Footer />
    </div>
  )
}

export default Solutions
