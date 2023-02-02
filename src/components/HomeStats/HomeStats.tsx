import { useEffect, useState } from 'react'

const useHomeStats = () => {
  const STATS = [
    {
      title: 'Upload time',
      description: '50ms'
    },
    {
      title: 'Total number of transactions',
      description: '302,355,014'
    },
    {
      title: 'Transactions in last 24h',
      description: '402,907'
    },
    {
      title: 'TPS',
      description: 'infinity'
    }
  ]

  return { STATS }
}

const HomeStats = () => {
  const { STATS } = useHomeStats()

  return (
    <>
      <section className="h-[489px] flex justify-between">
        {/* Vertical text 'stats' aligned to left */}
        <div>
          <h3 className="inline-block transform -rotate-90 mt-[92px] ml-[108px] text-[26px] uppercase font-fkDisplay">
            STATS
          </h3>
        </div>
        {/* 2 columns grid */}
        <div className="grid grid-cols-2 gap-[32px] gap-y-0 pr-[108px] leading-none pt-[83px]">
          {STATS.map((stat, index) => (
            <div key={index}>
              <small className="uppercase text-[13px] font-robotoMono leading-none">
                {stat.title}
              </small>
              <h2 className="text-[84px] leading-none font-fkDisplay">
                {stat.description}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomeStats
