import { useEffect, useRef } from "react"

const useHorizontalScroll = () => {
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
};

export default useHorizontalScroll