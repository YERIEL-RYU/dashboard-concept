import React from 'react';
import { Paper } from '@material-ui/core';
import ReactApexChart from "react-apexcharts";

const ChartItem004 = () => {
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
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10
      }
    },
    grid: {
      padding: {
        bottom: -100
      }
    },
    legend: {
      position: 'bottom'
    },
    theme: {
      mode: 'light',
      palette: 'palette3',
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
      <div style={{ fontSize: 'large', fontWeight: 'bold', color: '#5f5f5f', padding: '20px' }}>Modality Status</div>
      <ReactApexChart
        options={modalityOption}
        series={modalitySeries}
        type="donut"
        height="350px"
      />
    </Paper>
  );
};

export default ChartItem004;