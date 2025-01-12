import React from 'react';
import Skeleton from './skeleton';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
const  ReactApexChart  = dynamic(() => import('react-apexcharts'));

type ScatterDataPoint = {
  x: string; 
  y: number; 
  states: number;
  country: string; 
  languages: string; 
};

export interface IScatterChart {
  data: ScatterDataPoint[]; 
  isLoading?: boolean; 
  name?: string; 
}

const ScatterChart: React.FC<IScatterChart> = ({
  data,
  isLoading ,
  name = 'Languages Spoken in Each Country',
}) => {
  const chartOptions:ApexOptions = {
    chart: {
      type: 'scatter',
      zoom: { enabled: true },
      toolbar: { show: true },
      foreColor: '#333',
      fontFamily: 'Inter, sans-serif',
    },
    xaxis: {
      title: {
        text: 'Country Name',
      },
      labels: {
        formatter: (value: string): string => value, 
      },
    },
    yaxis: {
      title: {
        text: 'Number of Languages',
      },
    },
    tooltip: {
      custom: function ({ dataPointIndex }: { dataPointIndex: number }) {
        const point = data[dataPointIndex];
        return `
          <div style="padding: 8px; border-radius: 4px; background: #f4f4f4; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <strong>${point.country}</strong><br />
            Languages: ${point.languages}<br />
            Count: ${point.y}
          </div>
        `;
      },
    },
    grid: {
      borderColor: '#e0e0e0',
    },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26A69A'],
  };

  const series = [
    {
      name: 'Languages Spoken',
      data: data.map((point) => ({
        x: point.x,
        y: point.y,
      })),
    },
  ];

  return (
    <div className="min-h-[500px] bg-white shadow-md rounded-lg h-full w-full p-4">
      <h2 className="text-center text-xl font-bold text-gray-800 mb-5">{name}</h2>

      {isLoading ? (
        <Skeleton/>
      ) : data?.length > 0 ? (
        <ReactApexChart
          type="scatter"
          series={series}
          options={chartOptions}
          height={400}
        />
      ) : (
        <div className="text-center mt-5">
          <div className="h-12 w-32 bg-gray-200 rounded-md mx-auto"></div>
          <p className="text-gray-500 mt-2">No Data Available</p>
        </div>
      )}
    </div>
  );
};

export default ScatterChart;
