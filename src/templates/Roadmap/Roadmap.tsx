import { Footer, NavbarDesktop } from '@/components'
import { useLayoutEffect, useRef } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const useRoadmap = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Roadmap',
    description: 'Bear or bull, Bundlr will keep building. Check out what’s coming.'
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
          end: () => '+=' + slider?.current?.offsetWidth,
          markers: true
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
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between">
            <div />
            <div className="flex flex-col gap-7">
              <h2 className="text-7xl">Roadmap</h2>
              <p className="font-robotoMono">
                We’re building a seamless developer experience while
                decentralizing our infrastructure.
              </p>
              <p className="font-robotoMono">Check out Bundlr’s plans ahead</p>
            </div>
            <div className="border-dashed border-t-2 w-24 h-2 border-white" />
          </div>
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between">
            <div className="border-dashed border-t-2 w-24 h-2 border-white" />
            <div className="flex flex-col gap-7 max-w-2xl">
              <p className="font-robotoMono text-xs uppercase">Ongoing</p>
              <h2 className="text-7xl">Chain Integrations </h2>
              <p className="font-robotoMono">
                By supporting the cryptography and clients of a chain, Bundlr
                lets users pay for Bundlr in the token of their preferred chain.
              </p>
              <p className="font-robotoMono">
                This leads to a more seamless developer experience and makes
                Bundlr more accessible to builders in different ecosystems.
              </p>
              <p className="font-robotoMono">
                If you’re part of a project that’s interested in integrating
                your token with Bundlr, feel free to contact us through our
                Partner Program.
              </p>
            </div>
            <div className="border-dashed border-t-2 w-24 h-2 border-white" />
          </div>
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between">
            <div className="border-dashed border-t-2 w-24 h-2 border-white" />
            <div className="flex flex-col gap-7 max-w-2xl">
              <p className="font-robotoMono text-xs uppercase">Q1 2023</p>
              <h2 className="text-7xl">Preweave</h2>
              <p className="font-robotoMono">
                Preweave is a peer-to-peer caching layer built on Bundlr.
                Preweave users will also have the option of permanently storing
                their data on Arweave, seamlessly.
              </p>
            </div>
            <div className="border-dashed border-t-2 w-24 h-2 border-white" />
          </div>
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between">
            <div className="border-dashed border-t-2 w-24 h-2 border-white" />
            <div className="flex flex-col gap-7 max-w-2xl">
              <p className="font-robotoMono text-xs uppercase">Q2 2023</p>
              <h2 className="text-7xl">Bundlr Studio</h2>
              <p className="font-robotoMono">
                Bundlr Studio gives users the option to pay for Bundlr in their
                preferred fiat currency through a simple user interface.
              </p>
              <p className="font-robotoMono">
                This substantially reduces the barrier for non-crypto-natives to
                use Bundlr as a data layer.
              </p>
            </div>
            <div className="border-dashed border-t-2 w-24 h-2 border-white" />
          </div>
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between">
            <div className="border-dashed border-t-2 w-24 h-2 border-white" />
            <div className="flex flex-col gap-7 max-w-2xl">
              <p className="font-robotoMono text-xs uppercase">Q4 2023</p>
              <h2 className="text-7xl">Testnet </h2>
              <p className="font-robotoMono">
                Testnet will be the final version of the network before Bundlr
                goes to Mainnet.
              </p>
            </div>
            <div className="border-dashed border-t-2 w-24 h-2 border-white" />
          </div>
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between">
            <div className="border-dashed border-t-2 w-24 h-2 border-white" />
            <div className="flex flex-col gap-7 max-w-2xl">
              <p className="font-robotoMono text-xs uppercase">2024</p>
              <h2 className="text-7xl">Mainnet</h2>
              <p className="font-robotoMono">
                With the launch of Mainnet, Bundlr will become a fully
                decentralized Proof-of-Stake network.
              </p>
            </div>
            <div className="border-dashed border-t-2 w-24 h-2 border-white" />
          </div>
          <div className="h-screen w-screen bg-black text-white flex items-center justify-between">
            <div className="border-dashed border-t-2 w-24 h-2 border-white" />
            <div className="flex flex-col gap-7 max-w-2xl">
              <h2 className="text-9xl">THE FUTURE</h2>
              <p className="font-robotoMono">
                We will continue to incorporate feedback from our community to
                deliver innovations that make Bundlr the world’s data layer.
              </p>
              <p className="font-robotoMono">
                We will share updates as they become available.
              </p>
            </div>
            <div />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Roadmap
