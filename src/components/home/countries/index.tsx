import Card from '@/components/card'
import SelectInput from '@/components/inputs/select-input'
import { GET_CONTINENTS } from '@/graphql/queries'
import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import ContinentDetail from './continents-detail'


const CountriesInfoByContinent = () => {
    const [selectedContinent, setSelectedContinent] = useState('AS');
    const {data: continentsData , loading: continentsLoading} = useQuery(GET_CONTINENTS);
    const options = continentsData?.continents.map((continent: any) => {
        return{
            label: continent.name,
            value: continent.code
        }
    });

    const onChange = (value: string) => {
        setSelectedContinent(value);
    }
  return (
    <Card className='min-h-[500px]'>
    <div className='flex flex-col gap-2' >
      <SelectInput
      options={options || []}
      label="Select Continent"
      value={selectedContinent}
      onChange={onChange}   
      
      />
      <div>
       <ContinentDetail continent={selectedContinent}/>
      </div>
    </div>

  </Card>
  )
}

export default CountriesInfoByContinent