import {
  DownloadIcon,
  MediaKitBundlrLogoIcon,
  MediaKitBundlrSymbolIcon
} from '@/svg'
import { Footer, NavbarDesktop } from '@/components'
import { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import useOnScreen from '@/hooks/useOnScreen'

const useMediaKit = () => {
  const [latestCurrentlyOnScreen, setLatestCurrentlyOnScreen] = useState<
    null | string
  >(null)

  const brandRef = useRef<any>()

  const brandOnScreen = useOnScreen(brandRef)

  const assetRef = useRef<any>()

  const assetOnScreen = useOnScreen(assetRef)

  const pressRef = useRef<any>()

  const pressOnScreen = useOnScreen(pressRef)

  useEffect(() => {
    if (brandOnScreen) {
      setLatestCurrentlyOnScreen('brand-guidelines')
    } else if (assetOnScreen) {
      setLatestCurrentlyOnScreen('asset-downloads')
    } else if (pressOnScreen) {
      setLatestCurrentlyOnScreen('press-inquiries')
    }
  }, [brandOnScreen, assetOnScreen, pressOnScreen])

  const PAGE_SEO = {
    title: 'Bundlr | Media Kit',
    description: 'All the resources you need to work to use Bundlr branding.'
  }

  const STICKY_MENU = [
    {
      title: 'Brand Guidelines',
      href: '#brand-guidelines',
      id: 'brand-guidelines'
    },
    {
      title: 'Asset Downloads',
      href: '#asset-downloads',
      id: 'asset-downloads'
    },
    {
      title: 'Press inquiries',
      href: '#press-inquiries',
      id: 'press-inquiries'
    }
  ]

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return {
    PAGE_SEO,
    STICKY_MENU,
    brandRef,
    brandOnScreen,
    assetRef,
    assetOnScreen,
    pressRef,
    pressOnScreen,
    latestCurrentlyOnScreen,
    scrollToSection
  }
}

const MediaKit: NextPage = () => {
  const {
    PAGE_SEO,
    STICKY_MENU,
    brandRef,
    assetRef,
    pressRef,
    latestCurrentlyOnScreen,
    scrollToSection
  } = useMediaKit()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <header className="relative flex flex-col gap-9 overflow-hidden border-b border-ghostWhite px-5 pt-[193px] pb-14 lg:px-[109px]">
        <h1 className="text-6xl">Media Kit</h1>
        <p className="max-w-[654px] font-robotoMono">
          Please follow these guidelines when promoting Bundlr in all marketing
          communications, including advertising, articles, websites, and printed
          promotions.
        </p>
        <img
          src="/new/assets/home/data-storm.webp"
          className="absolute -bottom-60 hidden w-[600px] -rotate-180 -scale-y-100 transform sm:-bottom-[400px] lg:top-[0px] lg:-right-[270px] lg:flex xl:-right-10"
          alt="cloud"
        />
      </header>
      <div className="relative flex px-4 lg:px-[109px]">
        <div className="">
          <section className="mt-28">
            <h2 className="mb-16 text-5xl" id="brand-guidelines" ref={brandRef}>
              Brand Guidelines
            </h2>
            <div className="pr-4 lg:pr-0">
              <h3 className="font-fkDisplay text-3xl font-light">Logo</h3>
              <div className="mt-5 flex w-full items-center justify-center rounded-3xl bg-white py-28 lg:w-[726px]">
                <MediaKitBundlrLogoIcon />
              </div>
              <div className="mt-8 flex flex-col gap-5">
                <p className="font-robotoMono text-sm">
                  Blockchain. Bundling. Data layers.{' '}
                </p>
                <p className="font-robotoMono text-sm">
                  Bundlr’s logo is comprised of data layers bundled together in
                  a chain shaped as the letter B.
                </p>
              </div>
            </div>
            <div className="mt-28">
              <h3 className="font-fkDisplay text-3xl font-light">
                Color Variations
              </h3>
              <div className="grid-row mt-5 grid w-full grid-cols-1 gap-y-4 pr-4 lg:w-[726px] lg:grid-cols-2 lg:pr-0">
                <div className="flex w-full items-center justify-center rounded-3xl bg-black py-16 text-white lg:max-w-[348px]">
                  <MediaKitBundlrLogoIcon width={'187px'} />
                </div>
                <div className="flex w-full items-center justify-center rounded-3xl bg-timberwolf py-16 lg:max-w-[348px]">
                  <MediaKitBundlrLogoIcon width={'187px'} />
                </div>
                <div className="flex w-full items-center justify-center rounded-3xl bg-ghostWhite py-16 lg:max-w-[348px]">
                  <MediaKitBundlrLogoIcon width={'187px'} />
                </div>
                <div className="flex w-full items-center justify-center rounded-3xl bg-white py-16 lg:max-w-[348px]">
                  <MediaKitBundlrLogoIcon width={'187px'} />
                </div>
              </div>
            </div>
            <div className="mt-28">
              <h3 className="font-fkDisplay text-3xl font-light">
                Common Errors
              </h3>
              <div className="grid-row mt-5 grid w-full grid-cols-1 gap-y-6  pr-4 lg:w-[726px] lg:grid-cols-2 lg:pr-0 ">
                <div className="flex w-full flex-col gap-4 lg:max-w-[348px]">
                  <div className="flex h-[157px] flex-col items-center justify-center rounded-3xl  border-2 border-white bg-white">
                    <img src="/assets/mediakit/stretched.png" />
                  </div>
                  <p className="font-robotoMono text-sm">
                    Do not squash, strech or manipulate the logo in any way.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-4 lg:max-w-[348px]">
                  <div className="flex h-[157px] flex-col items-center justify-center rounded-3xl border-2 border-white bg-white">
                    <img src="/assets/mediakit/shadow.png" />
                  </div>
                  <p className="font-robotoMono text-sm">
                    Do not apply shadows or change the color to unauthorized
                    pairings.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-4 lg:max-w-[348px]">
                  <div className="flex h-[157px] flex-col items-center justify-center rounded-3xl  border-2 border-white bg-white">
                    <img src="/assets/mediakit/opacity.png" />
                  </div>
                  <p className="font-robotoMono text-sm">
                    Do not reduce the opacity in any way. Ensure high contrast.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-4 lg:max-w-[348px]">
                  <div className="flex h-[157px] flex-col items-center justify-center rounded-3xl  border-2 border-white bg-white">
                    <img src="/assets/mediakit/text.png" />
                  </div>
                  <p className="font-robotoMono text-sm">
                    Do not encroach with any other copy. Use the clear space
                    guidelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-28 mb-28">
              <h3 className="font-fkDisplay text-3xl font-light">
                Primary colors
              </h3>
              <div className="grid-row mt-5 grid w-full grid-cols-1 gap-y-4 pr-4 lg:w-[726px] lg:grid-cols-2 lg:pr-0">
                <div className="flex w-full items-center justify-center rounded-3xl border-2 border-white bg-black py-16 text-white lg:max-w-[348px]">
                  Black #000000
                </div>
                <div className="flex w-full items-center justify-center rounded-3xl border-2 border-white bg-seashell py-16 lg:max-w-[348px]">
                  Seashell #FEF4EE
                </div>
                <div className="flex w-full items-center justify-center rounded-3xl border-2 border-white bg-ghostWhite py-16 lg:max-w-[348px]">
                  Ghost white #EEF0F6
                </div>
                <div className="flex w-full items-center justify-center rounded-3xl border-2 border-white bg-white py-16 lg:max-w-[348px]">
                  White #FFFFFF
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <div className="mb-16 flex max-w-[726px] flex-col items-start justify-between gap-3 md:flex-row lg:gap-0">
              <h2 className="text-5xl" id="asset-downloads" ref={assetRef}>
                Asset Downloads
              </h2>
              <a
                href="/assets/mediakit/downloads/media-kit.zip"
                download="media-kit.zip"
                className="flex items-center gap-2 rounded-full bg-black px-4 py-3 font-robotoMono text-sm text-white hover:font-bold"
              >
                DOWNLOAD ALL
                <DownloadIcon />
              </a>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex w-full flex-col items-start justify-between lg:w-[726px] lg:flex-row ">
                <div className="">
                  <p className="pb-2 font-robotoMono text-xs uppercase">Logo</p>
                  <div className="flex w-[348px] items-center justify-center rounded-3xl border-2 border-white bg-black py-16 text-white">
                    <MediaKitBundlrLogoIcon />
                  </div>
                </div>
                <div className="flex flex-row gap-4 pt-4">
                  <a
                    href="/assets/mediakit/downloads/logo.png"
                    download="logo.png"
                    className="rounded-full border border-black px-3 py-2 font-robotoMono"
                  >
                    PNG
                  </a>
                  <a
                    href="/assets/mediakit/downloads/logo.svg"
                    download="logo.svg"
                    className="rounded-full border border-black px-3 py-2 font-robotoMono"
                  >
                    SVG
                  </a>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-between lg:w-[726px] lg:flex-row">
                <div className="">
                  <p className="pb-2 font-robotoMono text-xs uppercase">Logo</p>
                  <div className="flex w-[348px] items-center justify-center rounded-3xl border-2 border-white bg-black py-16 text-white">
                    <MediaKitBundlrSymbolIcon />
                  </div>
                </div>
                <div className="flex flex-row gap-4 pt-4">
                  <a
                    href="/assets/mediakit/downloads/logomark.png"
                    download="logomark.png"
                    className="rounded-full border border-black px-3 py-2 font-robotoMono"
                  >
                    PNG
                  </a>
                  {/* on click download file  */}
                  <a
                    href="/assets/mediakit/downloads/logomark.svg"
                    download="logomark.svg"
                    className="rounded-full border border-black px-3 py-2 font-robotoMono"
                  >
                    SVG
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <div className="items-left mb-28 mt-28 flex max-w-[726px] flex-col justify-between gap-10">
              <h2 className="text-5xl" id="press-inquiries" ref={pressRef}>
                Press Inquiries
              </h2>
              <p className="font-robotoMono text-sm">
                Please direct all inquiries to{' '}
                <a href="mailto:hello@bundlr.network">
                  <u>hello@bundlr.network</u>
                </a>
              </p>
            </div>
          </section>
        </div>
        <ul className="sticky top-10 ml-auto mt-28 hidden cursor-pointer flex-col gap-3 self-start pr-5 pl-5 uppercase lg:flex lg:pr-[109px]">
          {STICKY_MENU.map((item, index) => (
            <li
              key={index}
              onClick={() => scrollToSection(item.id)}
              className={`mb-4 p-1 font-robotoMono text-sm ${
                item.id === latestCurrentlyOnScreen &&
                'whitespace-nowrap bg-black text-white'
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default MediaKit
