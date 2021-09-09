import React from 'react';
import { Paper } from '@material-ui/core';
import ReactApexChart from "react-apexcharts";

const ChartItem001 = () => {
  const weeklySeries = [
    {
      name: "Upload",
      data: [
        1,
        11,
        21,
        21,
        10,
        7,
        0
      ],
    },
    {
      name: "Download",
      data: [
        0,
        1,
        10,
        15,
        9,
        5,
        2
      ],
    },
  ];
  const weeklyOptions = {
    chart: {
      type: 'area',
      height: '350',
      zoom: { enabled: false }
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    legend: {
      show: true
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    theme: {
      mode: 'light',
      palette: 'palette5',
      monochrome: {
        enabled: false,
        color: '#255aee',
        shadeTo: 'light',
        shadeIntensity: 0.65
      },
    }
  };
  return (
    <Paper style={{ height: '100%', backgroundColor: 'white' }}>
      <div style={{ fontSize: 'large', fontWeight: 'bold', color: '#5f5f5f', padding: '20px' }}>Weekly Data Status</div>
      <ReactApexChart
        options={weeklyOptions}
        series={weeklySeries}
        type="area"
        height="350px"
      />
    </Paper>
  );
};

export default ChartItem001;