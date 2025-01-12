import { ContinentsQuery } from '@/interfaces'
import { generateLangChartDataByContinents } from '@/utils/util'
import React from 'react'
import PieChart from '../../charts/pie-chart'

type Props = {
    data:ContinentsQuery[];
    isLoading?:boolean
}

const LanguageDistByContinent = (props: Props) => {
    const {data,isLoading} = props;

    const {continentNames, languageCounts,} = generateLangChartDataByContinents(data ?? []);
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