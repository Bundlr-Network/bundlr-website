import { useEffect, useState } from 'react'

import { SpotifyIcon } from '@/svg'

const useSpotifySection = () => {
  return {}
}

const SpotifySection = () => {
  const { } = useSpotifySection()

  return (
    <>
      <section className='px-[109px]'>
        <div className="bg-black flex items-center flex-col gap-6 justify-center text-white w-full py-16 rounded-2xl">
          <SpotifyIcon />
          <a href="#">
            <p className='text-white font-robotoMono text-center'>[  LISTEN TO OUR JOURNEY  ]</p>
          </a>
        </div>
      </section>
    </>
  )
}

export default SpotifySection
