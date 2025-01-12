import { GET_CONTINENT, GET_CONTINENTS } from '@/graphql/queries'
import { generateScatterPlotData } from '@/utils/util'
import { useQuery } from '@apollo/client'
import React from 'react'

type Props = {
    continent:string
}

const ContinentDetail = (props: Props) => {
  const {continent} = props

  const {data,loading} = useQuery(GET_CONTINENT,{
    variables: { code: continent },
  })

  const countries = data?.continent.countries
  const scatterData  = generateScatterPlotData(countries ?? [])

  console.log('data',data,scatterData);
  
    return (
    <div>
        {continent}
        
        {
            countries?.map((country: any) => <div>{country.name}</div> )
        }
        </div>
  )
}

export default ContinentDetail