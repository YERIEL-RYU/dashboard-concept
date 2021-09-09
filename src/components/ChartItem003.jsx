import React from 'react';
import { Paper } from '@material-ui/core';
import ReactApexChart from "react-apexcharts";

const ChartItem003 = () => {
  const modalitySeries = [
    40,
    15
  ]
  const modalityOption = {
    series: [40, 15],
    chart: {
      type: 'donut',
    },
    labels: ['CT', 'MR'],
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
      <div style={{ fontSize: 'large', fontWeight: 'bold', color: '#5f5f5f', padding: '20px' }}>Weekly Data Status</div>
      <ReactApexChart
        options={modalityOption}
        series={modalitySeries}
        type="donut"
        height="350px"
      />
    </Paper>
  );
};

export default ChartItem003;