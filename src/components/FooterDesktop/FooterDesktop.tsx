import { FooterLogo } from '@/svg'
import { ReactNode } from 'react'

const FooterDesktop = ({
  data
}: {
  data: {
    title: string
    options: {
      name: string
      href: string
      label?: string
    }[]
    footer?: ReactNode
  }[]
}) => {
  return (
    <>
      <footer className="hidden lg:flex items-center bg-seashell antialiased border-t border-timberwolf font-robotoMono px-[50px] pb-[25px]">
        <section className="flex flex-col max-w-[513px] leading-none pt-[73px] w-auto">
          <FooterLogo />
          <p className="mt-[230px] lg:text-[31px] text-[62px] tracking-tighter whitespace-normal">
            THE FUTURE OF DATA STORAGE
          </p>
          <p className="mt-[47px]">{new Date().getFullYear()} Bundlr. All rights reserved.</p>
        </section>
        <section className="flex gap-20 h-[568px] ml-auto min-w-[272px]">
          {data.map((definition) => {
            return (
              <div
                key={definition.title}
                className="flex flex-col mb-auto border-l border-timberwolf h-full pt-[76px] pl-[30px]"
              >
                <p className="text-[13px] font-bold">{definition.title}</p>
                <ul className="mt-[50px] flex flex-col gap-[10px]">
                  {definition.options.map((option) => {
                    return (
                      <li key={option.name}>
                        <a
                          href={option.href}
                          className="text-base whitespace-nowrap"
                        >
                          {option.name}
                          {option.label && (
                            <span className="ml-[10px] text-xs font-bold bg-black rounded-full px-[10px] py-[5px] text-white">
                              {option.label}
                            </span>
                          )}
                        </a>
                      </li>
                    )
                  })}
                </ul>
                {definition.footer}
              </div>
            )
          })}
        </section>

        <section className="border-l border-timberwolf"></section>
      </footer>
    </>
  )
}

export default FooterDesktop
