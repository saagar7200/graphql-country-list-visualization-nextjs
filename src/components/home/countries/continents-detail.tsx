import ScatterChart from '@/components/charts/scatter-chart'
import { GET_CONTINENT } from '@/graphql/queries'
import { generateScatterPlotData } from '@/utils/util'
import { useQuery } from '@apollo/client'
import React, { useMemo } from 'react'
import MixedChart from '../../charts/line-and-bar-mixed-chart';
import CountryList from './country-list'

type Props = {
    continent:string
}

const ContinentDetail = (props: Props) => {
  const {continent} = props

  const {data,loading} = useQuery(GET_CONTINENT,{
    variables: { code: continent },
  })

  const countries = data?.continent.countries
  const chartData  = useMemo(() => generateScatterPlotData(countries ?? []), [countries])

  
    return (
    <div>
        <div>
          <ScatterChart data={chartData} isLoading={loading}/>
        </div>
        <div className='mt-6'>
        <MixedChart
        data={chartData}
        isLoading={loading}
        />
        </div>
        
        <div className='mt-3'>
        <CountryList continent={data?.continent?.name} data={data?.continent?.countries ?? []}/>
      </div>
        </div>
  )
}

export default ContinentDetail