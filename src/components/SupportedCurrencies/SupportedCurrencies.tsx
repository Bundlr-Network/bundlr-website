import AptosIcon from '@assets/currencies/aptos.svg'
import Marquee from 'react-fast-marquee'

const useSupportedCurrencies = () => {
  const SUPPORTED_CURRENCIES = [
    {
      company: 'Arweave',
      ticker: 'AR',
      icon: '/assets/currencies/arweave.svg'
    },
    {
      company: 'Ethereum',
      ticker: 'ETH',
      icon: '/assets/currencies/ethereum.svg'
    },
    {
      company: 'Solana',
      ticker: 'SOL',
      icon: '/assets/currencies/solana.svg'
    },
    {
      company: 'Polygon',
      ticker: 'MATIC',
      icon: '/assets/currencies/polygon.svg'
    },
    {
      company: 'Aptos',
      ticker: 'APT',
      icon: '/assets/currencies/aptos.svg'
    },
    {
      company: 'Boba',
      ticker: 'BOBA',
      icon: '/assets/currencies/boba.svg'
    },
    {
      company: 'Algorand',
      ticker: 'ALGO',
      icon: '/assets/currencies/algorand.svg'
    },
    {
      company: 'Arbitrum',
      ticker: 'ETH',
      icon: '/assets/currencies/arbitrum.svg'
    },
    {
      company: 'Avalanche',
      ticker: 'AVAX',
      icon: '/assets/currencies/avalanche.svg'
    },
    {
      company: 'Fantom',
      ticker: 'FTM',
      icon: '/assets/currencies/fantom.svg'
    },
    {
      company: 'Near',
      ticker: 'NEAR',
      icon: '/assets/currencies/near.svg'
    },
    {
      company: 'Optimism',
      ticker: 'ETH',
      icon: '/assets/currencies/optimism.svg'
    },
    {
      company: 'Chainlink',
      ticker: 'LINK',
      icon: '/assets/currencies/chainlink.svg'
    },
    {
      company: 'Boba',
      ticker: 'ETH',
      icon: '/assets/currencies/boba.svg'
    }
  ]

  return { SUPPORTED_CURRENCIES }
}

const SupportedCurrencies = ({
  customTitle,
  scheme
}: {
  customTitle?: string
  scheme?: 'light' | 'dark'
}) => {
  const { SUPPORTED_CURRENCIES } = useSupportedCurrencies()

  return (
    <>
      <section
        className={`pt-[40px] pb-[64px] flex flex-col items-center justify-center text-center bg-white text-black gap-11 rounded-[20px]`}
      >
        <h2 className='font-robotoMono'>SUPPORTED TOKENS</h2>
        <Marquee gradientColor={[255, 255, 255]} speed={45}>
          <div className="flex items-center gap-10 lg:gap-20">
            {[
              ...SUPPORTED_CURRENCIES,
              // ...SUPPORTED_CURRENCIES,
              // ...SUPPORTED_CURRENCIES,
              // ...SUPPORTED_CURRENCIES,
              // ...SUPPORTED_CURRENCIES
            ].map((currency, index) => {
              return (
                <div key={index} className={`flex flex-col items-center justify-center gap-5
                ${index === 0 && 'ml-[80px]'}
                `}>
                  <img
                    src={currency.icon}
                    alt={currency.ticker}
                    width={54}
                    height={54}
                  // className="invert"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="uppercase font-robotoMono text-lg">
                      {' '}
                      {currency.ticker}
                    </p>
                    <p className="uppercase font-robotoMono text-xs">
                      {' '}
                      {currency.company}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Marquee>
      </section>
    </>
  )
}

export default SupportedCurrencies
