import { useEffect, useState } from 'react'

const useHomeStats = () => {
  const STATS = [
    {
      title: 'Transactions in last 24h',
      description: '402,907'
    },
    {
      title: 'Upload time',
      description: '8ms'
    },
    {
      title: 'Total number of transactions',
      description: '302,355,014'
    },
  ]

  return { STATS }
}

const HomeStats = () => {
  const { STATS } = useHomeStats()

  return (
    <>
      <section className="h-auto px-4 py-20 lg:py-0 lg:h-[332px] flex items-center">
        {/* Vertical text 'stats' aligned to left */}
        <div>
          <h3 className="hidden lg:inline-block transform -rotate-90 ml-[108px] text-[26px] uppercase font-fkDisplay">
            STATS
          </h3>
        </div>
        {/* 2 columns grid */}
        <div className="flex lg:flex-row flex-col gap-10 leading-none lg:ml-auto lg:pr-[109px]">
          {STATS.map((stat, index) => (
            <div key={index}>
              <small className="uppercase text-[13px] font-robotoMono leading-none">
                {stat.title}
              </small>
              <h2 className="text-5xl lg:text-[74px] leading-none font-fkDisplay">
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
