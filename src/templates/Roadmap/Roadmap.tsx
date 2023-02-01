import { Footer, NavbarDesktop } from '@/components'
import { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useRoadmap = () => {
  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
  }

  return { PAGE_SEO }
}

export function useHorizontalScroll() {
  const elRef = useRef()
  useEffect(() => {
    const el = elRef.current as any
    if (el) {
      const onWheel = (e: any) => {
        if (el.scrollWidth - el.clientWidth <= el.scrollLeft + e.deltaY) return
        if (e.deltaY == 0) return
        e.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + e.deltaY
          // behavior: 'smooth'
        })
      }
      el.addEventListener('wheel', onWheel)
      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [])
  return elRef
}

const Roadmap: NextPage = () => {
  const { PAGE_SEO } = useRoadmap()
  const scrollRef = useHorizontalScroll()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <div
        ref={scrollRef as any}
        className="w-screen overflow-x-hidden flex"
        // screen height - nav height
        style={{ height: 'calc(100vh - 90px)' }}
      >
        <div className="h-full w-screen shrink-0 bg-red-500"></div>
        <div className="h-full w-screen shrink-0 bg-blue-500"></div>
        <div className="h-full w-screen	shrink-0 bg-green-500"></div>
      </div>
      <div className="h-96 w-[4000px] bg-neutral-100 border-red-100 text-[120px]">
        Text should scroll Text should scroll Text should scroll Text should
        scroll Text should scroll Text should scroll Text should scroll Text
        should scroll
      </div>
      WIP.
      <Footer />
    </>
  )
}

export default Roadmap
