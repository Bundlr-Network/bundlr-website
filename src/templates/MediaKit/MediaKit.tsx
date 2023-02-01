import { DevIcon, DownloadIcon, MediaKitBundlrLogoIcon, MediaKitBundlrSymbolIcon } from '@/svg'
import { Footer, NavbarDesktop } from '@/components'
import { useEffect, useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useMediaKit = () => {
  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
  }

  return { PAGE_SEO }
}

const MediaKit: NextPage = () => {
  const { PAGE_SEO } = useMediaKit()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <header className="flex flex-col gap-9 px-[109px] pt-[193px] pb-14 border-b border-ghostWhite">
        <h1 className="text-6xl">Media Kit</h1>
        <p className="font-robotoMono max-w-[654px]">
          Please follow these guidelines when promoting Bundlr in all marketing
          communications, including advertising, articles, websites, and printed
          promotions.
        </p>
      </header>
      <section className="px-[109px] mt-28">
        <h2 className='text-5xl mb-16'>Brand Guidelines</h2>
        <div className="">
          <h3 className="text-3xl font-spaceGrotesk font-light">Logo</h3>
          <div className="py-28 flex items-center justify-center w-[726px] bg-white rounded-3xl mt-5">
            <MediaKitBundlrLogoIcon />
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <p className="text-sm font-robotoMono">
              Blockchain. Bundling. Data layers.{' '}
            </p>
            <p className="text-sm font-robotoMono">
              Bundlr’s logo is comprised of data layers bundled together in a
              chain shaped as the letter B.
            </p>
          </div>
        </div>
        <div className="mt-28">
          <h3 className="text-3xl font-spaceGrotesk font-light">
            Color Variations
          </h3>
          <div className="grid grid-cols-2 w-[726px] grid-row gap-y-4 mt-5">
            <div className="max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-black text-white">
              <MediaKitBundlrLogoIcon width={'187px'} />
            </div>
            <div className="max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-timberwolf">
              <MediaKitBundlrLogoIcon width={'187px'} />
            </div>
            <div className="max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-ghostWhite">
              <MediaKitBundlrLogoIcon width={'187px'} />
            </div>
            <div className="max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-white">
              <MediaKitBundlrLogoIcon width={'187px'} />
            </div>
          </div>
        </div>
        <div className="mt-28">
          <h3 className="text-3xl font-spaceGrotesk font-light">Common Errors</h3>
          <div className="grid grid-cols-2 grid-row gap-y-6 mt-5  w-[726px] ">
            <div className="max-w-[348px] flex flex-col gap-4">
              <div className="border-2 border-white flex flex-col items-center justify-center  h-[157px] rounded-3xl bg-white">
                <img src="/assets/mediakit/stretched.png" />
              </div>
              <p className="font-robotoMono text-sm">
                Do not squash, strech or manipulate the logo in any way.
              </p>
            </div>
            <div className="max-w-[348px] flex flex-col gap-4">
              <div className="border-2 border-white flex flex-col items-center justify-center h-[157px] rounded-3xl bg-white">
                <img src="/assets/mediakit/shadow.png" />
              </div>
              <p className="font-robotoMono text-sm">
                Do not apply shadows or change the color to unauthorized pairings.
              </p>
            </div>
            <div className="max-w-[348px] flex flex-col gap-4">
              <div className="border-2 border-white flex flex-col items-center justify-center  h-[157px] rounded-3xl bg-white">
                <img src="/assets/mediakit/opacity.png" />
              </div>
              <p className="font-robotoMono text-sm">
                Do not reduce the opacity in any way. Ensure high contrast.
              </p>
            </div>
            <div className="max-w-[348px] flex flex-col gap-4">
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
          <h3 className="text-3xl font-spaceGrotesk font-light">
            Primary colors
          </h3>
          <div className="grid grid-cols-2 w-[726px] grid-row gap-y-4 mt-5">
            <div className="border-2 border-white max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-black text-white">
              Black #000000
            </div>
            <div className="border-2 border-white max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-seashell">
              Seashell #FEF4EE
            </div>
            <div className="border-2 border-white max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-ghostWhite">
              Ghost white #EEF0F6
            </div>
            <div className="border-2 border-white max-w-[348px] flex items-center justify-center py-16 rounded-3xl bg-white">
              White #FFFFFF
            </div>
          </div>
        </div>
      </section>
      <section className='px-[109px]'>
        <div className="flex justify-between items-center mb-16 max-w-[726px]">
          <h2 className='text-5xl'>Asset Downloads</h2>
          <button className='font-robotoMono text-sm bg-black text-white flex items-center gap-2 px-4 py-3 rounded-full hover:font-bold'>
            DOWNLOAD ALL
            <DownloadIcon />
          </button>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex justify-between w-[726px] items-start">
            <div className="">
              <p className='font-robotoMono uppercase text-xs pb-2'>Logo</p>
              <div className="border-2 border-white w-[348px] flex items-center justify-center py-16 rounded-3xl bg-black text-white">
                <MediaKitBundlrLogoIcon />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-4">
              <a href="" className="border rounded-full font-robotoMono px-3 py-2 border-black">PNG</a>
              <a href="" className="border rounded-full font-robotoMono px-3 py-2 border-black">SVG</a>
            </div>
          </div>
          <div className="flex justify-between w-[726px] items-start">
            <div className="">
              <p className='font-robotoMono uppercase text-xs pb-2'>Logo</p>
              <div className="border-2 border-white w-[348px] flex items-center justify-center py-16 rounded-3xl bg-black text-white">
                <MediaKitBundlrSymbolIcon />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-4">
              <a href="" className="border rounded-full font-robotoMono px-3 py-2 border-black">PNG</a>
              <a href="" className="border rounded-full font-robotoMono px-3 py-2 border-black">SVG</a>
            </div>
          </div>
        </div>
      </section>
      <section className='px-[109px]'>
        <div className="flex flex-col justify-between items-left gap-10 mb-28 max-w-[726px] mt-28">
          <h2 className='text-5xl'>Press Inquiries</h2>
          <p className='font-robotoMono text-sm'>Please direct all inquiries to hello@bundlr.network</p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default MediaKit
