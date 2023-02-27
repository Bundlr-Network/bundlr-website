import { useLayoutEffect, useRef } from 'react'

import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const useHomeHorizontalSection = () => {
  return {}
}

const HomeHorizontalSection = () => {
  const {} = useHomeHorizontalSection()

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
          snap: 1 / (panels.length - 1),
          end: () => '+=' + slider?.current?.offsetWidth,
          markers: true
        }
      })
    }, wrapper)
    return () => ctx.revert()
  })

  return (
    <>
      <div ref={wrapper}>
        <div
          ref={slider}
          className="flex h-screen w-screen flex-col flex-wrap overflow-hidden"
        >
          <div className="h-screen w-screen bg-blue-500">ONE</div>
          <div className="h-screen w-screen bg-red-500">ONE</div>
          <div className="h-screen w-screen bg-green-500">ONE</div>
        </div>
      </div>
    </>
  )
}

export default HomeHorizontalSection
