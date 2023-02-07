import { useEffect, useState } from 'react'

import { SpotifyIcon } from '@/svg'

const useSpotifySection = () => {
  return {}
}

const SpotifySection = () => {
  const { } = useSpotifySection()

  return (
    <>
      <section className='px-5 lg:px-[109px]'>
        <div className="bg-black flex items-center flex-col gap-6 justify-center text-white w-full py-16 rounded-2xl">
          <SpotifyIcon className='hover:rotate-6 transition-all' />
          <a href="https://open.spotify.com/episode/5qfTUsV76yFvMjnuVUXxbJ?si=NlUUbYdhRdmeV-80XROUXQ" target={"_blank"} rel="noreferrer">
            <p className='text-white font-robotoMono text-base text-center mt-auto hover:font-bold'>[  LISTEN TO OUR JOURNEY  ]</p>
          </a>
        </div>
      </section>
    </>
  )
}

export default SpotifySection
