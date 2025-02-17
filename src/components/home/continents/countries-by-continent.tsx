
'use client'
import React, {  useMemo } from 'react'
import ReusableChart from '../../charts/bar-chart'
import { ContinentQuery } from '@/interfaces';
import { generateChartDataByContinents } from '@/utils/util';
import RadarChart from '@/components/charts/radar-chart';


interface IProps {
    data:ContinentQuery[];
    isLoading?:boolean
}



const CountriesByContinent = (props:IProps) => {
  const { data: continentsData,isLoading}= props

    const {continentNames, countryCounts} = useMemo(() => generateChartDataByContinents(continentsData ?? []), [continentsData])

  return (
   <div>
    <div className='w-full mb-5 bg-white pt-4 min-h-[500px]'>
    <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Number of Countries by Continent</h2>

      <div className='flex gap-1 flex-col lg:flex-row mt-5'>
     <ReusableChart
      data={countryCounts}
      categories={continentNames}
      isLoading={isLoading}
      />
 
      <RadarChart
      data={countryCounts}
      categories={continentNames}
      isLoading={isLoading}
      />
      </div>
    </div>
   </div>
  )
}

export default CountriesByContinent