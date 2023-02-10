import AptosIcon from '@assets/currencies/aptos.svg'
import Marquee from 'react-fast-marquee'

const useSupportedCurrencies = () => {
  const SUPPORTED_CURRENCIES = [
    {
      title: 'Algorand',
      icon: '/assets/currencies/algorand.svg'
    },
    {
      title: 'Aptos',
      icon: '/assets/currencies/aptos.svg'
    },
    {
      title: 'Arbitrum',
      icon: '/assets/currencies/arbitrum.svg'
    },
    {
      title: 'Arweave',
      icon: '/assets/currencies/arweave.svg'
    },
    {
      title: 'Avalanche',
      icon: '/assets/currencies/avalanche.svg'
    },
    {
      title: 'Boba',
      icon: '/assets/currencies/boba.svg'
    },
    {
      title: 'Chainlink',
      icon: '/assets/currencies/chainlink.svg'
    },
    {
      title: 'Ethereum',
      icon: '/assets/currencies/ethereum.svg'
    },
    {
      title: 'Fantom',
      icon: '/assets/currencies/fantom.svg'
    },
    {
      title: 'Near',
      icon: '/assets/currencies/near.svg'
    },
    {
      title: 'Optimism',
      icon: '/assets/currencies/optimism.svg'
    },
    {
      title: 'Polygon',
      icon: '/assets/currencies/polygon.svg'
    },
    {
      title: 'Solana',
      icon: '/assets/currencies/solana.svg'
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
        <h2 className='font-robotoMono'>SUPPORTED CURRENCIES</h2>
        <Marquee gradientColor={[255, 255, 255]} speed={25}>
          <div className="flex items-center gap-20">
            {[
              ...SUPPORTED_CURRENCIES,
              ...SUPPORTED_CURRENCIES,
              ...SUPPORTED_CURRENCIES,
              ...SUPPORTED_CURRENCIES,
              ...SUPPORTED_CURRENCIES
            ].map((currency, index) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center gap-5">
                  <img
                    src={currency.icon}
                    alt={currency.title}
                    width={54}
                    height={54}
                    className="invert"
                  />
                  <p className="uppercase font-robotoMono text-lg">
                    {' '}
                    {currency.title}
                  </p>
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
