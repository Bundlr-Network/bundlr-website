import { ReactNode, SVGAttributes, cloneElement, useEffect, useState } from 'react'

import Button from '../Button'
import { ButtonScheme } from '../Button/Button'
import { DevIcon } from '@/svg'

export enum CtaScheme {
  seashell = 'seashell',
  black = 'black'
}

export interface CtaCentralizedProps {
  title: string
  cta: string
  ctaIcon?: ReactNode
  href?: string
  newTab?: boolean
  scheme?: CtaScheme
}

const CtaCentralized = ({
  title,
  cta,
  ctaIcon = <DevIcon />,
  href,
  newTab = false,
  scheme = CtaScheme.seashell
}: CtaCentralizedProps) => {
  return (
    <>
      <div
        className={`w-full h-auto py-44 lg:h-[740px] overflow-hidden relative lg:py-4 px-6 flex flex-col items-center justify-center ${{
          [CtaScheme.seashell]: 'bg-seashell text-black',
          [CtaScheme.black]: 'text-white bg-black'
        }[scheme]
          }`}
      >
        <h2
          className="z-10 font-light text-4xl lg:text-7xl max-w-2xl text-center leading-none mb-11"
          dangerouslySetInnerHTML={{
            __html: title
          }}
        ></h2>
        <a
          className="z-10"
          href={href}
          target={newTab ? '_blank' : '_self'}
          rel="noreferrer"
        >
          <Button
            scheme={
              scheme === CtaScheme.seashell
                ? ButtonScheme.black
                : ButtonScheme.white
            }
          >
            {cta}
            {ctaIcon && ctaIcon}
          </Button>
        </a>

        <div className="hidden lg:flex absolute top-0 -right-10 overflow-hidden transform rotate-180">
          <img
            src="/new/assets/home/splash.webp"
            className="w-[400px] rounded-lg"
            alt="image1"
          />
        </div>
        <div className="hidden lg:flex absolute top-0 -left-10 overflow-hidden">
          <img
            src="/new/assets/home/splash.webp"
            className="w-[400px] rounded-lg"
            alt="image2"
          />
        </div>
      </div>
    </>
  )
}

export default CtaCentralized
