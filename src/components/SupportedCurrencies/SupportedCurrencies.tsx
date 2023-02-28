import AlgorandIcon from '@assets/currencies/algorand.svg'
import AptosIcon from '@assets/currencies/aptos.svg'
import ArbitrumIcon from '@assets/currencies/arbitrum.svg'
import ArweaveIcon from '@assets/currencies/arweave.svg'
import AvalancheIcon from '@assets/currencies/avalanche.svg'
import BobaIcon from '@assets/currencies/boba.svg'
import ChainlinkIcon from '@assets/currencies/chainlink.svg'
import EthereumIcon from '@assets/currencies/ethereum.svg'
import FantomIcon from '@assets/currencies/fantom.svg'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import NearIcon from '@assets/currencies/near.svg'
import OptimismIcon from '@assets/currencies/optimism.svg'
import PolygonIcon from '@assets/currencies/polygon.svg'
import SolanaIcon from '@assets/currencies/solana.svg'

const useSupportedCurrencies = () => {
  const SUPPORTED_CURRENCIES = [
    {
      company: 'Arweave',
      ticker: 'AR',
      icon: ArweaveIcon
    },
    {
      company: 'Ethereum',
      ticker: 'ETH',
      icon: EthereumIcon
    },
    {
      company: 'Solana',
      ticker: 'SOL',
      icon: SolanaIcon
    },
    {
      company: 'Polygon',
      ticker: 'MATIC',
      icon: PolygonIcon
    },
    {
      company: 'Aptos',
      ticker: 'APT',
      icon: AptosIcon
    },
    {
      company: 'Boba',
      ticker: 'BOBA',
      icon: BobaIcon
    },
    {
      company: 'Algorand',
      ticker: 'ALGO',
      icon: AlgorandIcon
    },
    {
      company: 'Arbitrum',
      ticker: 'ETH',
      icon: ArbitrumIcon
    },
    {
      company: 'Avalanche',
      ticker: 'AVAX',
      icon: AvalancheIcon
    },
    {
      company: 'Fantom',
      ticker: 'FTM',
      icon: FantomIcon
    },
    {
      company: 'Near',
      ticker: 'NEAR',
      icon: NearIcon
    },
    {
      company: 'Optimism',
      ticker: 'ETH',
      icon: OptimismIcon
    },
    {
      company: 'Chainlink',
      ticker: 'LINK',
      icon: ChainlinkIcon
    },
    {
      company: 'Boba',
      ticker: 'ETH',
      icon: BobaIcon
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
        className={`flex flex-col items-center justify-center gap-11 rounded-[20px] bg-white pt-[40px] pb-[64px] text-center text-black`}
      >
        <h2 className="font-robotoMono">SUPPORTED TOKENS</h2>
        <Marquee gradientColor={[255, 255, 255]} speed={45}>
          <div className="flex items-center gap-10 lg:gap-20">
            {[
              ...SUPPORTED_CURRENCIES
              // ...SUPPORTED_CURRENCIES,
              // ...SUPPORTED_CURRENCIES,
              // ...SUPPORTED_CURRENCIES,
              // ...SUPPORTED_CURRENCIES
            ].map((currency, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center gap-5
                ${index === 0 && 'ml-[80px]'}
                `}
                >
                  <Image
                    src={currency.icon}
                    alt={currency.ticker}
                    width={54}
                    height={54}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-robotoMono text-lg uppercase">
                      {' '}
                      {currency.ticker}
                    </p>
                    <p className="font-robotoMono text-xs uppercase">
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
