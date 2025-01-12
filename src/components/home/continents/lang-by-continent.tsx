import { ContinentsQuery } from '@/interfaces'
import { generateLangChartDataByContinents } from '@/utils/util'
import React from 'react'
import PieChart from '../../charts/pie-chart'

type Props = {
    data:ContinentsQuery[]
}

const LanguageDistByContinent = (props: Props) => {
    const {data} = props;

    const languageCount = generateLangChartDataByContinents(data ?? []);
    console.log('languageCount', languageCount);
  return (
    <div className='w-full'>
        <PieChart
            data={languageCount.languageCounts}
            categories={languageCount.continentsName}
        />
    </div>
  )
}

export default LanguageDistByContinent