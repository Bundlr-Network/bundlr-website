import { Footer, NavbarDesktop } from '@/components'
import { useLayoutEffect, useRef } from 'react'

import { ChevronRight } from '@/svg'
import Link from 'next/link'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const useRoadmap = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Roadmap',
    description:
      'Bear or bull, Bundlr will keep building. Check out what’s coming.'
  }

  return { PAGE_SEO }
}

const Roadmap: NextPage = () => {
  const { PAGE_SEO } = useRoadmap()

  const wrapper = useRef<any>()
  const slider = useRef<any>()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = slider.current.children
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          // snap: 1 / (panels.length - 1),
          end: () => '+=' + slider?.current?.offsetWidth * 3
          // markers: true
        }
      })
    }, wrapper)
    return () => ctx.revert()
  })

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <div className="bg-black text-white">
        <NavbarDesktop scheme={SchemeColor.black} />
      </div>
      <div ref={wrapper} className="overflow-hidden">
        <div
          ref={slider}
          className="flex h-screen w-screen flex-col flex-wrap overflow-hidden bg-black"
        >
          <div className="relative flex h-screen w-screen items-center justify-between bg-black pl-8 text-white lg:pl-0">
            <div />
            <div className="flex flex-col gap-7">
              <h2 className="z-10 text-5xl lg:text-7xl">Roadmap</h2>
              <p className="z-10 font-robotoMono">
                We’re building a seamless developer experience while
                decentralizing our infrastructure.
              </p>
              <p className="z-10 font-robotoMono">
                Check out Bundlr’s plans ahead
              </p>
            </div>
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div className="mr-10 text-white">
              <ChevronRight width={'40px'} height={'40px'} />
            </div>
            {/* <img
              src="/assets/roadmap/roadmap.png"
              alt="roadmap"
              className="absolute lg:-left-96 xl:-left-72 -top-96"
            /> */}
          </div>
          <div className="relative flex h-screen w-screen items-center justify-between bg-black text-white">
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div />
            <div className="mb-14 flex max-w-2xl flex-col gap-7 md:mb-0">
              <p className="z-10 self-start rounded-full border border-white bg-black px-3 py-2 font-robotoMono text-xs uppercase">
                Ongoing
              </p>
              <h2 className="z-10 text-5xl lg:text-7xl">Chain Integrations </h2>
              <p className="z-10 font-robotoMono">
                By supporting the cryptography and clients of a chain, Bundlr
                lets users pay for Bundlr in the token of their preferred chain.
              </p>
              <p className="z-10 font-robotoMono">
                This leads to a seamless developer experience and makes Bundlr
                more accessible to builders in different ecosystems.
              </p>
              <p className="z-10 font-robotoMono">
                If you’re part of a project that’s interested in integrating
                your token with Bundlr, feel free to contact us through our{' '}
                <Link href="/partner-program">Partner Program.</Link>
              </p>
            </div>
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" />\ */}
            <div className="mr-10 text-white">
              <ChevronRight width={'40px'} height={'40px'} />
            </div>

            <img
              src="/new/assets/home/cloud.webp"
              alt="roadmap"
              className="absolute -top-32 -left-56 hidden w-[900px] md:-top-72 lg:block"
            />
            <img
              src="/new/assets/home/cloud.webp"
              alt="roadmap"
              className="absolute -bottom-32 right-0 w-[900px] md:-bottom-72"
            />
          </div>
          <div className="relative flex h-screen w-screen items-center justify-between bg-black text-white">
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div />
            <div className="flex max-w-2xl flex-col gap-7">
              <p className="z-10 self-start rounded-full border border-white bg-black px-3 py-2 font-robotoMono text-xs uppercase">
                Q1 2023
              </p>
              <h2 className="z-10 text-5xl lg:text-7xl">Preweave</h2>
              <p className="z-10 font-robotoMono">
                Preweave is a peer-to-peer caching layer built on Bundlr.
                Preweave users will also have the option of permanently storing
                their data on Arweave, seamlessly.
              </p>
            </div>
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div className="mr-10 text-white">
              <ChevronRight width={'40px'} height={'40px'} />
            </div>
            <img
              src="/new/assets/home/data-spiral-flop.webp"
              alt="preweave"
              className="absolute -top-60 -left-48 w-[700px] lg:-top-80"
            />
            <img
              src="/new/assets/home/data-spiral.webp"
              alt="preweave"
              className="absolute -bottom-60 -right-0 w-[700px] lg:-bottom-80"
            />
          </div>
          <div className="relative z-10 flex h-screen w-screen items-center justify-between bg-black text-white">
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div />
            <div className="flex max-w-2xl flex-col gap-7">
              <p className="z-10 self-start rounded-full border border-white bg-black px-3 py-2 font-robotoMono text-xs uppercase">
                Q2 2023
              </p>
              <h2 className="z-10 text-5xl lg:text-7xl">Bundlr Studio</h2>
              <p className="z-10 font-robotoMono">
                Bundlr Studio gives users the option to pay for Bundlr in their
                preferred fiat currency through a simple user interface.
              </p>
              <p className="z-10 font-robotoMono">
                This substantially reduces the barrier for non-crypto-natives to
                use Bundlr as a data layer.
              </p>
            </div>
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div className="mr-10 text-white">
              <ChevronRight width={'40px'} height={'40px'} />
            </div>
            <img
              src="/new/assets/home/data-cloud-v2.webp"
              alt="studio"
              className="absolute -top-32 -left-20 w-[800px] md:-top-56 lg:-left-56"
            />
            <img
              src="/new/assets/home/data-cloud-v2.webp"
              alt="studio"
              className="absolute -bottom-36 -right-0 w-[800px] md:-bottom-56 lg:-right-56"
            />
          </div>
          <div className="flex h-screen w-screen items-center justify-between bg-black text-white">
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div />
            <div className="flex max-w-2xl flex-col gap-7">
              <p className="z-10 self-start rounded-full border border-white bg-black px-3 py-2 font-robotoMono text-xs uppercase">
                Q4 2023
              </p>
              <h2 className="z-10 text-5xl lg:text-7xl">Testnet </h2>
              <p className="z-10 font-robotoMono">
                Testnet will be the final version of the network before Bundlr
                goes to Mainnet.
              </p>
            </div>
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div className="mr-10 text-white">
              <ChevronRight width={'40px'} height={'40px'} />
            </div>
            <img
              src="/new/assets/home/data-exponential.webp"
              alt="testnet"
              className="absolute -top-32 left-0 w-[900px] rotate-180 lg:-top-56"
            />
            <img
              src="/new/assets/home/data-exponential.webp"
              alt="testnet"
              className="absolute -bottom-32 right-20 w-[900px] lg:-bottom-56 lg:right-0"
            />
            {/* <img
              src="/new/assets/home/data-exponential.webp"
              alt="testnet"
              className="absolute bottom-0 right-0"
            /> */}
          </div>
          <div className="relative flex h-screen w-screen items-center justify-between bg-black text-white">
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div />
            <div className="flex max-w-2xl flex-col gap-7">
              <p className="z-10 self-start rounded-full border border-white bg-black px-3 py-2 font-robotoMono text-xs uppercase">
                2024
              </p>
              <h2 className="z-10 text-5xl lg:text-7xl">Mainnet</h2>
              <p className="z-10 font-robotoMono">
                With the launch of Mainnet, Bundlr will become a fully
                decentralized Proof-of-Stake network.
              </p>
            </div>
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div className="mr-10 text-white">
              <ChevronRight width={'40px'} height={'40px'} />
            </div>
            <img
              src="/new/assets/home/data-sphere.webp"
              alt="mainnet"
              className="absolute -top-72 -left-20 w-[600px] lg:-top-96"
            />
            <img
              src="/new/assets/home/data-sphere.webp"
              alt="mainnet"
              className="absolute -bottom-72 right-0 w-[600px] lg:-bottom-80"
            />
          </div>
          <div className="relative flex h-screen w-screen items-center justify-between bg-black p-5 text-white lg:p-0">
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div />
            <div className="flex max-w-2xl flex-col gap-7">
              <h2 className="z-10 text-5xl lg:text-9xl">THE FUTURE</h2>
              <p className="z-10 font-robotoMono">
                We will continue to incorporate feedback from our community to
                deliver innovations that make Bundlr the world’s data layer.
              </p>
              <p className="z-10 font-robotoMono">
                We will share updates as they become available.
              </p>
            </div>
            <div />
            <img
              src="/new/assets/home/data-cluster-rotated.webp"
              alt="future"
              className="absolute -top-32 left-0 w-[800px] md:-top-96"
            />
            <img
              src="/new/assets/home/data-cluster-rotated.webp"
              alt="future"
              className="lg:-bottom-70 absolute -bottom-56 right-0 w-[600px]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Roadmap
