'use client';

import type { ApexOptions } from 'apexcharts';
import ApexChart from 'react-apexcharts';

interface BarChartProps {
  max: number;
  results: any;
  facetNames?: string[];
  isComparison?: boolean;
}

export const COLORS = ['#9353d3', '#006FEE', '#f31260', '#f5a524', '#17c964', '#E2711D'];

export const BarChart = ({ max, results, facetNames, isComparison = false }: BarChartProps) => {
  // Comparison mode: results = [{name, facets/domains: [{title, score}]}]
  // Single mode: results = [{title, score}]
  
  if (isComparison && facetNames) {
    // Grouped bar chart for comparison
    const series = results.map((person: any) => ({
      name: person.name,
      data: (person.facets || person.domains).map((item: any) => item.score)
    }));

    const options: ApexOptions = {
      theme: {
        mode: 'light'
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
        fontSize: '13px',
        fontFamily: 'Inter, sans-serif',
        markers: {
          size: 12
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        fontFamily: 'Inter, sans-serif',
        background: 'transparent',
        type: 'bar'
      },
      yaxis: {
        max
      },
      xaxis: {
        categories: facetNames,
        labels: {
          rotate: -45,
          rotateAlways: false,
          hideOverlappingLabels: true,
          trim: true,
          maxHeight: 80,
          style: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px'
          }
        }
      },
      plotOptions: {
        bar: {
          distributed: false,
          dataLabels: {
            position: 'top'
          },
          columnWidth: '75%'
        }
      },
      dataLabels: {
        enabled: true,
        formatter: (val: number) => val.toString(),
        offsetY: -20,
        style: {
          fontSize: '10px',
          colors: ['#333']
        }
      },
      colors: COLORS,
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: number) => `${val} points`
        }
      }
    };

    return (
      <div>
        <ApexChart
          type='bar'
          options={options}
          series={series}
          height={350}
          width='100%'
        />
      </div>
    );
  }

  // Original single-result mode
  const options: ApexOptions = {
    theme: {
      mode: 'light'
    },
    legend: {
      show: false
    },
    chart: {
      toolbar: {
        show: false
      },
      fontFamily: 'Inter, sans-serif',
      background: 'transparent'
    },
    yaxis: {
      max
    },
    xaxis: {
      categories: results.map((result: any) => result.title),
      labels: {
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        trim: true,
        maxHeight: 80,
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px'
        }
      }
    },
    plotOptions: {
      bar: {
        distributed: true,
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => val.toString(),
      offsetY: -20,
      style: {
        fontSize: '11px',
        colors: ['#333']
      }
    },
    fill: {
      colors: COLORS
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val: number) => `${val} points`
      }
    }
  };

  const series = [
    {
      name: 'Score',
      data: results.map((result: any) => result.score)
    }
  ];

  return (
    <div>
      <ApexChart
        type='bar'
        options={options}
        series={series}
        height={350}
        width='100%'
      />
    </div>
  );
};
