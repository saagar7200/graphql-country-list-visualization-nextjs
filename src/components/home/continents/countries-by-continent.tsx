import React, { useMemo } from 'react'
import ReusableChart from '../../charts/bar-chart'
import { ContinentsQuery } from '@/interfaces';
import { generateChartDataByContinents } from '@/utils/util';
import RadarChart from '@/components/charts/radar-chart';

interface IProps {
    data:ContinentsQuery[];
    isLoading?:boolean
}



const CountriesByContinent = (props:IProps) => {
  const { data: continentsData,isLoading}= props

    const {continentNames, countryCounts} = useMemo(() => generateChartDataByContinents(continentsData ?? []), [continentsData])

  return (
   <div>
    <div className='w-full mb-5 bg-white pt-4 '>
    <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Number of Countries by Continent</h2>

      <div className='flex gap-1 flex-col lg:flex-row mt-5'>
      <ReusableChart
      title={"Countries By Continent"}
      data={countryCounts}
      categories={continentNames}
      isLoading={isLoading}
      />
      <RadarChart
      title={"Countries By Continent"}
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