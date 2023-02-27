import {
  Footer,
  Heading,
  NavbarDesktop,
  Paragraph,
  SectionTitle
} from '@/components'
import { useEffect, useRef, useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'

const usePartnerProgram = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Partner Program',
    description:
      'Join us at the frontier of data by becoming a Bundlr partner. Contact us for token integrations and other opportunities.'
  }

  return { PAGE_SEO }
}

const PartnerProgram: NextPage = () => {
  const { PAGE_SEO } = usePartnerProgram()

  // const [captchaSettings, setCaptchaSettings] = useState<null | string>(null)

  // const captchaRef = useRef(null)

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const response: any = document.getElementById('g-recaptcha-response')

  //     if (response == null || response.value.trim() === '') {
  //       const currentCaptchaSettings = JSON.parse(
  //         (captchaRef?.current as any)?.value
  //       )

  //       setCaptchaSettings(() =>
  //         JSON.stringify({
  //           ...currentCaptchaSettings,
  //           ts: JSON.stringify(new Date().getTime())
  //         })
  //       )
  //     }
  //   }, 500)

  //   return () => clearInterval(intervalId)
  // }, [captchaSettings])

  return (
    <div className="bg-ghostWhite">
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop scheme={SchemeColor.ghostWhite} />
      <header className="mt-20 mb-28 hidden flex-col items-center justify-center gap-4 lg:flex">
        {/* <p className="text-2xl font-robotoMono text-center">
         
        </p> */}
        <Paragraph size="md"> Interested in partnering with Bundlr?</Paragraph>
        <Heading level={1}>Let&apos;s talk</Heading>
      </header>
      <section className="mt-10 flex flex-col justify-between gap-12 px-5 pb-[105px] md:flex-row md:px-5 lg:mt-0 lg:gap-0 lg:px-[89px]">
        <div className="flex max-w-[564px] flex-col gap-9">
          <SectionTitle title="The Partner Program" />
          <p className="font-robotoMono">
            Are you interested in having your project’s token integrated as a
            payment method on Bundlr? Are you interested in partnering in some
            other way? Send us a message and our team will contact you to
            continue the conversation.
          </p>
        </div>
        <div className="rounded-xl bg-black p-6 lg:p-12">
          <form
            className="flex flex-col gap-5"
            action="https://formsubmit.co/hello@bundlr.network"
            method="POST"
          >
            <p className="font-robotoMono text-white">
              Fill in this form and we’ll get back to you shortly.
            </p>
            {/* <input type="hidden" name="debug" value="1" /> */}
            {/* <input
              type="hidden"
              name="captcha_settings"
              ref={captchaRef}
              value={
                captchaSettings ||
                '{"keyname":"PartnerWebtolead","fallback":"true","orgId":"00D8d000008CgX4","ts":""}'
              }
            />
            <input type="hidden" name="oid" value="00D8d000008CgX4" />
            <input
              type="hidden"
              name="retURL"
              value="https://bundlr.network/partner-program?success"
            /> */}
            <input
              className="b-white rounded-md border bg-transparent px-6 py-3 font-robotoMono text-lg text-white"
              type="text"
              name="Name"
              placeholder="Name"
            />
            <input
              className="b-white rounded-md border bg-transparent px-6 py-3 font-robotoMono text-lg text-white"
              type="text"
              placeholder="Organization"
              name="Organization"
            />
            <input
              className="b-white rounded-md border bg-transparent px-6 py-3 font-robotoMono text-lg text-white"
              type="text"
              placeholder="Email"
              name="Email"
            />
            <input
              className="b-white rounded-md border bg-transparent px-6 py-3 font-robotoMono text-lg text-white"
              type="text"
              placeholder="Phone Number (Optional)"
              name="Phone"
            />
            <input
              className="b-white rounded-md border bg-transparent px-6 py-3 font-robotoMono text-lg text-white"
              type="text"
              placeholder="Telegram Handle (Optional)"
              name="Telegram"
            />
            <textarea
              name="Description"
              id=""
              rows={4}
              placeholder="Anything you want us to know? (Optional)"
              className="b-white rounded-md border bg-transparent px-6 py-3 font-robotoMono text-lg text-white"
            ></textarea>
            {/* <div
              className="g-recaptcha"
              data-sitekey="6Lf5i2gkAAAAAD7B3wU-SK3lTeDReGIHxHhEutoc"
            ></div> */}
            <button
              type="submit"
              className="flex items-center justify-center rounded-md bg-white py-4 text-base uppercase text-black"
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
