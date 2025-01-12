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
    const {continentNames,countryCounts} = useMemo(() => generateChartDataByContinents(data ?? []), [data])
  return (
    <div>
        <RadarChart
        data={countryCounts}
        categories={continentNames}
        isLoading={isLoading}
        />
    </div>
  )
}

export default CountryRadarChart