import { GET_CONTINENT } from '@/graphql/queries'
import { Country } from '@/interfaces'
import { generateScatterPlotData } from '@/utils/util'
import { useQuery } from '@apollo/client'
import React from 'react'

type Props = {
    continent:string
}

const ContinentDetail = (props: Props) => {
  const {continent} = props

  const {data} = useQuery(GET_CONTINENT,{
    variables: { code: continent },
  })

  const countries = data?.continent.countries
  const scatterData  = generateScatterPlotData(countries ?? [])

  console.log('data',data,scatterData);
  
    return (
    <div>
        {continent}
        
        {
            countries?.map((country: Country) => <div key={country.code}>{country.name}</div> )
        }
        </div>
  )
}

export default ContinentDetail