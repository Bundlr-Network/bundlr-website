interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  children: any
}

const useHeading = ({ level }: { level: HeadingProps['level'] }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const HEADING_DEFINITION = {
    1: 'text-5xl lg:text-7xl',
    2: 'text-4xl lg:text-5xl',
    3: 'text-3xl lg:text-4xl',
    4: 'text-2xl lg:text-3xl',
    5: 'text-xl lg:text-2xl',
    6: 'text-lg lg:text-xl'
  }

  const currentHeadingDefinitions = HEADING_DEFINITION[level]

  return { Tag, currentHeadingDefinitions }
}

const Heading = ({ level, className, children }: HeadingProps) => {
  const { Tag, currentHeadingDefinitions } = useHeading({
    level
  })

  return (
    <>
      <Tag className={`${currentHeadingDefinitions} ${className ? className : ''
        }`}>
        {children}
      </Tag>
    </>
  )
}

export default Heading
