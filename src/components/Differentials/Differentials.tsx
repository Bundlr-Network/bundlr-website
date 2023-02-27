import Heading from '../Heading'

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
      <section className="flex h-auto flex-col justify-between gap-0 bg-black px-5 pb-24 text-white lg:h-[584px] lg:flex-row lg:gap-20 lg:px-[79px] lg:pb-0">
        <div className="hidden lg:inline-block">
          <p
            className="mt-[133px] rotate-180 transform text-center text-[26px] uppercase"
            style={{ writingMode: 'vertical-rl' }}
          >
            {title}
          </p>
        </div>

        <div className="inline-block text-center lg:hidden">
          <Heading level={3} className="mt-[93px] uppercase">
            {title}
          </Heading>
          {/* <h3 className="mt-[93px] text-[26px] uppercase">{title}</h3> */}
        </div>

        {/* 2 columns grid */}
        <div className="grid grid-cols-1 gap-[32px] gap-y-24 pt-16 leading-none lg:ml-auto lg:grid-cols-2 lg:gap-y-0 lg:pt-[133px]">
          {items.map((item, index) => (
            // <div key={index} className="max-w-[501px]">
            <div key={index} className="">
              {/* <h2 className="font-fkDisplay font-light text-4xl leading-none" dangerouslySetInnerHTML={{
                __html: item.title
              }} /> */}
              <Heading
                level={4}
                dangerouslySetInnerHTML={{
                  __html: item.title
                }}
                className=" text-center lg:text-left"
              ></Heading>
              <p className="mt-4 text-center font-robotoMono text-lg leading-none leading-loose lg:text-left">
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
