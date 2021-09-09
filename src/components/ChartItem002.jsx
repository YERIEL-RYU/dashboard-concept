import React from 'react';
import { Paper } from '@material-ui/core';
import ReactApexChart from "react-apexcharts";

const ChartItem002 = () => {
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
      type: 'bar',
      height: '350',
      stacked: true,
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
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10
      },
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
  };
  return (
    <Paper style={{ height: '100%', backgroundColor: 'white' }}>
      <div style={{ fontSize: 'large', fontWeight: 'bold', color: '#5f5f5f', padding: '20px' }}>Weekly Data Status</div>
      <ReactApexChart
        options={weeklyOptions}
        series={weeklySeries}
        type="bar"
        height="350px"
      />
    </Paper>
  );
};

export default ChartItem002;