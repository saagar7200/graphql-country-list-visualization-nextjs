import { ContinentsQuery } from '@/interfaces'
import { generateChartDataByContinents } from '@/utils/util'
import React, { useMemo } from 'react'
import RadarChart from '../../charts/radar-chart';

type Props = {
    data:ContinentsQuery[];
    isLoading?:boolean
}

const CountryRadarChart = (props: Props) => {
    const {data,isLoading} = props
    const {continentsName,countries} = useMemo(() => generateChartDataByContinents(data ?? []), [data])
  return (
    <div>
        <RadarChart
        title={"Countries By Continent"}
        data={countries}
        categories={continentsName}
        isLoading={isLoading}
        />
    </div>
  )
}

export default CountryRadarChart