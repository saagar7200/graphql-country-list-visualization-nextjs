import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Skeleton from './skeleton';

type MixedChartDataPoint = {
  x: string; // Country name
  y: number; // Number of languages or states
  country: string; // Country name
  languages: string; // Comma-separated list of languages
  states: number; // Number of states
};

export interface IMixedChart {
  data: MixedChartDataPoint[]; // Array of data points for mixed chart
  isLoading?: boolean; // Loading state
  name?: string; // Chart title
}

const MixedChart: React.FC<IMixedChart> = ({
  data,
  isLoading = false,
  name = 'Languages and States Across Countries',
}) => {
  const chartOptions = {
    chart: {
      type: 'line',
      stacked: false,
      toolbar: { show: true },
      foreColor: '#333',
      fontFamily: 'Inter, sans-serif',
     
    },
    stroke: {
      width: [0, 4], // Bar width and line width
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: data.map((point) => point.x),
      title: {
        text: 'Country Name',
      },
    },
    yaxis: [
      {
        title: {
          text: 'Number of Languages',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Number of States',
        },
      },
    ],
    tooltip: {
      shared: true,
      custom: function ({
        seriesIndex,
        dataPointIndex,
      }: {
        seriesIndex: number;
        dataPointIndex: number;
      }) {
        const point = data[dataPointIndex];
        return `
          <div style="padding: 8px; border-radius: 4px; background: #f4f4f4; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <strong>${point.country}</strong><br />
            ${seriesIndex === 0 ? 'Languages' : 'States'}: ${seriesIndex === 0 ? point.y : point.states}<br />
            ${seriesIndex === 0 ? `Languages: ${point.languages}` : ''}
          </div>
        `;
      },
    },
    grid: {
      borderColor: '#e0e0e0',
    },
    colors: ['#008FFB', '#00E396'], 
    legend: {
      position: 'top', 
      horizontalAlign: 'center', 
      floating: true, 
      offsetY: 0, 
    },
  };

  const series = [
    {
      name: 'Number Of Languages',
      type: 'column',
      data: data.map((point) => ({
        x: point.x,
        y: point.y,
      })),
    },
    {
      name: 'Number ofStates',
      type: 'line',
      data: data.map((point) => ({
        x: point.x,
        y: point.states,
      })),
    },
  ];

  return (
    <div className="min-h-[350px] bg-white shadow-md rounded-lg h-full w-full p-4">
      <h2 className="text-center text-xl font-bold text-gray-800 mb-5">{name}</h2>

      {isLoading ? (
        <Skeleton/>
      ) : data?.length > 0 ? (
        <ReactApexChart
          type="line"
          series={series}
        //   @ts-expect-error option
          options={chartOptions}
          height={450}
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



export default MixedChart;
