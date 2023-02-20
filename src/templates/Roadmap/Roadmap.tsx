import { Footer, NavbarDesktop } from '@/components'
import { useLayoutEffect, useRef } from 'react'

import { ChevronRight } from '@/svg'
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
          className="flex flex-wrap flex-col w-screen h-screen overflow-hidden bg-black"
        >
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between relative pl-8 lg:pl-0">
            <div />
            <div className="flex flex-col gap-7">
              <h2 className="text-5xl lg:text-7xl z-10">Roadmap</h2>
              <p className="font-robotoMono z-10">
                We’re building a seamless developer experience while
                decentralizing our infrastructure.
              </p>
              <p className="font-robotoMono z-10">
                Check out Bundlr’s plans ahead
              </p>
            </div>
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div className="text-white mr-10">
              <ChevronRight width={'40px'} height={'40px'} />
            </div>
            {/* <img
              src="/assets/roadmap/roadmap.png"
              alt="roadmap"
              className="absolute lg:-left-96 xl:-left-72 -top-96"
            /> */}
          </div>
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between relative">
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div />
            <div className="flex flex-col gap-7 max-w-2xl mb-14 md:mb-0">
              <p className="font-robotoMono text-xs uppercase z-10 bg-black px-3 py-2 border rounded-full self-start border-white">Ongoing</p>
              <h2 className="text-5xl lg:text-7xl z-10">Chain Integrations </h2>
              <p className="font-robotoMono z-10">
                By supporting the cryptography and clients of a chain, Bundlr
                lets users pay for Bundlr in the token of their preferred chain.
              </p>
              <p className="font-robotoMono z-10">
                This leads to a more seamless developer experience and makes
                Bundlr more accessible to builders in different ecosystems.
              </p>
              <p className="font-robotoMono z-10">
                If you’re part of a project that’s interested in integrating
                your token with Bundlr, feel free to contact us through our
                Partner Program.
              </p>
            </div>
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" />\ */}
            <div className="text-white mr-10">
              <ChevronRight width={'40px'} height={'40px'} />
            </div>

            <img
              src="/new/assets/home/cloud.webp"
              alt="roadmap"
              className="absolute -top-32 md:-top-72 -left-56 hidden lg:block w-[900px]"
            />
            <img
              src="/new/assets/home/cloud.webp"
              alt="roadmap"
              className="absolute -bottom-32 md:-bottom-72 right-0 w-[900px]"
            />
          </div>
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between relative">
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div />
            <div className="flex flex-col gap-7 max-w-2xl">
              <p className="font-robotoMono text-xs uppercase z-10 bg-black px-3 py-2 border rounded-full self-start border-white">Q1 2023</p>
              <h2 className="text-5xl lg:text-7xl z-10">Preweave</h2>
              <p className="font-robotoMono z-10">
                Preweave is a peer-to-peer caching layer built on Bundlr.
                Preweave users will also have the option of permanently storing
                their data on Arweave, seamlessly.
              </p>
            </div>
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div className="text-white mr-10">
              <ChevronRight width={'40px'} height={'40px'} />
            </div>
            <img
              src="/new/assets/home/data-spiral-flop.webp"
              alt="preweave"
              className="absolute -top-60 lg:-top-80 -left-48 w-[700px]"
            />
            <img
              src="/new/assets/home/data-spiral.webp"
              alt="preweave"
              className="absolute -bottom-60 lg:-bottom-80 -right-0 w-[700px]"
            />
          </div>
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between relative z-10">
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div />
            <div className="flex flex-col gap-7 max-w-2xl">
              <p className="font-robotoMono text-xs uppercase z-10 bg-black px-3 py-2 border rounded-full self-start border-white">Q2 2023</p>
              <h2 className="text-5xl lg:text-7xl z-10">Bundlr Studio</h2>
              <p className="font-robotoMono z-10">
                Bundlr Studio gives users the option to pay for Bundlr in their
                preferred fiat currency through a simple user interface.
              </p>
              <p className="font-robotoMono z-10">
                This substantially reduces the barrier for non-crypto-natives to
                use Bundlr as a data layer.
              </p>
            </div>
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div className="text-white mr-10">
              <ChevronRight width={'40px'} height={'40px'} />
            </div>
            <img
              src="/new/assets/home/data-cloud-v2.webp"
              alt="studio"
              className="absolute -top-32 md:-top-56 -left-20 lg:-left-56 w-[800px]"
            />
            <img
              src="/new/assets/home/data-cloud-v2.webp"
              alt="studio"
              className="absolute -bottom-36 md:-bottom-56 -right-0 lg:-right-56 w-[800px]"
            />
          </div>
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between">
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div />
            <div className="flex flex-col gap-7 max-w-2xl">
              <p className="font-robotoMono text-xs uppercase z-10 bg-black px-3 py-2 border rounded-full self-start border-white">Q4 2023</p>
              <h2 className="text-5xl lg:text-7xl z-10">Testnet </h2>
              <p className="font-robotoMono z-10">
                Testnet will be the final version of the network before Bundlr
                goes to Mainnet.
              </p>
            </div>
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div className="text-white mr-10">
              <ChevronRight width={'40px'} height={'40px'} />
            </div>
            <img
              src="/new/assets/home/data-exponential.webp"
              alt="testnet"
              className="absolute -top-32 lg:-top-56 left-0 rotate-180 w-[900px]"
            />
            <img
              src="/new/assets/home/data-exponential.webp"
              alt="testnet"
              className="absolute -bottom-32 lg:-bottom-56 right-20 lg:right-0 w-[900px]"
            />
            {/* <img
              src="/new/assets/home/data-exponential.webp"
              alt="testnet"
              className="absolute bottom-0 right-0"
            /> */}
          </div>
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between relative">
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div />
            <div className="flex flex-col gap-7 max-w-2xl">
              <p className="font-robotoMono text-xs uppercase z-10 bg-black px-3 py-2 border rounded-full self-start border-white">2024</p>
              <h2 className="text-5xl lg:text-7xl z-10">Mainnet</h2>
              <p className="font-robotoMono z-10">
                With the launch of Mainnet, Bundlr will become a fully
                decentralized Proof-of-Stake network.
              </p>
            </div>
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div className="text-white mr-10">
              <ChevronRight width={'40px'} height={'40px'} />
            </div>
            <img
              src="/new/assets/home/data-sphere.webp"
              alt="mainnet"
              className="absolute -top-72 lg:-top-96 -left-20 w-[600px]"
            />
            <img
              src="/new/assets/home/data-sphere.webp"
              alt="mainnet"
              className="absolute -bottom-72 lg:-bottom-80 right-0 w-[600px]"
            />
          </div>
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between relative p-5 lg:p-0">
            {/* <div className="border-dashed border-t-2 w-24 h-2 border-white" /> */}
            <div />
            <div className="flex flex-col gap-7 max-w-2xl">
              <h2 className="text-5xl lg:text-9xl z-10">THE FUTURE</h2>
              <p className="font-robotoMono z-10">
                We will continue to incorporate feedback from our community to
                deliver innovations that make Bundlr the world’s data layer.
              </p>
              <p className="font-robotoMono z-10">
                We will share updates as they become available.
              </p>
            </div>
            <div />
            <img
              src="/new/assets/home/data-cluster-rotated.webp"
              alt="future"
              className="absolute -top-56 lg:-top-96 left-0 w-[800px]"
            />
            <img
              src="/new/assets/home/data-cluster.webp"
              alt="future"
              className="absolute -bottom-56 lg:-bottom-96 right-0 w-[600px]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Roadmap
