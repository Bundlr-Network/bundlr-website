import { useEffect, useState } from 'react'

import { SpotifyIcon } from '@/svg'

const useSpotifySection = () => {
  return {}
}

const SpotifySection = () => {
  const {} = useSpotifySection()

  return (
    <>
      <section className="px-5 lg:px-[79px]">
        <a
          href="https://open.spotify.com/episode/1hifGHFRubtXSwFPnDM0jK?si=bc955dd0411445ca"
          target={'_blank'}
          rel="noreferrer"
        >
          <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl bg-black py-16 text-white">
            <SpotifyIcon className="transition-all hover:rotate-6" />
            <p className="mt-auto text-center font-robotoMono text-base text-white hover:font-bold">
              [ LISTEN TO OUR JOURNEY ]
            </p>
          </div>
        </a>
      </section>
    </>
  )
}

export default SpotifySection
