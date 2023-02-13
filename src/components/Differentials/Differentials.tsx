export interface BenefitsProps {
  title: string
  items: {
    title: string
    description: string
  }[]
}

const Benefits = ({ title, items }: BenefitsProps) => {
  return (
    <>
      <section className="pb-24 lg:pb-0 h-auto lg:h-[584px] flex flex-col lg:flex-row justify-between text-white bg-black px-5 lg:px-[79px] gap-0 lg:gap-20">
        <div className="hidden lg:inline-block">
          <p className="transform rotate-180 text-center mt-[133px] text-[26px] uppercase" style={{ writingMode: 'vertical-rl' }}>
            {title}
          </p>
        </div>

        <div className="lg:hidden inline-block ">
          <h3 className="mt-[93px] text-[26px] uppercase">{title}</h3>
        </div>

        {/* 2 columns grid */}
        <div className="grid gap-y-24 grid-cols-1 lg:grid-cols-2 gap-[32px] lg:gap-y-0 ml-auto leading-none pt-16 lg:pt-[133px]">
          {items.map((item, index) => (
            // <div key={index} className="max-w-[501px]">
            <div key={index} className="">
              <h2 className="font-fkDisplay font-light text-4xl leading-none" dangerouslySetInnerHTML={{
                __html: item.title
              }} />
              <p className="text-lg font-robotoMono leading-none mt-4 leading-loose">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Benefits
