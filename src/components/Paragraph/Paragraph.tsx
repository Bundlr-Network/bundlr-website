import { useEffect, useState } from 'react'

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  children?: any
}

const useParagraph = ({ size }: { size: ParagraphProps['size'] }) => {
  const PARAGRAPH_DEFITINION = {
    xl: 'text-xl lg:text-2xl leading-loose font-robotoMono',
    lg: 'text-lg lg:text-xl leading-loose font-robotoMono',
    md: 'text-base lg:text-lg leading-loose font-robotoMono',
    sm: 'text-sm lg:text-base leading-loose font-robotoMono',
    xs: 'text-xs lg:text-sm leading-loose font-robotoMono'
  }[size]

  return { PARAGRAPH_DEFITINION }
}

const Paragraph = ({ size, children, className, ...props }: ParagraphProps) => {
  const { PARAGRAPH_DEFITINION } = useParagraph({ size })

  return (
    <>
      <p
        className={`${PARAGRAPH_DEFITINION} ${className ? className : ''}`}
        {...props}
      >
        {children}
      </p>
    </>
  )
}

export default Paragraph
