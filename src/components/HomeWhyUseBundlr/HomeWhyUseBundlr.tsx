import { useEffect, useState } from 'react'

import SectionTitle from '../SectionTitle'

const useHomeWhyUseBundlr = () => {
  const DEFINITIONS = [
    {
      title: 'Multichain Compatible',
      description: 'Upload your data from any major blockchain'
    },

    {
      title: 'Pay With Any Token',
      description: 'Pay in any major token including ETH, SOL, MATIC, and more'
    },

    {
      title: 'Pay Once. Stored Forever.',
      description:
        'Pay just once when you have your data stored forever on Arweave'
    },

    {
      title: 'Own Your Data',
      description:
        'With no singular entity holding your data, you’re always in control'
    },

    {
      title: 'Unlimited Storage',
      description:
        'Thanks to Arweave, you’ll never be restricted by data limits ever again'
    },

    {
      title: 'Guaranteed Seeding',
      description: 'Your data is guaranteed to be uploaded to Arweave'
    },

    {
      title: 'Instant Data',
      description:
        'From the moment you upload, your data is instantly accessible'
    },

    {
      title: 'Free Transactions',
      description: 'Free for data uploads under 100kb'
    }
  ]

  return { DEFINITIONS }
}

const HomeWhyUseBundlr = () => {
  const { DEFINITIONS } = useHomeWhyUseBundlr()

  return (
    <>
      <section className='bg-ghostWhite'>
        <div className="pt-[52px] lg:mt-[91px] ml-[20px] lg:ml-[109px]">
          <SectionTitle title="Why use Bundlr" />
        </div>
        <ul className="flex flex-col gap-10 lg:ml-auto ml-[20px] mr-[109px] max-w-[1128px] mt-[49px] lg:mt-[126px] mb-[172px]">
          {/* Dots border bottom */}
          {DEFINITIONS.map((definition, index) => {
            return (
              <li
                key={`definition-${index}`}
                className={`flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between border-b-[2.5px] border-dotted pb-9 border-gray-400 border-spacing-4 ${index === DEFINITIONS.length - 1 ? 'border-b-0' : ''
                  }`}
              >
                <h3 className="text-3xl whitespace-nowrap">
                  {definition.title}
                </h3>
                <p className="text-base font-robotoMono">
                  {definition.description}
                </p>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default HomeWhyUseBundlr
