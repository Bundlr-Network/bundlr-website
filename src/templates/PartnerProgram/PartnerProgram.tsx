import { Footer, NavbarDesktop, SectionTitle } from '@/components'
import { useEffect, useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const usePartnerProgram = () => {
  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
  }

  return { PAGE_SEO }
}

const PartnerProgram: NextPage = () => {
  const { PAGE_SEO } = usePartnerProgram()

  return (
    <div className='bg-ghostWhite'>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      <header className="flex flex-col justify-center items-center my-28">
        <p className="text-2xl font-robotoMono text-center">
          Interested in partnering with Bundlr?
        </p>
        <p className="text-8xl">Let&apos;s talk</p>
      </header>
      <section className="flex flex-col md:flex-row justify-between md:px-[109px] pb-[105px] px-5 gap-12 lg:gap-0">
        <div className="max-w-[564px] flex flex-col gap-9">
          <SectionTitle title="The Partner Program" />
          <p className="font-robotoMono">
            Are you interested in having your project’s token integrated as a
            payment method on Bundlr? Are you interested in partnering in some
            other way? Send us a message and our team will contact you to
            continue the conversation.
          </p>
        </div>
        <div className="bg-black p-12 rounded-xl">
          <form action="" className="flex flex-col gap-5">
            <p className="text-white font-robotoMono">
              Fill in this form and we’ll get back to you shortly.
            </p>
            <input
              className="border font-robotoMono rounded-md px-6 py-3 text-lg b-white bg-transparent"
              type="text"
              placeholder="Name"
            />
            <input
              className="border font-robotoMono rounded-md px-6 py-3 text-lg b-white bg-transparent"
              type="text"
              placeholder="Organization"
            />
            <input
              className="border font-robotoMono rounded-md px-6 py-3 text-lg b-white bg-transparent"
              type="text"
              placeholder="Email"
            />
            <input
              className="border font-robotoMono rounded-md px-6 py-3 text-lg b-white bg-transparent"
              type="text"
              placeholder="Phone Number (Optional)"
            />
            <input
              className="border font-robotoMono rounded-md px-6 py-3 text-lg b-white bg-transparent"
              type="text"
              placeholder="Telegram Handle (Optional)"
            />
            <textarea
              name=""
              id=""
              rows={4}
              placeholder="Anything you want us to know? (Optional)"
              className="border font-robotoMono rounded-md px-6 py-3 text-lg b-white bg-transparent"
            ></textarea>
            <button
              type="submit"
              className="bg-white rounded-md text-black flex items-center justify-center uppercase text-base py-4"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PartnerProgram
