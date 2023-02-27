import {
  ReactNode,
  SVGAttributes,
  cloneElement,
  useEffect,
  useState
} from 'react'

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
        className={`relative flex h-auto w-full flex-col items-center justify-center overflow-hidden py-44 px-6 lg:h-[740px] lg:py-4 ${
          {
            [CtaScheme.seashell]: 'bg-seashell text-black',
            [CtaScheme.black]: 'bg-black text-white'
          }[scheme]
        }`}
      >
        <h2
          className="z-10 mb-11 max-w-2xl text-center text-4xl font-light leading-none lg:text-7xl"
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

        <div className="absolute -top-10 -right-[700px] hidden rotate-180 transform overflow-hidden lg:flex xl:-right-[600px]">
          <img
            src="/new/assets/home/data-cluster-rotated.webp"
            className="w-[1000px] rounded-lg"
            alt="image1"
          />
        </div>
        <div className="absolute -top-10 -left-[700px] hidden -scale-y-100 overflow-hidden lg:flex xl:-left-[600px]">
          <img
            src="/new/assets/home/data-cluster-rotated.webp"
            className="w-[1000px] rounded-lg"
            alt="image2"
          />
        </div>
      </div>
    </>
  )
}

export default CtaCentralized
