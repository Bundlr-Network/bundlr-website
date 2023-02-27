import Heading from '../Heading'
import SectionTitle from '../SectionTitle'

const HomeWhyUseBundlr = ({
  content,
  children
}: {
  content: {
    title: string
    description: string
  }[]
  children?: React.ReactNode
}) => {
  return (
    <>
      <section>
        <div className="mx-4 flex items-center justify-center pt-[52px] md:ml-[79px] lg:justify-start">
          <SectionTitle title="How We’re Different" />
        </div>
        <ul className="mx-4 mt-[49px] flex max-w-[1128px] flex-col gap-10 pb-[50px] lg:ml-auto lg:mr-[79px] lg:mt-[126px] lg:pl-10 2xl:max-w-[80%]">
          {/* Dots border bottom */}
          {content.map((definition, index) => {
            return (
              <li
                key={`definition-${index}`}
                className={`flex border-spacing-4 flex-col items-center justify-between gap-5 border-b-[2.5px] border-dotted border-gray-400 pb-9 lg:flex-row lg:gap-0 ${
                  index === content.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <Heading
                  level={3}
                  className="whitespace-nowrap text-center lg:text-left"
                >
                  {definition.title}
                </Heading>

                <p className="pl-6 text-center font-robotoMono text-base lg:text-left">
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
