import { BracesIcon, BundlrIcon, DevIcon, ParenthesisIcon } from '@/svg'

import Button from '../Button'
import Link from 'next/link'
import { m } from 'framer-motion'
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
        href: '/solutions/descentralized-storage'
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
    Developers: [{
      name: 'Developers',
      href: '/developers'
    }],
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
    Community: [{
      name: 'Community',
      href: '/community'
    }],
  }

  return { MENU_OPTIONS }
}

export enum SchemeColor {
  'transparent' = 'transparent',
  'onyx' = 'onyx',
  'black' = 'black',
  'ghostWhite' = 'ghostWhite',
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
          <Button>
            START BUILDING
            <DevIcon />
          </Button>
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
        className="relative h-[89px] flex items-center justify-center"
      >
        <div
          className=" px-4 uppercase font-bold "
        >
          {title}
        </div>
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
                black: '!bg-onyx border-ghostWhite text-white',
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
  const [isPressed, setIsPressed] = useState(false)

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ${isPressed ? 'block' : 'hidden'
          }`}
      >
        hello world
      </div>

      <button
        className="relative group z-50"
        onClick={() => setIsPressed((prev) => !prev)}
      >
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div
              className={` ${isPressed ? 'bg-white translate-x-10' : 'bg-black'
                } h-[2px] w-7 transform transition-all duration-300 origin-left mt-[2px]`}
            ></div>
            <div
              className={` ${isPressed ? 'bg-white translate-x-10' : 'bg-black'
                } h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 mb-[2px]`}
            ></div>

            <div
              className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${isPressed ? 'translate-x-0 w-12' : ''
                }`}
            >
              <div
                className={`absolute ${isPressed ? 'bg-white rotate-45' : 'bg-black'
                  } h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300`}
              ></div>
              <div
                className={`absolute ${isPressed ? 'bg-white -rotate-45' : 'bg-black'
                  }  h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300`}
              ></div>
            </div>
          </div>
        </div>
      </button>
    </>
  )
}

export default NavbarDesktop
