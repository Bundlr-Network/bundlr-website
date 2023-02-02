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
        <div className="pt-[52px] ml-[20px] lg:ml-[109px]">
          <SectionTitle title="How We’re Different" />
        </div>
        <ul className="flex flex-col gap-10 lg:ml-auto ml-[20px] mr-[109px] max-w-[1128px] mt-[49px] lg:mt-[126px] pb-[50px]">
          {/* Dots border bottom */}
          {content.map((definition, index) => {
            return (
              <li
                key={`definition-${index}`}
                className={`flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between border-b-[2.5px] border-dotted pb-9 border-gray-400 border-spacing-4 ${index === content.length - 1 ? 'border-b-0' : ''
                  }`}
              >
                <h3 className="text-3xl whitespace-nowrap font-fkDisplay">
                  {definition.title}
                </h3>
                <p className="text-base font-robotoMono">
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
