import { Footer, Heading, NavbarDesktop, Paragraph } from '@/components'
import { useEffect, useState } from 'react'

import AlertModal from '@/components/AlertModal/AlertModal'
import Home from '../Home'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SchemeColor } from '@/components/NavbarDesktop/NavbarDesktop'
import getURL from '@/utils/getURL'

enum STEPS {
  'Tweet',
  'Verify',
  'Verifying',
  'Success'
}

const useFaucet = () => {
  const PAGE_SEO = {
    title: 'Bundlr | Faucet',
    description: 'Page Description'
  }

  const [currentStep, setcurrentStep] = useState(STEPS.Tweet)
  const [wallet, setWallet] = useState('')
  const [tweetURL, setTweetURL] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false)

  const walletCanClaim = async (
    wallet: string
  ): Promise<{
    canClaim: boolean | null
    error: string
  }> => {
    try {
      const raw = await fetch(`${getURL()}/api/check/${wallet}`)

      const response = await raw.json()

      return response
    } catch (error) {
      return {
        canClaim: null,
        error:
          'Could not estabilish a connection with the faucet, please try again later.'
      }
    }
  }

  const handleTweet = async () => {
    setIsAlertModalOpen(false)

    setError('')

    const { canClaim, error } = await walletCanClaim(wallet)

    if (error) {
      setError(error)
      return
    }

    if (canClaim === false) {
      setError(
        'This wallet is not eligible for the faucet or already claimed tokens recently.'
      )
      return
    }

    const TWITTER_MESSAGE = `I'm verifying my @BundlrNetwork address for the testnet ${wallet}`

    const TWITTER_URL = `https://twitter.com/intent/tweet?text=${TWITTER_MESSAGE}`

    window.open(TWITTER_URL, '_blank')

    setcurrentStep(STEPS.Verify)
  }

  const handleVerification = () => {
    setIsAlertModalOpen(true)
  }

  const handleURL = async (e: any) => {
    // check if is a valid tweet link

    const regex =
      /(https?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9_]+\/status\/\d+/
    if (!regex.test(tweetURL)) {
      setError('Please enter a valid Tweet link and try again.')
      return
    }

    setFormSubmitted(true)

    setcurrentStep(STEPS.Verifying)

    const raw = await fetch(`${getURL()}/api/tweet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tweet: tweetURL
      })
    })

    if (raw.status !== 200) {
      setError('Could not verify the tweet, please try again later.')
      return
    }

    setcurrentStep(STEPS.Success)
  }

  return {
    PAGE_SEO,
    currentStep,
    isAlertModalOpen,
    handleURL,
    setIsAlertModalOpen,
    setTweetURL,
    handleTweet,
    handleVerification,
    setWallet,
    error
  }
}

const Faucet: NextPage = () => {
  const {
    PAGE_SEO,
    currentStep,
    isAlertModalOpen,
    handleURL,
    setIsAlertModalOpen,
    setTweetURL,
    handleTweet,
    handleVerification,
    setWallet,
    error
  } = useFaucet()

  return (
    <main className="bg-black">
      <div className="text-white">
        <NavbarDesktop scheme={SchemeColor.black} />
      </div>
      <NextSeo {...PAGE_SEO} />
      <div className="flex flex-col items-center justify-center gap-20 py-32 px-4 text-white">
        <header className="flex flex-col items-center justify-center">
          <Heading level={1}>Faucet</Heading>
          <Paragraph size="md" className="mt-2 max-w-2xl text-center">
            To receive free tokens for our testnet, simply enter your arweave
            wallet address, share on twitter and copy and paste the twitter URL
            back into the field below.
          </Paragraph>
        </header>

        <AlertModal
          isOpen={isAlertModalOpen}
          setIsOpen={setIsAlertModalOpen}
          handleConfirmation={handleTweet}
        />
        <div className="flex w-full max-w-3xl flex-col gap-16 rounded-xl border border-gray-600 bg-gradient-to-b from-[#0F0F0F] to-[#000000] p-8 lg:w-[768px]">
          {error && (
            <div
              className="rounded-lg bg-red-100 -mb-4 p-4 text-center text-sm text-red-700 dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <span className="font-robotoMono font-medium">{error}</span>
            </div>
          )}

          <div className="flex flex-col gap-5">
            <p className="font-robotoMono text-sm uppercase">Step 1</p>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="19"
                fill="none"
                viewBox="0 0 23 19"
              >
                <path
                  fill="#fff"
                  d="M20.645 4.799c.014.203.014.406.014.611 0 6.248-4.746 13.453-13.426 13.453v-.004A13.34 13.34 0 010 16.739a9.463 9.463 0 006.984-1.96 4.726 4.726 0 01-4.409-3.282 4.694 4.694 0 002.13-.082A4.726 4.726 0 01.92 6.781v-.06c.656.366 1.39.57 2.142.592A4.74 4.74 0 011.602 1a13.384 13.384 0 009.725 4.94 4.737 4.737 0 011.365-4.518 4.717 4.717 0 016.676.205A9.457 9.457 0 0022.365.48a4.744 4.744 0 01-2.075 2.615A9.37 9.37 0 0023 2.35a9.596 9.596 0 01-2.355 2.449z"
                ></path>
              </svg>
              <p className="font-robotoMono">
                Enter arweave wallet address and share on Twitter
              </p>
            </div>
            <div className="flex border-white bg-black">
              <input
                type="text"
                onChange={(e) => setWallet(e.target.value)}
                disabled={currentStep != STEPS.Tweet}
                placeholder="Enter wallet address"
                className="w-full disabled:opacity-60 rounded-tl-xl rounded-bl-xl border-t border-b border-l bg-transparent px-6 py-2 font-robotoMono"
              />
              <button
                onClick={handleVerification}
                disabled={currentStep != STEPS.Tweet}
                className="w-[320px] disabled:cursor-not-allowed disabled:opacity-60 rounded-tr-xl rounded-br-xl bg-white px-6 py-2 font-robotoMono text-base uppercase text-black"
              >
                Share on twitter
              </button>
            </div>
          </div>
          <div
            className={`flex flex-col gap-5 ${currentStep === STEPS.Verify ||
              currentStep === STEPS.Verifying ||
              currentStep === STEPS.Success
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-40'
              }`}
          >
            <p className="font-robotoMono text-sm uppercase">Step 2</p>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                fill="none"
                viewBox="0 0 20 21"
              >
                <path stroke="#fff" d="M0.5 5H15.5V20H0.5z"></path>
                <path fill="#fff" stroke="#fff" d="M4.5 1H19.5V16H4.5z"></path>
              </svg>
              <p className="font-robotoMono">Copy and paste Twitter URL</p>
            </div>
            <div className="flex border-white bg-black">
              <input
                type="text"
                pattern="https://.*"
                onChange={(e) => setTweetURL(e.target.value)}
                disabled={currentStep === STEPS.Success || currentStep === STEPS.Verifying}
                placeholder="Enter twitter URL"
                className="w-full disabled:opacity-60 rounded-tl-xl rounded-bl-xl border-t border-b border-l bg-transparent px-6 py-2 font-robotoMono"
              />
              <button
                onClick={handleURL}
                disabled={currentStep === STEPS.Success || currentStep === STEPS.Verifying}
                className="w-[320px] flex disabled:cursor-not-allowed disabled:opacity-60 items-center justify-center rounded-tr-xl rounded-br-xl bg-white px-6 py-2 font-robotoMono text-base uppercase text-black"
              >
                {currentStep === STEPS.Verifying ? (
                  <svg
                    className="h-5 w-5 animate-spin text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  'RECEIVE TOKENS'
                )}
              </button>
            </div>
          </div>

          <div
            className={`flex flex-col gap-5 ${currentStep === STEPS.Success
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-40'
              }`}
          >
            <p className="font-robotoMono text-sm uppercase">Step 3</p>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="21"
                fill="none"
                viewBox="0 0 23 21"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M19.797 12.727v5.048H2.475v-5.048H0V20.3h22.272v-7.573h-2.475z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M12.376 10.546V.7h-2.48v9.846L6.208 6.923 4.454 8.646l6.651 6.531 6.712-6.531-1.753-1.723-3.688 3.623z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="font-robotoMono">
                Receive $Bundlr tokens in your wallet
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Faucet
