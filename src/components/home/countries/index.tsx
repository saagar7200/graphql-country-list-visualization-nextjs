import Card from '@/components/card'
import SelectInput from '@/components/inputs/select-input'
import { GET_CONTINENTS } from '@/graphql/queries'
import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import ContinentDetail from './continents-detail'
import { ContinentQuery } from '@/interfaces'


const CountriesInfoByContinent = () => {
    const [selectedContinent, setSelectedContinent] = useState('AS');
    const {data: continentsData , loading: continentsLoading} = useQuery(GET_CONTINENTS);
    const options = continentsData?.continents.map((continent: ContinentQuery) => {
        return{
            label: continent.name,
            value: continent.code
        }
    });

    const onChange = (value: string) => {
        setSelectedContinent(value);
    }
  return (
    <Card className='p-0 min-h-[500px]'>
    <div className=' flex flex-col gap-2' >
     <div className='pt-3 pl-4'>
     <span className='text-gray-600'>Select Continent</span>
      <SelectInput
      options={options || []}
      label="Select Continent"
      value={selectedContinent}
      onChange={onChange}   
      
      />
     </div>
      <div>
       <ContinentDetail continent={selectedContinent}/>
      </div>
      
    </div>

  </Card>
  )
}

export default CountriesInfoByContinent