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
      <section className="pb-24 lg:pb-0 h-auto lg:h-[584px] flex flex-col lg:flex-row justify-between text-white bg-black px-5 lg:px-[109px]">
        <div className="hidden lg:inline-block">
          <h2 className="transform -rotate-90 mt-[253px] text-[26px] uppercase">
            {title}
          </h2>
        </div>

        <div className="lg:hidden inline-block ">
          <h3 className="mt-[93px] text-[26px] uppercase">{title}</h3>
        </div>

        {/* 2 columns grid */}
        <div className="grid gap-y-24 grid-cols-1 lg:grid-cols-2 gap-[32px] lg:gap-y-0 pr-[109px] leading-none pt-16 lg:pt-[133px]">
          {items.map((item, index) => (
            <div key={index} className="max-w-[501px]">
              <h2 className="font-fkDisplay font-light text-5xl leading-none" dangerouslySetInnerHTML={{
                __html: item.title
              }} />
              <p className="text-lg font-robotoMono leading-none mt-4">
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
