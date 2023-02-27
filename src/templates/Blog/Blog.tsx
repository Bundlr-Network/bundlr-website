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

  const CUSTOM_ARTICLE = [
    {
      title: 'New Year’s NFT from Bundlr',
      pubDate: 'January 18, 2023',
      link: 'https://mirror.xyz/0x9AbB09BF9F58E72A532E859d798eB4E8e10A35e1/DwsDnsqP9qU11dtnsE6w1VpgQ-rvxnR8RvXO6-Wmhe8',
      thumbnail: '/new/assets/shared/mirror-post.webp'
    }
  ]

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_FEED_URL}`)
      .then((res) => res.json())
      .then((res) => {
        setLatestArticles([
          ...CUSTOM_ARTICLE,
          ...res.items.filter(
            (article: any) =>
              article.title !== 'Unveiling the Next Evolution of Bundlr'
          )
        ])
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
        <Heading level={1} className="z-10 py-14 text-center lg:pt-24">
          Bundlr Blog
        </Heading>
        <img
          src="/new/assets/home/data-donuts.webp"
          alt="delicious donuts of data"
          className="fixed -left-28 top-32 -z-10 mx-auto hidden w-[500px] lg:block"
        />
      </div>
      <section className="flex flex-col justify-center gap-10 px-4 md:px-5 lg:flex-row lg:px-[79px]">
        <a href={featuredPosts[0]?.link} target="_blank" rel="noreferrer">
          <div className="top-10 left-0 self-start md:sticky">
            <div className="w-full rounded-lg bg-gradient-to-b from-[#968982] to-transparent p-[1px] lg:w-[726px] ">
              {/* add gradient background that goes from gray to transparent */}
              <div className="flex flex-col gap-8 overflow-hidden rounded-lg bg-seashell">
                {/* make image as background of rectangle box */}
                <div
                  className="h-[215px] w-full bg-cover bg-center lg:h-[427px]"
                  style={{
                    backgroundImage: `url(${featuredPosts[0]?.thumbnail})`
                  }}
                />
                <div className="flex flex-col gap-4 px-5 pb-10">
                  <h3 className="font-robotoMono text-sm font-light uppercase text-black">
                    {featuredPosts[0]?.title}
                  </h3>
                  <div className="flex justify-between">
                    <p className="font-robotoMono text-sm font-light uppercase text-black">
                      {new Date(featuredPosts[0]?.pubDate).toLocaleDateString(
                        'en-US',
                        {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        }
                      )}
                    </p>
                    <p className="font-robotoMono text-sm font-light text-black">
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
                  className="w-full rounded-lg md:w-[calc(50%-14px)] lg:w-full"
                  key={`blog-post-${index}`}
                >
                  <li className="rounded-lg bg-gradient-to-b from-[#968982] to-transparent p-[1px]">
                    {/* add gradient background that goes from gray to transparent */}

                    <div className="flex flex-col gap-8 overflow-hidden rounded-lg bg-seashell">
                      {/* make image as background of rectangle box */}
                      <div
                        className="h-[215px] w-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${article.thumbnail})`
                        }}
                      />
                      <div className="flex flex-col gap-4 px-5 pb-10">
                        <h3 className="font-robotoMono text-sm font-light uppercase text-black line-clamp-2">
                          {article.title}
                        </h3>
                        <div className="flex justify-between">
                          <p className="font-robotoMono text-sm font-light uppercase text-black">
                            {new Date(article?.pubDate).toLocaleDateString(
                              'en-US',
                              {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              }
                            )}
                          </p>
                          <p className="font-robotoMono text-sm font-light text-black">
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
