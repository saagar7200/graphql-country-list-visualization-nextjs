import { cn } from '@/utils/util'
import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

const Card = (props: Props) => {
    const {children,className} = props;
  return (
    <div className={cn('bg-white rounded-md shadow-md p-4  min-w-[200px]',className)}>
        {
            children
        }
    </div>
  )
}

export default Card