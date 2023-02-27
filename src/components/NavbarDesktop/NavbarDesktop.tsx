import {
  BracesIcon,
  BundlrIcon,
  ChevronRight,
  CloseIcon,
  DevIcon,
  MenuIcon,
  ParenthesisIcon
} from '@/svg'
import { m, motion } from 'framer-motion'

import Button from '../Button'
import { ButtonScheme } from '../Button/Button'
import Link from 'next/link'
import { useState } from 'react'

const useNavbarDesktop = () => {
  const MENU_OPTIONS: {
    [key: string]: {
      name: string
      href: string
    }[]
  } = {
    Solutions: [
      {
        name: 'Decentralized Storage',
        href: '/solutions/decentralized-storage'
      },
      {
        name: 'Proof of Provenance',
        href: '/solutions/proof-of-provenance'
      }
      // {
      //   name: 'Data Availability',
      //   href: '/solutions/data-availability'
      // }
    ],
    'Use Cases': [
      {
        name: 'Use Cases',
        href: '/use-cases'
      }
    ],
    Developers: [
      {
        name: 'Developers',
        href: '/developers'
      }
    ],
    Learn: [
      {
        name: 'About',
        href: '/learn/about'
      },
      {
        name: 'Blog',
        href: '/learn/blog'
      }
    ],
    Community: [
      {
        name: 'Community',
        href: '/community'
      }
    ]
  }

  return { MENU_OPTIONS }
}

export enum SchemeColor {
  'transparent' = 'transparent',
  'onyx' = 'onyx',
  'black' = 'black',
  'ghostWhite' = 'ghostWhite'
}

const NavbarDesktop = ({ scheme }: { scheme?: SchemeColor }) => {
  const { MENU_OPTIONS } = useNavbarDesktop()

  return (
    <>
      <nav
        className={`flex h-[90px] items-center border-b font-robotoMono antialiased ${
          scheme &&
          {
            timberwolf: 'border-timberwolf',
            transparent: 'border-transparent',
            onyx: 'border-onyx',
            black: 'border-ghostWhite',
            ghostWhite: 'border-timberwolf'
          }[scheme]
        }`}
      >
        <Link href="/">
          <div className="flex w-[100px] cursor-pointer items-center justify-center md:w-[120px]">
            <BundlrIcon />
          </div>
        </Link>
        <div
          className={`h-full w-[1px] bg-timberwolf ${
            scheme &&
            {
              transparent: 'bg-transparent',
              onyx: 'bg-onyx',
              black: 'bg-ghostWhite',
              ghostWhite: 'bg-timberwolf'
            }[scheme]
          }`}
        />
        <ul className="ml-[40px] hidden items-center gap-[30px] text-sm lg:flex">
          {Object.keys(MENU_OPTIONS).map((key, index) => {
            if (MENU_OPTIONS[key].length === 1) {
              return (
                <Link
                  href={MENU_OPTIONS[key][0].href}
                  key={`menu-option-${index}`}
                >
                  <div className="cursor-pointer  px-4 uppercase hover:font-bold">
                    {MENU_OPTIONS[key][0].name}
                  </div>
                </Link>
              )
            } else {
              return (
                <NavDropdown
                  key={key}
                  title={key}
                  options={MENU_OPTIONS[key]}
                  scheme={scheme}
                />
              )
            }
          })}
        </ul>

        <div
          className={`ml-auto hidden h-full w-[1px] bg-timberwolf lg:block ${
            scheme &&
            {
              transparent: 'bg-transparent',
              onyx: 'bg-onyx',
              black: 'bg-ghostWhite',
              ghostWhite: 'bg-timberwolf'
            }[scheme]
          }`}
        />
        {/* <div className="w-[83px] items-center justify-center font-bold text-sm hidden lg:flex">
          EN
        </div> */}
        <div className="ml-auto flex items-center justify-center lg:ml-0 lg:w-[269px]">
          <a
            href="https://docs.bundlr.network/"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="whiteSpace-nowrap px-3 py-2 text-base"
              scheme={
                scheme === SchemeColor.black
                  ? ButtonScheme.white
                  : ButtonScheme.black
              }
            >
              START BUILDING
              <DevIcon />
            </Button>
          </a>
        </div>
        <div className="ml-[10px] mr-[10px] flex lg:hidden">
          <MenuMobile />
        </div>
      </nav>
    </>
  )
}

const NavDropdown = ({
  title,
  options,
  scheme
}: {
  title: string
  options: {
    name: string
    href: string
  }[]
  scheme?: SchemeColor
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative z-[9999] flex h-[89px] items-center justify-center"
      >
        <div
          className={`cursor-default whitespace-nowrap px-4 uppercase hover:font-bold ${
            isHovered ? 'font-bold' : ''
          }`}
        >
          {title}
        </div>
        {options.length > 0 && (
          <div
            className={`absolute top-[89px] left-0 bg-seashell ${
              isHovered ? 'block' : 'hidden'
            } rounded-b-[6px] border border-timberwolf ${
              {
                Solutions: 'w-[260px]',
                Learn: 'w-[138px]'
              }[title]
            }
            ${
              scheme &&
              {
                transparent: '!bg-transparent',
                onyx: 'border-onyx !bg-black text-white',
                black: 'border-ghostWhite !bg-black text-white',
                ghostWhite: 'border-timberwolf !bg-ghostWhite text-onyx'
              }[scheme]
            }
            `}
          >
            <ul className="flex h-full w-full flex-col items-start justify-start pl-5 pt-4 pb-5">
              {options.map((option) => {
                return (
                  <Link
                    href={option.href}
                    key={option.name}
                    className="flex h-full w-full items-center justify-center text-sm"
                  >
                    <li className="flex h-[50px] w-full cursor-pointer items-center justify-start gap-3 uppercase hover:font-bold">
                      {
                        {
                          Solutions: <BracesIcon />,
                          Learn: <BracesIcon />
                        }[title]
                      }

                      {option.name}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

const MenuMobile = () => {
  const [currentSubmenu, setCurrentSubmenu] = useState(null)

  const [isPressed, setIsPressed] = useState(false)

  const MENU_OPTIONS: {
    [key: string]: {
      name: string
      href: string
    }[]
  } = {
    Solutions: [
      {
        name: 'Decentralized Storage',
        href: '/solutions/decentralized-storage'
      },
      {
        name: 'Proof of Provenance',
        href: '/solutions/proof-of-provenance'
      }
      // {
      //   name: 'Data Availability',
      //   href: '/solutions/data-availability'
      // }
    ],
    'Use Cases': [
      {
        name: 'Use Cases',
        href: '/use-cases'
      }
    ],
    Developers: [
      {
        name: 'Developers',
        href: '/developers'
      }
    ],
    Learn: [
      {
        name: 'About',
        href: '/learn/about'
      },
      {
        name: 'Blog',
        href: '/learn/blog'
      }
    ],
    Community: [
      {
        name: 'Community',
        href: '/community'
      }
    ]
  }

  return (
    <>
      {/* overlay */}
      <motion.div
        className={`fixed top-0 left-0 z-[9999] h-full w-full bg-black text-white ${
          isPressed ? 'block' : 'hidden'
        }`}
      >
        <div className="flex h-full flex-col justify-between">
          {
            {
              Solutions: (
                <img
                  src="/assets/home/mobile-bg-2.png"
                  className="absolute bottom-0 right-0"
                />
              ),
              Learn: (
                <img
                  src="/assets/home/mobile-bg-3.png"
                  className="absolute bottom-0 right-0 w-full"
                />
              ),
              Default: (
                <img
                  src="/assets/home/mobile-bg-1.png"
                  className="absolute top-0 left-0"
                />
              )
            }[currentSubmenu || 'Default']
          }
          <div className="flex justify-between px-3 pt-5">
            <div>
              {currentSubmenu && (
                <div className="flex items-center justify-center rounded-md border border-onyx bg-smoky p-4">
                  <ChevronRight
                    className="rotate-180"
                    onClick={() => setCurrentSubmenu(null)}
                  />
                </div>
              )}
            </div>

            <div
              className="flex items-center justify-center self-start rounded-md border border-onyx bg-smoky p-4"
              onClick={() => setIsPressed(false)}
            >
              <CloseIcon />
            </div>
          </div>

          <div className="p-7">
            {
              {
                Solutions: (
                  <motion.div
                    className="-mt-32 flex flex-col gap-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-base uppercase">Solutions</p>
                    {MENU_OPTIONS.Solutions.map((option) => {
                      return (
                        <Link href={option.href} key={option.name}>
                          <p className="z-[999] text-3xl uppercase">
                            {option.name}
                          </p>
                        </Link>
                      )
                    })}
                  </motion.div>
                ),
                Learn: (
                  <motion.div
                    className="-mt-52 flex flex-col gap-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-base uppercase">Learn</p>
                    {MENU_OPTIONS.Learn.map((option) => {
                      return (
                        <Link href={option.href} key={option.name}>
                          <p className="z-[999] text-3xl uppercase">
                            {option.name}
                          </p>
                        </Link>
                      )
                    })}
                  </motion.div>
                ),
                Default: (
                  <div className="flex flex-col gap-8">
                    {Object.keys(MENU_OPTIONS).map((key, index) => {
                      if (MENU_OPTIONS[key].length === 1) {
                        return (
                          <Link
                            href={MENU_OPTIONS[key][0].href}
                            key={MENU_OPTIONS[key][0].name}
                          >
                            <div className="z-[999] text-3xl uppercase">
                              {MENU_OPTIONS[key][0].name}
                            </div>
                          </Link>
                        )
                      } else {
                        return (
                          <div
                            className="flex items-center justify-between text-3xl uppercase"
                            key={key}
                            onClick={() => setCurrentSubmenu(key as any)}
                          >
                            {key}
                            <ChevronRight />
                          </div>
                        )
                      }
                    })}
                  </div>
                )
              }[currentSubmenu || 'Default']
            }
          </div>
          {
            {
              Solutions: <div />,
              Learn: <div />,
              Default: (
                <div className="w-full self-center p-7">
                  <div className="text-md flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 font-robotoMono uppercase text-black hover:font-bold lg:px-6 lg:py-5">
                    START BUILDING
                    <DevIcon />
                  </div>
                </div>
              )
            }[currentSubmenu || 'Default']
          }
        </div>
      </motion.div>

      <button
        className="group relative z-50"
        onClick={() => setIsPressed((prev) => !prev)}
      >
        <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full transition-all duration-200">
          <MenuIcon />
        </div>
      </button>
    </>
  )
}

export default NavbarDesktop
