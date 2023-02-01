import { Footer, JoinTheCommunity, NavbarDesktop } from '@/components'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const useBlog = () => {

  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description',
  }

  return { PAGE_SEO }
}

const Blog: NextPage = () => {
  const { PAGE_SEO } = useBlog()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <h1 className='text-7xl font-spaceGrotesk text-center pt-24 pb-14 font-light'>Bundlr Blog</h1>
      <section className='px-4 md:px-[109px] flex gap-10 justify-center flex-col md:flex-row'>
        <div className="md:sticky top-10 left-0 self-start">
          <div className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg w-full md:w-[726px] ">
            {/* add gradient background that goes from gray to transparent */}

            <div className="flex flex-col gap-8 bg-seashell rounded-lg overflow-hidden">
              {/* make image as background of rectangle box */}
              <div
                className="w-full h-[427px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://picsum.photos/400)`
                }}
              />
              <div className="flex flex-col gap-4 px-5 pb-10">
                <h3 className="text-black font-light text-sm font-robotoMono uppercase">
                  Wordcel integrates with Bundlr to permanently store it’s users data
                </h3>
                <div className="flex justify-between">
                  <p className="text-black font-light text-sm font-robotoMono">
                    MARCH 14, 2022
                  </p>
                  <p className='text-black font-light text-sm font-robotoMono'>[ 3 min read ]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="flex gap-7 flex-wrap">
            {[1, 2, 3, 4].map((item, index) => {
              return (

                <li key={index} className="bg-gradient-to-b from-[#968982] to-transparent p-[1px] rounded-lg w-full md:w-[334px] ">
                  {/* add gradient background that goes from gray to transparent */}

                  <div className="flex flex-col gap-8 bg-seashell rounded-lg overflow-hidden">
                    {/* make image as background of rectangle box */}
                    <div
                      className="w-full h-[215px] bg-cover bg-center"
                      style={{
                        backgroundImage: `url(https://picsum.photos/400)`
                      }}
                    />
                    <div className="flex flex-col gap-4 px-5 pb-10">
                      <h3 className="text-black font-light text-sm font-robotoMono uppercase">
                        Wordcel integrates with Bundlr to permanently store it’s users data
                      </h3>
                      <div className="flex justify-between">
                        <p className="text-black font-light text-sm font-robotoMono">
                          MARCH 14, 2022
                        </p>
                        <p className='text-black font-light text-sm font-robotoMono'>[ 3 min read ]</p>
                      </div>
                    </div>
                  </div>
                </li>
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
