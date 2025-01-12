import React from 'react'

type Props = {
    title:string;
    value:number | string
    isLoading?:boolean
}

const QuickStatsCard = (props: Props) => {
    const {title='Total Countries', value=195,isLoading} = props
  return (
    <div className='bg-background rounded-lg p-3'>
    <h3 className='text-textSecondary text-sm'>{title}</h3>
    {
isLoading ? 
<div className='flex justify-start gap-2'>
<div className='h-5 w-10 bg-gray-200 rounded-md  animate-pulse'></div>
</div> : <p className='font-bold text-md text-textBlue'>{value}</p>
    }
</div>
  )
}

export default QuickStatsCard