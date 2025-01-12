/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactApexChart from 'react-apexcharts';
import Skeleton from './skeleton';
import { ApexOptions } from 'apexcharts';

export default function ReusableChart({ data, categories,isLoading,name='Countries' }: any) {

  // chart options
  const chartOptions:ApexOptions ={
    chart: {
      toolbar: { show: true },
      zoom: { enabled: true },
      foreColor: '#999',
      fontFamily: 'Inter, sans-serif',
    },
    plotOptions: {
      bar: {
        columnWidth: '70%',
        borderRadius: 10,
      },
    },
    xaxis: {
      categories: categories,
      labels: { style: { fontSize: '12px' } },
    },
    yaxis: {
      labels: {
        formatter: (val: any) => val.toFixed(0),
        style: { fontSize: '12px' },
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => val.toLocaleString(),
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: '#e0e0e0',
    },
    colors: ['#008FFB'],
    legend: {
        show: true,
        position: 'top',
        showForSingleSeries: true,
        customLegendItems: [name],
        markers: {
          fillColors: ['#008FFB'],
        
          
        },
        horizontalAlign: 'center',
        
        itemMargin: {
          horizontal: 10,
          vertical: 5,
        },
      }
  };

  return (
    <div className="bg-white shadow-md rounded-lg h-full w-full p-4">

      {/* Show loading skeleton if isLoading is true */}
      {isLoading ? (
       <Skeleton/>
      ) : data.length > 0 ? (
        <ReactApexChart
          type="bar"
          series={[
            {
              name: name || 'Data',
              data: data,
            },
          ]}
          options={chartOptions}
          height={450}
        />
      ) : (
        <div className="text-center mt-5">
          <div className="h-12 w-32 bg-gray-200 rounded-md mx-auto animate-pulse"></div>
          <p className="text-gray-500 mt-2">No Data Available</p>
        </div>
      )}
    </div>
  );
}



