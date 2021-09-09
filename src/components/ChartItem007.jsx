import React from 'react';
import { Paper } from '@material-ui/core';
import ReactApexChart from "react-apexcharts";

const ChartItem007 = () => {
  const conditionSeries = [
    40,
    15,
    31,
    10,
    7
  ]
  const conditionOption = {
    chart: {
      type: 'radialBar',
    },
    labels: ['sarcopenia', 'fibrosis', 'stone', 'condition4', 'condition5'],
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    legend: {
      show: true,
      floating: true,
      fontSize: '10px',
      position: 'left',
      offsetX: 100,
      offsetY: 5,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }],
    theme: {
      mode: 'light',
      palette: 'palette2',
      monochrome: {
        enabled: false,
        color: '#255aee',
        shadeTo: 'light',
        shadeIntensity: 0.65
      },
    }
  }
  return (
    <Paper style={{ height: '100%', backgroundColor: 'white' }}>
      <div style={{ fontSize: 'large', fontWeight: 'bold', color: '#5f5f5f', padding: '20px' }}>Condition Status</div>
      <ReactApexChart
        options={conditionOption}
        series={conditionSeries}
        type="radialBar"
        height="350px"
      />
    </Paper>
  );
};

export default ChartItem007;