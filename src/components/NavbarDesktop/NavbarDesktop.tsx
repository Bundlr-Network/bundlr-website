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
        href: '/solutions/decentralized-storage.ts'
      },
      {
        name: 'Proof of Provenance',
        href: '/solutions/proof-of-provenance'
      },
      {
        name: 'Data Availability',
        href: '/solutions/data-availability'
      }
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
        className={`flex items-center h-[90px] antialiased border-b font-robotoMono ${scheme &&
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
          <div className="w-[120px] flex items-center justify-center cursor-pointer">
            <BundlrIcon />
          </div>
        </Link>
        <div
          className={`h-full w-[1px] bg-timberwolf ${scheme &&
            {
              transparent: 'bg-transparent',
              onyx: 'bg-onyx',
              black: 'bg-ghostWhite',
              ghostWhite: 'bg-timberwolf'
            }[scheme]
            }`}
        />
        <ul className="items-center ml-[40px] gap-[30px] text-sm hidden lg:flex">
          {Object.keys(MENU_OPTIONS).map((key, index) => {
            if (MENU_OPTIONS[key].length === 1) {
              return (
                <Link
                  href={MENU_OPTIONS[key][0].href}
                  key={`menu-option-${index}`}
                >
                  <div className="cursor-pointer  px-4 uppercase font-bold">
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
          className={`h-full w-[1px] bg-timberwolf ml-auto hidden lg:block ${scheme &&
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
        <div className="lg:w-[269px] flex items-center justify-center ml-auto lg:ml-0">
          <a href="https://docs.bundlr.network/" target="_blank" rel="noreferrer">
            <Button>
              START BUILDING
              <DevIcon />
            </Button>
          </a>
        </div>
        <div className="flex lg:hidden ml-[10px] mr-[10px]">
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
        className="relative h-[89px] flex items-center justify-center z-[9999]"
      >
        <div className=" px-4 uppercase font-bold ">{title}</div>
        {options.length > 0 && (
          <div
            className={`absolute top-[89px] left-0 bg-seashell ${isHovered ? 'block' : 'hidden'
              } rounded-b-[6px] border border-timberwolf ${{
                Solutions: 'w-[260px]',
                Learn: 'w-[138px]'
              }[title]
              }
              ${scheme &&
              {
                transparent: '!bg-transparent',
                onyx: '!bg-black border-onyx text-white',
                black: '!bg-black border-ghostWhite text-white',
                ghostWhite: '!bg-ghostWhite border-timberwolf text-onyx'
              }[scheme]
              }
              `}
          >
            <ul className="h-full w-full flex flex-col justify-start items-start pl-5 pt-4 pb-5">
              {options.map((option) => {
                return (
                  <li
                    key={option.name}
                    className="h-[50px] w-full flex items-center justify-start gap-3 uppercase font-bold"
                  >
                    {
                      {
                        Solutions: <ParenthesisIcon />,
                        Learn: <BracesIcon />
                      }[title]
                    }

                    <Link
                      href={option.href}
                      className="h-full w-full flex items-center justify-center text-sm"
                    >
                      {option.name}
                    </Link>
                  </li>
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
        href: '/solutions/decentralized-storage.ts'
      },
      {
        name: 'Proof of Provenance',
        href: '/solutions/proof-of-provenance'
      },
      {
        name: 'Data Availability',
        href: '/solutions/data-availability'
      }
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
        className={`fixed top-0 left-0 w-full h-full text-white bg-black z-[9999] ${isPressed ? 'block' : 'hidden'
          }`}
      >
        <div className="flex flex-col h-full justify-between">
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
          <div className="flex justify-between pt-5 px-3">
            <div>
              {currentSubmenu && (
                <div className="bg-smoky border border-onyx rounded-md p-4 flex items-center justify-center">
                  <ChevronRight
                    className="rotate-180"
                    onClick={() => setCurrentSubmenu(null)}
                  />
                </div>
              )}
            </div>

            <div
              className="bg-smoky border border-onyx rounded-md p-4 flex items-center justify-center self-start"
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
                    className="flex flex-col gap-8 -mt-32"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className='uppercase text-base'>Solutions</p>
                    {MENU_OPTIONS.Solutions.map((option) => {
                      return (
                        <Link href={option.href} key={option.name}>
                          <p className="uppercase text-3xl">{option.name}</p>
                        </Link>
                      )
                    })}
                  </motion.div>
                ),
                Learn: (
                  <motion.div
                    className="flex flex-col gap-8 -mt-52"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className='uppercase text-base'>Learn</p>
                    {MENU_OPTIONS.Learn.map((option) => {
                      return (
                        <Link href={option.href} key={option.name}>
                          <p className="uppercase text-3xl z-[999]">{option.name}</p>
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
                            <div className="uppercase text-3xl z-[999]">
                              {MENU_OPTIONS[key][0].name}
                            </div>
                          </Link>
                        )
                      } else {
                        return (
                          <div
                            className="uppercase text-3xl flex justify-between items-center"
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
                  <div className="font-robotoMono uppercase text-md flex items-center justify-center gap-2 px-4 py-3 lg:px-6 lg:py-5 rounded-full hover:font-bold bg-white text-black">
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
        className="relative group z-50"
        onClick={() => setIsPressed((prev) => !prev)}
      >
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
          <MenuIcon />
        </div>
      </button>
    </>
  )
}

export default NavbarDesktop
