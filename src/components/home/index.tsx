'use client'

import { GET_CONTINENTS } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import React from 'react'
import Header from './header';
import QuickStats from '../quick-stats/quick-stats';
import CountriesByContinent from './continents/countries-by-continent';
import LanguageDistByContinent from './continents/lang-by-continent';
import Card from '../card';
import CountriesInfoByContinent from './countries';

const Home = () => {
    // const { data: countriesData, loading: countriesLoading } = useQuery(GET_COUNTRIES);
    const { data: continentsData, loading: continentsLoading } = useQuery(GET_CONTINENTS);

    
    const continents = continentsData?.continents;
    // console.log('countries',countries,"continents", continents);

  return (
    <div className='w-full flex flex-col gap-4'>
      <Header/>
        <div className=' grid gap-x-2 grid-cols-12 py-2 w-full '>
            
            <div className='col-span-12 '>
              <CountriesByContinent isLoading={continentsLoading} data={continents}/>
            </div>
            
            <div className='col-span-12 md:col-span-8'>
              <LanguageDistByContinent data={continents}/>
            </div>
            <div className='col-span-12 md:col-span-4'>
              <QuickStats/>
            </div>
            
            

        </div>
        <div className=' min-h-[600px]'>
          <CountriesInfoByContinent/>
        </div>
      
    </div>
  )
}

export default Home
