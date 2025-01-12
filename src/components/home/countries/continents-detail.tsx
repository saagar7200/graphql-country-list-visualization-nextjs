import ScatterChart from '@/components/charts/scater-chart'
import { GET_CONTINENT } from '@/graphql/queries'
import { generateScatterPlotData } from '@/utils/util'
import { useQuery } from '@apollo/client'
import React from 'react'
import MixedChart from '../../charts/mixed-chart';
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
  const chartData  = generateScatterPlotData(countries ?? [])

  
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