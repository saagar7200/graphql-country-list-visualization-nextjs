import React from 'react'
import Card from '../card'
import QuickStatsCard from './quick-stat-card'
import { useQuery } from '@apollo/client'
import { GET_COUNTRIES, GET_LANGUAGES } from '@/graphql/queries'


const QuickStats = () => {
  const {data: languagesData,loading: languagesLoading} = useQuery(GET_LANGUAGES)
  const {data: countries,loading: countriesLoading} = useQuery(GET_COUNTRIES)
  return (
        <Card className='w-full' >
            <div className='w-full'>
                <h1 className='font-bold text-base mb-2'>Quick Stats</h1>
               <div className='flex flex-col gap-2'>
               <QuickStatsCard isLoading={countriesLoading} title='Total Countries' value={countries?.countries?.length ?? 195}/> 
               <QuickStatsCard isLoading={languagesLoading} title='Total Languages' value={languagesData?.languages?.length ?? 195}/> 
               <QuickStatsCard isLoading={languagesLoading} title='Most Common Language' value={"English"}/> 
               </div>
            </div>
        </Card>
  )
}

export default QuickStats