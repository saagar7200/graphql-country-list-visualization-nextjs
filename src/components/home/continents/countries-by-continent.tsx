import React, { useMemo } from 'react'
import ReusableChart from '../../charts/bar-chart'
import { dummyProps } from '../charts/dummydata'
import { ContinentsQuery } from '@/interfaces';
import { generateChartDataByContinents } from '@/utils/util';
import Card from '../../card';
import RadarChart from '@/components/charts/radar-chart';

interface IProps {
    data:ContinentsQuery[];
    isLoading?:boolean
}

const CountriesByContinent = (props:IProps) => {
  const { data: continentsData,isLoading}= props

    const {continentsName,countries} = useMemo(() => generateChartDataByContinents(continentsData ?? []), [continentsData])
    console.log("continents on component", continentsName,countries);

  return (
   <div>
    <Card className='aspect-auto w-full  my-2'>
    <div className='w-full px-3'>
    <h2 className="text-xl font-bold text-gray-800 mb-2">Countries By Continent</h2>

      <div className='flex gap-1'>
      <ReusableChart
      title={"Countries By Continent"}
      data={countries}
      categories={continentsName}
      isLoading={isLoading}
      />
      <RadarChart
      title={"Countries By Continent"}
      data={countries}
      categories={continentsName}
      isLoading={isLoading}
      />
      </div>
    </div>
    </Card>
   </div>
  )
}

export default CountriesByContinent