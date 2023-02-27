import { useEffect, useState } from 'react'

const useHomeStats = () => {
  const [transactions, setTransactions] = useState<null | number>(null)
  const [totalTransactions, setTotalTransactions] = useState<null | number>(
    null
  )

  const STATS = [
    {
      title: 'Transactions in last 24h',
      description: transactions
        ? transactions?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : 'Loading...'
    },
    {
      title: 'Upload time',
      description: '8ms'
    },
    {
      title: 'Total number of transactions',
      description: totalTransactions
        ? totalTransactions?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : 'Loading...'
    }
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
      <section className="md:items-left flex h-auto flex-col items-center justify-center gap-10 overflow-hidden px-4 py-10 md:flex-row md:items-center lg:h-[232px] lg:py-20 lg:py-0">
        {/* Vertical text 'stats' aligned to left */}

        <div className="hidden md:inline-block">
          <p
            className="ml-5 rotate-180 transform text-center text-[26px] uppercase lg:ml-[79px]"
            style={{ writingMode: 'vertical-rl' }}
          >
            Stats
          </p>
        </div>

        <div className="inline-block md:hidden">
          <h3 className="text-[26px] uppercase">Stats</h3>
        </div>

        {/* 2 columns grid */}
        <div className="flex flex-col items-center justify-center gap-10 leading-none md:ml-auto md:flex-row md:justify-start md:pr-4 lg:pr-[79px]">
          {STATS.map((stat, index) => (
            <div key={index}>
              <small className="font-robotoMono text-[13px] uppercase leading-none">
                {stat.title}
              </small>
              <h2 className="font-fkDisplay text-5xl leading-none lg:text-[74px]">
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
