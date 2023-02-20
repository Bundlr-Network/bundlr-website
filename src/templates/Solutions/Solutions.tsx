import {
  Button,
  CtaSection,
  Footer,
  Heading,
  HomeTrustedBy,
  NavbarDesktop,
  SectionTitle
} from '@/components'
import { useEffect, useRef, useState } from 'react'

import { ButtonScheme } from '@/components/Button/Button'
import { DevIcon } from '@/svg'
import Image from 'next/image'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'
import useOnScreen from '@/hooks/useOnScreen'

const useSolutions = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Use Cases',
    description: 'Bundlr is the data solution for audio, video, and metaverse applications – to name a few. Discover our diverse range of use cases.'
  }

  const [latestCurrentlyOnScreen, setLatestCurrentlyOnScreen] = useState<
    null | string
  >(null)

  const decentralizedStorageRef = useRef<any>()

  const decentralizedStorageOnScreen = useOnScreen(
    decentralizedStorageRef,
    '-100px'
  )

  const audioRef = useRef<any>()

  const audioOnScreen = useOnScreen(audioRef, '-100px')

  const videoRef = useRef<any>()

  const videoOnScreen = useOnScreen(videoRef, '-100px')

  const imagesRef = useRef<any>()

  const imagesOnScreen = useOnScreen(imagesRef, '-100px')

  const contentRef = useRef<any>()

  const contentOnScreen = useOnScreen(contentRef, '-100px')

  const gamingRef = useRef<any>()

  const gamingOnScreen = useOnScreen(gamingRef, '-100px')

  const metaverseRef = useRef<any>()

  const metaverseOnScreen = useOnScreen(metaverseRef, '-100px')

  const dataArchivingRef = useRef<any>()

  const dataArchivingOnScreen = useOnScreen(dataArchivingRef, '-100px')

  useEffect(() => {
    switch (true) {
      case decentralizedStorageOnScreen:
        setLatestCurrentlyOnScreen('decentralized-social-media')
        break
      case audioOnScreen:
        setLatestCurrentlyOnScreen('audio')
        break
      case videoOnScreen:
        setLatestCurrentlyOnScreen('video')
        break
      case imagesOnScreen:
        setLatestCurrentlyOnScreen('images')
        break
      case contentOnScreen:
        setLatestCurrentlyOnScreen('content')
        break
      case gamingOnScreen:
        setLatestCurrentlyOnScreen('gaming')
        break
      case metaverseOnScreen:
        setLatestCurrentlyOnScreen('metaverse')
        break
      case dataArchivingOnScreen:
        setLatestCurrentlyOnScreen('data-archiving')
        break
      default:
        break
    }
  }, [
    decentralizedStorageOnScreen,
    audioOnScreen,
    videoOnScreen,
    imagesOnScreen,
    contentOnScreen,
    gamingOnScreen,
    dataArchivingOnScreen
  ])

  const SECTION_DATA = [
    {
      id: 'decentralized-social-media',
      ref: decentralizedStorageRef,
      title: 'Social Media',
      description:
        'Before Bundlr, neither could social media dApps scale nor could users prevent the censorship of their content. With Bundlr, they have access to affordable, performant and scalable data infrastructure. Plus, users retain ownership of their data.',
      image: 'orb.webp',
      href: 'https://orb.ac/',
      example: 'Orb'
    },
    {
      id: 'audio',
      ref: audioRef,
      title: 'Audio',
      description:
        'DApps can store audio permanently on Arweave while being to pay for storage in the token of their choice. With the ability to store metadata, dApps can incorporate algorithms to create personalized experiences for listeners. And even at peak listening times, Bundlr ensures a reliable streaming experience.',
      image: 'sound.png',
      invert: true,
      href: 'Sound.xyz',
      example: 'Sound.xyz'
    },
    {
      id: 'video',
      ref: videoRef,
      title: 'Video',
      description:
        'DApps can pay once and store their videos forever on Arweave. Once stored, videos do not require any ongoing maintenance. And of course, users can stream and upload seamlessly.',
      image: 'glass.png',
      href: 'https://www.glass.xyz/',
      example: 'Glass.xyz'
    },
    {
      id: 'images',
      ref: imagesRef,
      title: 'Images',
      description:
        'Bundlr makes it possible to instantly upload and retrieve large batches of images, creating a seamless user experience. It also makes it possible to store these images permanently on Arweave, preventing any risk of censorship.',
      image: 'metaplex.svg',
      invert: true,
      href: 'https://www.metaplex.com/',
      example: 'Metaplex'
    },
    {
      id: 'content',
      ref: contentRef,
      title: 'Content',
      description:
        'Writers can store content on Arweave forever, without any fear of censorship. Bundlr also provides high resolution timestamps for data provenance, which make it possible to verify and guarantee when content was created and by whom.',
      image: 'wordcel.svg',
      invert: true,
      href: 'https://www.wordcelclub.com/',
      example: 'Wordcel'
    },
    {
      id: 'gaming',
      ref: gamingRef,
      title: 'Gaming',
      description:
        'As online games are providing on-chain assets to users, they are being forced to sacrifice user-experience because of the time it takes for blockchains to execute transactions. With Bundlr, assets can be instantly uploaded and retrieved during gameplay. Further, Bundlr ensures the immutability of these assets and their metadata.',
      image: 'crypto-unicorns.png',
      href: 'https://www.cryptounicorns.fun/',
      example: 'Crypto Unicorns'
    },
    {
      id: 'metaverse',
      ref: metaverseRef,
      title: 'Metaverse',
      description:
        'Desipite their nascence, metaverses already need to store large amounts of data. With Bundlr, metaverses can permanently store these assets at an affordable price while remaining confident that the seamless experience of uploading and accessing data scales with their growth. Bundlr allows metaverses to scale for mass adoption. ',
      image: 'the-block.png',
      invert: true,
      href: 'https://theblockcity.com/',
      example: 'The Block City'
    },
    {
      id: 'data-archiving',
      ref: dataArchivingRef,
      title: 'Data Archiving',
      description:
        'It is often said that “history is written by the victors.” This is no longer true. Bundlr enables permanent, censorship-resistant storage on Arweave. With dynamic customization with unlimited data-tagging, this information information becomes simple to find. Bundlr enables the preservation of history, forever.',
      image: 'alex.svg',
      href: 'https://alex.arweave.dev/',
      example: 'Alex'
    }
  ]

  // smooth scroll to section
  const scrollToSection = (id: string) => {
    const section = SECTION_DATA.find((section) => section.id === id)
    if (section) {
      section.ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return {
    PAGE_SEO,
    SECTION_DATA,
    latestCurrentlyOnScreen,
    scrollToSection
  }
}

const Solutions: NextPage = () => {
  const { PAGE_SEO, SECTION_DATA, latestCurrentlyOnScreen, scrollToSection } =
    useSolutions()

  return (
    <div className="bg-ghostWhite">
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop scheme={SchemeColor.ghostWhite} />
      {/* <section className='flex flex-col items-center justify-center gap-8 pt-28'>
          <h1 className='text-7xl font-fkDisplay font-light'>Technology</h1>
          <p className='font-robotoMono max-w-[830px] text-center'>Bundlr is the world’s next data layer. It provides true provenance with data availability guarantees backed by permanent, decentralized storage.</p>
          <Button />
        </section> */}

      <header className="flex flex-col bg-ghostWhite px-5 lg:px-[79px] pb-2 lg:pb-24 relative overflow-visible lg:overflow-hidden">
        <div className="flex">
          <div className="container pt-20 lg:pb-0 lg:pt-[203px] z-40 text-center md:text-left">
            <Heading level={1}>
              Use Cases for<br className='hidden lg:inline' /> Everyone
            </Heading>
          </div>
          <img
            src="/assets/solutions/blocks.png"
            alt=""
            className="absolute lg:-right-32 -bottom-32 lg:bottom-0 right-0"
          />
        </div>

        <div className="rounded-[20px] overflow-hidden bg-black mt-20 lg:mt-40 z-10 mb-10 lg:mb-0">
          <HomeTrustedBy />
        </div>
      </header>

      {/* left aligned fixed navigation */}

      <div className="relative mt-10">
        <section className="sticky ml-10 top-10 pb-10 self-start w-32 hidden xl:block">
          {/* <div className="h-10 w-10" /> */}
          <ul className="flex flex-col gap-4">
            {SECTION_DATA.map((section, index) => (
              <li
                onClick={() => scrollToSection(section.id)}
                key={index}
                className={`cursor-pointer font-robotoMono text-sm uppercase p-1 ${section.id === latestCurrentlyOnScreen &&
                  'bg-black text-white'
                  }`}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col xl:-mt-[410px]">
          {SECTION_DATA.map((section, index) => (
            <section
              key={`section-${index}`}
              id={section.id}
              ref={section.ref}
              className="w-full flex flex-col lg:flex-row gap-20 justify-end items-center bg-ghostWhite odd:bg-seashell py-14 lg:py-20 px-4 lg:px-[79px] xl:pl-[200px]"
            >
              <div
                key={index}
                className="flex flex-col items-center lg:items-start justify-center gap-8 "
              >
                <SectionTitle title={section.title} />
                <p className="font-robotoMono lg:max-w-[600px] lg:ml-[126px] ml-0 pt-0 lg:pt-12 leading-loose text-center lg:text-left">
                  {section.description}
                </p>
              </div>
              <a href={section.href} target="_blank" rel="noreferrer">
                <div className="flex flex-col items-center justify-center gap-10">
                  <div className={`p-10 rounded-lg flex items-center justify-center ${index % 2 === 0 ? 'bg-black' : 'bg-white'
                    }`}>
                    <Image
                      src={`/assets/solutions/logos/${section.image}`}
                      alt=""
                      width={'200px'}
                      height={140}
                      className={`object-contain ${(section.invert && index % 2 === 0) && 'invert'}`}
                    />
                  </div>
                  <p className="font-robotoMono">
                    Example:{' '}

                    <u>{section.example}</u>

                  </p>
                </div>
              </a>
            </section>
          ))}
        </section>
      </div>

      <div className="mb-20 mt-10">
        <CtaSection>
          <div className="flex flex-col items-center md:items-center lg:items-start justify-center gap-10 lg:gap-0">
            <Heading level={2} className="text-center lg:text-left">
              Ready to Become a BUNDLOOOOR?
            </Heading>
            <div className="mt-0 lg:mt-10">
              <a href="https://docs.bundlr.network/" target={"_blank"} rel="noreferrer">
                <Button scheme={ButtonScheme.white}>
                  START BUILDING
                  <DevIcon color="black" />
                </Button>
              </a>
            </div>
          </div>
        </CtaSection>
      </div>
      <Footer />
    </div>
  );
}

export default Solutions
