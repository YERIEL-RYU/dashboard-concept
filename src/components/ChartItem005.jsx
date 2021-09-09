import React from 'react';
import { Paper } from '@material-ui/core';
import ReactApexChart from "react-apexcharts";

const ChartItem005 = () => {
  const conditionSeries = [
    40,
    15,
    31,
    10,
    7
  ]
  const conditionOption = {
    series: [40, 15],
    chart: {
      type: 'polarArea',
    },
    labels: ['sarcopenia', 'fibrosis', 'stone', 'condition4', 'condition5'],
    legend: {
      position: 'bottom'
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
        type="polarArea"
        height="350px"
      />
    </Paper>
  );
};

export default ChartItem005;