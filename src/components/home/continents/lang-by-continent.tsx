import { ContinentsQuery } from '@/interfaces'
import { generateLangChartDataByContinents } from '@/utils/util'
import React from 'react'
import PieChart from '../../charts/pie-chart'

type Props = {
    data:ContinentsQuery[]
}

const LanguageDistByContinent = (props: Props) => {
    const {data} = props;

    const {continentNames, languageCounts,} = generateLangChartDataByContinents(data ?? []);
    console.log('languageCount', continentNames, languageCounts);
  return (
    <div className='w-full'>
        <PieChart
            data={languageCounts}
            categories={continentNames}
        />
    </div>
  )
}

export default LanguageDistByContinent