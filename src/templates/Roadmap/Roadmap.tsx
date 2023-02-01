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
      <div className="h-[1232px] w-full bg-red-500"></div>
      <div ref={scrollRef as any} className="w-full overflow-x-hidden">
        <div className="h-96 w-[4000px] bg-neutral-100 border-red-100 text-[120px]">
          Text should scroll Text should scroll Text should scroll Text should
          scroll Text should scroll Text should scroll Text should scroll Text
          should scroll
        </div>
      </div>
      WIP.
      <Footer />
    </>
  )
}

export default Roadmap
