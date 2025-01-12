/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactApexChart from 'react-apexcharts';
import Skeleton from './skeleton';

export default function RadarChart({
  data,
  categories,
  isLoading,
  name = 'Countries',
}: any) {
  // Define chart options for radar chart
  const chartOptions = {
    chart: {
      toolbar: { show: true },
      zoom: { enabled: true },
      foreColor: '#999',
      fontFamily: 'Inter, sans-serif',
      type: 'radar',
      height:450,
      width:450
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: '#e0e0e0',
          fill: { colors: ['#f8f8f8'] },
        },
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 4,
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      labels: {
        formatter: (val: any) => val.toFixed(0),
        style: { fontSize: '12px' },
      },
    },
    tooltip: {
      y: {
        formatter: (val: string) => val.toLocaleString(),
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
        width: 10,
        height: 10,
        radius: 12,
      },
      horizontalAlign: 'center',
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg h-full w-full p-4">

      {/* Show loading skeleton if isLoading is true */}
      {isLoading ? (
        <Skeleton />
      ) : data.length > 0 ? (
        <ReactApexChart
          type="radar"
          series={[
            {
              name: name || 'Data',
              data: data,
            },
          ]}
          // @ts-expect-error option 
          options={chartOptions}
          height={300}
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

