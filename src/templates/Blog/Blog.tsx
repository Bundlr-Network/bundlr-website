import { Footer, JoinTheCommunity, NavbarDesktop } from '@/components'
import { useEffect, useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useBlog = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Blog',
    description: 'Read expert insights and thought-provoking articles on all that’s happening at the frontier of data.'
  }

  return { PAGE_SEO }
}

export interface ArticleResponseProps {
  status: string
  feed: Feed
  items: Item[]
}

export interface Feed {
  url: string
  title: string
  link: string
  author: string
  description: string
  image: string
}

export interface Item {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: unknown
  categories: any[]
}

export const useLatestArticles = () => {
  const [latestArticles, setLatestArticles] = useState<
    ArticleResponseProps['items']
  >([])

  const featuredGuids = ['https://medium.com/p/fd1722156dc0']

  const featuredPosts = [
    ...latestArticles.filter((article: any) =>
      featuredGuids.includes(article.guid)
    )
  ]

  const [loading, setLoading] = useState(true)

  const MEDIUM_FEED_URL = 'https://medium.com/feed/bundlr-network'

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_FEED_URL}`)
      .then((res) => res.json())
      .then((res) => {
        setLatestArticles(res.items)
        setLoading(false)
      })
  }, [])

  return { latestArticles, featuredPosts, loading }
}

const Blog: NextPage = () => {
  const { PAGE_SEO } = useBlog()
  const { latestArticles, featuredPosts } = useLatestArticles()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <h1 className="text-5xl lg:text-7xl font-fkDisplay text-center pt-14 lg:pt-24 pb-14 font-light">
        Bundlr Blog
      </h1>
      <section className="px-4 md:px-5 lg:px-[79px] flex gap-10 justify-center flex-col md:flex-row">
        <a href={featuredPosts[0]?.link} target="_blank" rel="noreferrer">
          <div className="md:sticky top-10 left-0 self-start">
            <div className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg w-full md:w-[726px] ">
              {/* add gradient background that goes from gray to transparent */}
              <div className="flex flex-col gap-8 bg-seashell rounded-lg overflow-hidden">
                {/* make image as background of rectangle box */}
                <div
                  className="w-full h-[215px] lg:h-[427px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${featuredPosts[0]?.thumbnail})`
                  }}
                />
                <div className="flex flex-col gap-4 px-5 pb-10">
                  <h3 className="text-black font-light text-sm font-robotoMono uppercase">
                    {featuredPosts[0]?.title}
                  </h3>
                  <div className="flex justify-between">
                    <p className="text-black font-light text-sm font-robotoMono uppercase">
                      {featuredPosts[0]?.pubDate}
                    </p>
                    <p className="text-black font-light text-sm font-robotoMono">
                      [ 3 min read ]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="">
          <ul className="flex gap-7 flex-col">
            {latestArticles.map((article, index) => {
              return (
                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className='rounded-lg w-full md:w-[334px]'
                  key={`blog-post-${index}`}
                >
                  <li className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg">
                    {/* add gradient background that goes from gray to transparent */}

                    <div className="flex flex-col gap-8 bg-seashell rounded-lg overflow-hidden">
                      {/* make image as background of rectangle box */}
                      <div
                        className="w-full h-[215px] bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${article.thumbnail})`
                        }}
                      />
                      <div className="flex flex-col gap-4 px-5 pb-10">
                        <h3 className="text-black font-light text-sm font-robotoMono uppercase line-clamp-2">
                          {article.title}
                        </h3>
                        <div className="flex justify-between">
                          <p className="text-black font-light text-sm font-robotoMono uppercase">
                            {article.pubDate}
                          </p>
                          <p className="text-black font-light text-sm font-robotoMono">
                            [ 3 min read ]
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </a>
              )
            })}
          </ul>
        </div>
      </section>
      <JoinTheCommunity />
      <Footer />
    </>
  )
}

export default Blog
