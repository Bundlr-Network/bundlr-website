import { DownloadIcon, MediaKitBundlrLogoIcon, MediaKitBundlrSymbolIcon } from '@/svg';
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
    title: 'Page Title',
    description: 'Page Description'
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

  return {
    PAGE_SEO,
    STICKY_MENU,
    brandRef,
    brandOnScreen,
    assetRef,
    assetOnScreen,
    pressRef,
    pressOnScreen,
    latestCurrentlyOnScreen
  }
}

const MediaKit: NextPage = () => {
  const {
    PAGE_SEO,
    STICKY_MENU,
    brandRef,
    assetRef,
    pressRef,
    latestCurrentlyOnScreen
  } = useMediaKit()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <header className="flex flex-col gap-9 px-5 lg:px-[109px] pt-[193px] pb-14 border-b border-ghostWhite">
        <h1 className="text-6xl">Media Kit</h1>
        <p className="font-robotoMono max-w-[654px]">
          Please follow these guidelines when promoting Bundlr in all marketing
          communications, including advertising, articles, websites, and printed
          promotions.
        </p>
      </header>
      <div className="flex relative px-4 lg:px-[109px]">
        <div className=''>
          <section className="mt-28">
            <h2 className="text-5xl mb-16" id="brand-guidelines" ref={brandRef}>
              Brand Guidelines
            </h2>
            <div className="pr-4 lg:pr-0">
              <h3 className="text-3xl font-fkDisplay font-light">Logo</h3>
              <div className="py-28 flex items-center justify-center w-full lg:w-[726px] bg-white rounded-3xl mt-5">
                <MediaKitBundlrLogoIcon />
              </div>
              <div className="flex flex-col gap-5 mt-8">
                <p className="text-sm font-robotoMono">
                  Blockchain. Bundling. Data layers.{' '}
                </p>
                <p className="text-sm font-robotoMono">
                  Bundlr’s logo is comprised of data layers bundled together in
                  a chain shaped as the letter B.
                </p>
              </div>
            </div>
            <div className="mt-28">
              <h3 className="text-3xl font-fkDisplay font-light">
                Color Variations
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-[726px] grid-row gap-y-4 mt-5 pr-4 lg:pr-0">
                <div className="w-full lg:max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-black text-white">
                  <MediaKitBundlrLogoIcon width={'187px'} />
                </div>
                <div className="w-full lg:max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-timberwolf">
                  <MediaKitBundlrLogoIcon width={'187px'} />
                </div>
                <div className="w-full lg:max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-ghostWhite">
                  <MediaKitBundlrLogoIcon width={'187px'} />
                </div>
                <div className="w-full lg:max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-white">
                  <MediaKitBundlrLogoIcon width={'187px'} />
                </div>
              </div>
            </div>
            <div className="mt-28">
              <h3 className="text-3xl font-fkDisplay font-light">
                Common Errors
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 grid-row gap-y-6 mt-5  w-full lg:w-[726px] pr-4 lg:pr-0 ">
                <div className="w-full lg:max-w-[348px] flex flex-col gap-4">
                  <div className="border-2 border-white flex flex-col items-center justify-center  h-[157px] rounded-3xl bg-white">
                    <img src="/assets/mediakit/stretched.png" />
                  </div>
                  <p className="font-robotoMono text-sm">
                    Do not squash, strech or manipulate the logo in any way.
                  </p>
                </div>
                <div className="w-full lg:max-w-[348px] flex flex-col gap-4">
                  <div className="border-2 border-white flex flex-col items-center justify-center h-[157px] rounded-3xl bg-white">
                    <img src="/assets/mediakit/shadow.png" />
                  </div>
                  <p className="font-robotoMono text-sm">
                    Do not apply shadows or change the color to unauthorized
                    pairings.
                  </p>
                </div>
                <div className="w-full lg:max-w-[348px] flex flex-col gap-4">
                  <div className="border-2 border-white flex flex-col items-center justify-center  h-[157px] rounded-3xl bg-white">
                    <img src="/assets/mediakit/opacity.png" />
                  </div>
                  <p className="font-robotoMono text-sm">
                    Do not reduce the opacity in any way. Ensure high contrast.
                  </p>
                </div>
                <div className="w-full lg:max-w-[348px] flex flex-col gap-4">
                  <div className="border-2 border-white flex flex-col items-center justify-center  h-[157px] rounded-3xl bg-white">
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
              <h3 className="text-3xl font-fkDisplay font-light">
                Primary colors
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-[726px] grid-row gap-y-4 mt-5 pr-4 lg:pr-0">
                <div className="border-2 border-white w-full lg:max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-black text-white">
                  Black #000000
                </div>
                <div className="border-2 border-white w-full lg:max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-seashell">
                  Seashell #FEF4EE
                </div>
                <div className="border-2 border-white w-full lg:max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-ghostWhite">
                  Ghost white #EEF0F6
                </div>
                <div className="border-2 border-white w-full lg:max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-white">
                  White #FFFFFF
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-3 lg:gap-0 mb-16 max-w-[726px]">
              <h2 className="text-5xl" id="asset-downloads" ref={assetRef}>
                Asset Downloads
              </h2>
              <a
                href="/assets/mediakit/downloads/media-kit.zip"
                download="media-kit.zip"
                className="font-robotoMono text-sm bg-black text-white flex items-center gap-2 px-4 py-3 rounded-full hover:font-bold"
              >
                DOWNLOAD ALL
                <DownloadIcon />
              </a>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[726px] items-start ">
                <div className="">
                  <p className="font-robotoMono uppercase text-xs pb-2">Logo</p>
                  <div className="border-2 border-white w-[348px] flex items-center justify-center py-16 rounded-3xl bg-black text-white">
                    <MediaKitBundlrLogoIcon />
                  </div>
                </div>
                <div className="flex flex-row gap-4 pt-4">
                  <a
                    href="/assets/mediakit/downloads/logo.png"
                    download="logo.png"
                    className="border rounded-full font-robotoMono px-3 py-2 border-black"
                  >
                    PNG
                  </a>
                  <a
                    href="/assets/mediakit/downloads/logo.svg"
                    download="logo.svg"
                    className="border rounded-full font-robotoMono px-3 py-2 border-black"
                  >
                    SVG
                  </a>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[726px] items-start">
                <div className="">
                  <p className="font-robotoMono uppercase text-xs pb-2">Logo</p>
                  <div className="border-2 border-white w-[348px] flex items-center justify-center py-16 rounded-3xl bg-black text-white">
                    <MediaKitBundlrSymbolIcon />
                  </div>
                </div>
                <div className="flex flex-row gap-4 pt-4">
                  <a
                    href="/assets/mediakit/downloads/logomark.png"
                    download="logomark.png"
                    className="border rounded-full font-robotoMono px-3 py-2 border-black"
                  >
                    PNG
                  </a>
                  {/* on click download file  */}
                  <a
                    href="/assets/mediakit/downloads/logomark.svg"
                    download="logomark.svg"
                    className="border rounded-full font-robotoMono px-3 py-2 border-black"
                  >
                    SVG
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <div className="flex flex-col justify-between items-left gap-10 mb-28 max-w-[726px] mt-28">
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
        <div className="sticky hidden lg:flex flex-col gap-3 top-10 ml-auto self-start mt-28 pr-5 lg:pr-[109px] uppercase">
          {STICKY_MENU.map((item, index) => (
            <a
              key={index}
              href={`#${item.href}`}
              className={`font-robotoMono text-sm mb-4 p-1 ${item.id === latestCurrentlyOnScreen && 'bg-black text-white'
                }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MediaKit
