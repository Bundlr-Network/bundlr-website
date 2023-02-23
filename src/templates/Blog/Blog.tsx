import { Footer, Heading, JoinTheCommunity, NavbarDesktop } from '@/components'
import { useEffect, useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'

const useBlog = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Blog',
    description:
      'Read expert insights and thought-provoking articles on all that’s happening at the frontier of data.'
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

  // const featuredPosts = [
  //   ...latestArticles.filter((article: any) =>
  //     featuredGuids.includes(article.guid)
  //   )
  // ]

  const featuredPosts = [
    {
      title: 'Unveiling the Next Evolution of Bundlr',
      pubDate: 'February 21, 2023',
      link: 'https://bundlr.mirror.xyz/sJpTh3kVJd3XIGIFJ_cmn5u4CoyxAC3Ujiif-QKEHq0',
      thumbnail: '/new/assets/shared/next-evolution.png'
    }
  ]

  const [loading, setLoading] = useState(true)

  const MEDIUM_FEED_URL = 'https://medium.com/feed/bundlr-network'

  const CUSTOM_ARTICLE = [{
    title: 'New Year’s NFT from Bundlr',
    pubDate: 'January 18, 2023',
    link: 'https://mirror.xyz/0x9AbB09BF9F58E72A532E859d798eB4E8e10A35e1/DwsDnsqP9qU11dtnsE6w1VpgQ-rvxnR8RvXO6-Wmhe8',
    thumbnail: '/new/assets/shared/mirror-post.webp'
  }]

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_FEED_URL}`)
      .then((res) => res.json())
      .then((res) => {
        setLatestArticles([...CUSTOM_ARTICLE, ...res.items.filter(article => article.title !== "Unveiling the Next Evolution of Bundlr")])
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
      <div className="relative">
        <Heading level={1} className="text-center py-14 lg:pt-24 z-10">
          Bundlr Blog
        </Heading>
        <img
          src="/new/assets/home/data-donuts.webp"
          alt="delicious donuts of data"
          className="mx-auto w-[500px] fixed -left-28 top-32 hidden lg:block -z-10"
        />
      </div>
      <section className="px-4 md:px-5 lg:px-[79px] flex gap-10 justify-center flex-col lg:flex-row">
        <a href={featuredPosts[0]?.link} target="_blank" rel="noreferrer">
          <div className="md:sticky top-10 left-0 self-start">
            <div className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg w-full lg:w-[726px] ">
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
                      {new Date(featuredPosts[0]?.pubDate).toLocaleDateString(
                        'en-US',
                        {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        }
                      )}
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
          <ul className="flex flex-wrap gap-7">
            {latestArticles.map((article, index) => {
              return (
                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg w-full md:w-[calc(50%-14px)] lg:w-full"
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
                            {new Date(article?.pubDate).toLocaleDateString(
                              'en-US',
                              {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              }
                            )}
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
