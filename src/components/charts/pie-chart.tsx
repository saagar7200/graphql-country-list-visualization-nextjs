/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactApexChart from 'react-apexcharts';

export default function PieChart({
  data,
  categories,
  isLoading,
  name = 'Languages spoken By Continent',
}: any) {
  // Define chart options for pie chart
  const chartOptions = {
    chart: {
      toolbar: { show: true },
      zoom: { enabled: true },
      foreColor: '#999',
      fontFamily: 'Inter, sans-serif',
      type: 'pie',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%',
        },
      },
    },
    labels: categories,
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
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26A69A'],
    legend: {
      show: true,
      position: 'top',
      showForSingleSeries: true,
      markers: {
        fillColors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26A69A'],
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
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name || 'Chart'}</h2>

      {/* Show loading skeleton if isLoading is true */}
      {isLoading ? (
        <Skeleton />
      ) : data?.length > 0 ? (
        <ReactApexChart
          type="pie"
          series={data} // Data for the pie chart (number of languages)
          options={chartOptions}
          height={260}
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

const Skeleton = () => {
  return (
    <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse">
      <div className="h-10 bg-gray-300 rounded w-1/3 mb-4 mx-auto animate-pulse"></div>
    </div>
  );
};
