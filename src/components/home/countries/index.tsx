import Card from '@/components/card'
import SelectInput, { IOption } from '@/components/inputs/select-input'
import { GET_CONTINENTS } from '@/graphql/queries'
import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import ContinentDetail from './continent-detail'
import { ContinentQuery } from '@/interfaces'


const CountriesInfoByContinent = () => {
    const [selectedContinent, setSelectedContinent] = useState('AS');
    const {data: continentsData } = useQuery(GET_CONTINENTS);
    const options:IOption[] = continentsData?.continents.map((continent: ContinentQuery) => {
        return{
            label: continent.name,
            value: continent.code
        }
    });

    const onChange = (value: string) => {
        setSelectedContinent(value);
    }
  return (
    <Card className='px-4 min-h-[500px] bg-white'>
    <div className=' flex flex-col gap-2' >
     <div className='pt-3 px-4 lg:pl-4 lg:px-0'>
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