import { useEffect, useState } from 'react'

const useHomeStats = () => {

  const [transactions, setTransactions] = useState<null | number>(null)
  const [totalTransactions, setTotalTransactions] = useState<null | number>(null)


  const STATS = [
    {
      title: 'Transactions in last 24h',
      description: transactions
        ? transactions?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : 'Loading...',
    },
    {
      title: 'Upload time',
      description: '8ms'
    },
    {
      title: 'Total number of transactions',
      description: totalTransactions
        ? totalTransactions?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : 'Loading...',
    },
  ]

  useEffect(() => {
    fetchTransactions()
  }, [])

  const fetchTransactions = async () => {
    // get node1.bundlr.network/status
    const node1 = await fetch('https://node1.bundlr.network/status')
    const node1Json = await node1.json()

    // get node2.bundlr.network/status
    const node2 = await fetch('https://node2.bundlr.network/status')
    const node2Json = await node2.json()

    const last24Sum = node1Json.last24h + node2Json.last24h

    const totalSum = node1Json.totalTransactions + node2Json.totalTransactions

    setTransactions(last24Sum)
    setTotalTransactions(totalSum)
  }

  return { STATS }
}

const HomeStats = () => {
  const { STATS } = useHomeStats()

  return (
    <>
      <section className="items-center justify-center h-auto px-4 py-10 lg:py-20 lg:py-0 lg:h-[232px] flex flex-col md:flex-row md:items-left md:items-center gap-10 overflow-hidden">
        {/* Vertical text 'stats' aligned to left */}

        <div className="hidden md:inline-block">
          <p className="transform rotate-180 text-center ml-5 lg:ml-[79px] text-[26px] uppercase" style={{ writingMode: 'vertical-rl' }}>
            Stats
          </p>
        </div>

        <div className="md:hidden inline-block">
          <h3 className="text-[26px] uppercase">Stats</h3>
        </div>

        {/* 2 columns grid */}
        <div className="flex md:flex-row flex-col gap-10 leading-none md:ml-auto md:pr-4 lg:pr-[79px] items-center justify-center md:justify-start">
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
