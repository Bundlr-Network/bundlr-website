import Heading from '../Heading'
import SectionTitle from '../SectionTitle'

const HomeWhyUseBundlr = ({ content, children }: {
  content: {
    title: string
    description: string
  }[],
  children?: React.ReactNode
}) => {

  return (
    <>
      <section>
        <div className="flex items-center justify-center lg:justify-start pt-[52px] mx-4 md:ml-[79px]">
          <SectionTitle title="How We’re Different" />
        </div>
        <ul className="flex flex-col gap-10 lg:ml-auto mx-4 lg:mr-[79px] max-w-[1128px] mt-[49px] lg:mt-[126px] pb-[50px] pl-10">
          {/* Dots border bottom */}
          {content.map((definition, index) => {
            return (
              <li
                key={`definition-${index}`}
                className={`flex flex-col lg:flex-row items-center gap-5 lg:gap-0 justify-between border-b-[2.5px] border-dotted pb-9 border-gray-400 border-spacing-4 ${index === content.length - 1 ? 'border-b-0' : ''
                  }`}
              >
                <Heading level={3} className="whitespace-nowrap text-center lg:text-left">
                  {definition.title}
                </Heading>

                <p className="pl-6 text-base font-robotoMono text-center lg:text-left">
                  {definition.description}
                </p>
              </li>
            )
          })}
        </ul>
        {children}
      </section>
    </>
  )
}

export default HomeWhyUseBundlr
