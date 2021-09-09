import React from 'react';
import { Paper } from '@material-ui/core';
import ReactApexChart from "react-apexcharts";

const ChartItem006 = () => {
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
    legend: {
      show:true,
      position: 'bottom'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
            formatter: function (val) {
              return val
            }
          },
          total: {
            show: true,
            label: 'Total Occurrence',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            }
          }
        }
      }
    },
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

export default ChartItem006;