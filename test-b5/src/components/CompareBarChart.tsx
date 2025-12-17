'use client';

import type { ApexOptions } from 'apexcharts';
import ApexChart from 'react-apexcharts';

interface CompareBarChartProps {
  max: number;
  facetNames: string[];
  participants: Array<{
    name: string;
    scores: number[];
  }>;
}

// Extended color palette for up to 10 people
const COMPARISON_COLORS = [
  '#9353d3', // Purple
  '#006FEE', // Blue
  '#f31260', // Pink
  '#f5a524', // Orange
  '#17c964', // Green
  '#E2711D', // Dark Orange
  '#7828c8', // Deep Purple
  '#0072f5', // Bright Blue
  '#c20e4d', // Deep Pink
  '#12a150', // Forest Green
];

export const CompareBarChart = ({ max, facetNames, participants }: CompareBarChartProps) => {
  // Limit to 10 participants
  const limitedParticipants = participants.slice(0, 10);

  const series = limitedParticipants.map((person, index) => ({
    name: person.name,
    data: person.scores,
    color: COMPARISON_COLORS[index % COMPARISON_COLORS.length]
  }));

  const options: ApexOptions = {
    theme: {
      mode: 'light'
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif',
      markers: {
        size: 12
      },
      itemMargin: {
        horizontal: 12,
        vertical: 6
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
    colors: COMPARISON_COLORS,
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
};
