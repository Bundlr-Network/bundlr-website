import { Button, Footer, NavbarDesktop } from '@/components'
import { DevIcon, DiscordIcon, MinusFooterDetailIcon, PlusFooterDetailIcon, SearchIcon } from '@/svg'
import { useEffect, useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { emit } from 'process'
import { options } from 'preact'

enum FaqCategory {
  All = 'All Categories',
  General = 'General',
  Developers = 'Developers',
  Community = 'Community',
  PressMedia = 'Press & Media'
}

const CTA: React.FC = () => {
  return (
    <div className="h-[616px] relative bg-black text-white py-4 px-6 flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-white font-light font-spaceGrotesk text-6xl max-w-[670px] text-center leading-none mb-11">
        Can&apos;t Find What You&apos;re Looking For?
      </h2>
      <button className='font-robotoMono uppercase text-sm bg-white text-black flex items-center gap-3 px-4 py-3 rounded-full hover:font-bold'>
        Ask us on discord
        <DiscordIcon className='w-5' />
      </button>

      <div className="hidden lg:flex absolute top-0 right-0 overflow-hidden transform rotate-180">
        <img
          src="/assets/community/cta-blocks-2.png"
          className="w-full h-full rounded-lg"
          alt="image1"
        />
      </div>
      <div className="hidden lg:flex absolute top-0 left-0 overflow-hidden">
        <img
          src="/assets/community/cta-blocks-2.png"
          className="w-full h-full rounded-lg"
          alt="image2"
        />
      </div>
    </div>
  )
}

const useFaq = () => {
  const [currentCategory, setCurrentCategory] = useState(FaqCategory.General)

  const [search, setSearch] = useState('')

  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
  }

  const FAQ_CONTENT = [
    {
      title: 'Question 1',
      description: 'Answer 1',
      category: FaqCategory.Developers
    },
    {
      title: 'Question 2',
      description: 'Answer 2',
      category: FaqCategory.Developers
    },
    {
      title: 'Question 3',
      description: 'Answer 3',
      category: FaqCategory.Community
    },
    {
      title: 'Question 4',
      description: 'Answer 4',
      category: FaqCategory.PressMedia
    },
    {
      title: 'Question 5',
      description: 'Answer 5',
      category: FaqCategory.General
    },
    {
      title: 'Question 6',
      description: 'Answer 6',
      category: FaqCategory.General
    },
    {
      title: 'Question 7',

      description: 'Answer 7',
      category: FaqCategory.Community
    },
    {
      title: 'Question 8',
      description: 'Answer 8',
      category: FaqCategory.PressMedia
    },
    {
      title: 'Question 9',
      description: 'Answer 9',
      category: FaqCategory.General
    },
    {
      title: 'Question 10',
      description: 'Answer 10',
      category: FaqCategory.General
    }
  ]

  return {
    PAGE_SEO,
    FAQ_CONTENT,
    currentCategory,
    setCurrentCategory,
    search,
    setSearch
  }
}

const ExpandableSection = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  return (
    <details className="last:border-b-0 border-b-[2.5px] border-dotted pt-4 pb-8 border-gray-400 border-spacing-4">
      <summary className="text-2xl font-light mt-[26px] flex justify-between items-center cursor-pointer font-spaceGrotesk">
        {title}
        <PlusFooterDetailIcon />
        <MinusFooterDetailIcon />
      </summary>
      <p className="font-robotoMono mt-5">{description}</p>
    </details>
  )
}

const Faq: NextPage = () => {
  const {
    PAGE_SEO,
    FAQ_CONTENT,
    currentCategory,
    setCurrentCategory,
    search,
    setSearch
  } = useFaq()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      {/* Categories filter  */}
      <section className="max-w-[976px] ml-auto mr-auto">
        <div className="flex justify-between items-center pb-9 pt-32">
          <h1 className="font-spaceGrotesk text-5xl font-light">FAQs</h1>
          {/* search box with icon on left of the input area */}
          <div className="flex items-center border border-gray-400 rounded-full py-2 px-4 text-lg font-robotoMono gap-3 ">
            <SearchIcon className="ml-2 text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none focus:outline-none text-gray-600"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <hr />
        <ul className="flex justify-between items-center pt-12">
          {Object.values(FaqCategory).map((key) => {
            return (
              <li
                key={key}
                onClick={() =>
                  setCurrentCategory(
                    Object.keys(FaqCategory).find(
                      (k) => FaqCategory[k as keyof typeof FaqCategory] === key
                    )
                  )
                }
                className={`
                ${currentCategory ===
                    Object.keys(FaqCategory).find(
                      (k) => FaqCategory[k as keyof typeof FaqCategory] === key
                    )
                    ? 'font-bold cursor-default bg-black p-[5px] text-white'
                    : ''
                  } cursor-pointer text-sm uppercase font-robotoMono

              
                `}
              >
                {key}
              </li>
            )
          })}
        </ul>
        <ul className="pt-12">
          {FAQ_CONTENT.filter((faq) =>
            currentCategory === 'All'
              ? true
              : FaqCategory[faq.category] === currentCategory
          )
            .filter(
              (faq) =>
                faq.title.toLowerCase().includes(search.toLowerCase()) ||
                faq.description.toLowerCase().includes(search.toLowerCase())
            )
            .map((faq, index) => (
              <>
                <ExpandableSection {...faq} key={`expandable-${index}`} />
              </>
            ))}
        </ul>
      </section>

      <section className="mt-40">
        <CTA />
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Faq
