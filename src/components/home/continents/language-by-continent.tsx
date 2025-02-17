'use client'
import { ContinentQuery } from '@/interfaces'
import { generateLangChartDataByContinents } from '@/utils/util'
import React, { useMemo } from 'react'
import PieChart from '../../charts/pie-chart'

type Props = {
    data:ContinentQuery[];
    isLoading?:boolean
}

const LanguageDistByContinent = (props: Props) => {
    const {data,isLoading} = props;

    const {continentNames, languageCounts,} = useMemo(() => generateLangChartDataByContinents(data ?? []), [data]);
  return (
    <div className='w-full'>
        <PieChart
            data={languageCounts}
            categories={continentNames}
            isLoading={isLoading}
        />
    </div>
  )
}

export default LanguageDistByContinent