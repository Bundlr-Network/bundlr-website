import { useEffect, useState } from 'react'

const useHomeStats = () => {
  return {}
}

const HomeStats = () => {
  const { } = useHomeStats()

  return (
    <>
      <section className='h-[489px] flex justify-between'>
        {/* Vertical text 'stats' aligned to left */}
        <div>
          <h3 className='inline-block transform -rotate-90 mt-[92px] ml-[108px] text-[26px] uppercase'>STATS</h3>
        </div>
        {/* 2 columns grid */}
        <div className='grid grid-cols-2 gap-[32px] gap-y-0 pr-[108px] leading-none pt-[83px]'>
          <div>
            <small className="uppercase text-[13px] font-robotoMono leading-none">Upload time</small>
            <h2 className="text-[84px] leading-none">50ms</h2>
          </div>
          <div>
            <small className="uppercase text-[13px] font-robotoMono leading-none">Total number of transactions</small>
            <h2 className="text-[84px] leading-none">302,355,014</h2>
          </div>
          <div>
            <small className="uppercase text-[13px] font-robotoMono leading-none">Transactions in last 24h</small>
            <h2 className="text-[84px] leading-none">402,907</h2>
          </div>
          <div>
            <small className="uppercase text-[13px] font-robotoMono leading-none">TPS</small>
            <h2 className="text-[84px] leading-none">infinity</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeStats
