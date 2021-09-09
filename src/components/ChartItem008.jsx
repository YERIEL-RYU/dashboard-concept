import React from 'react';
import { Paper } from '@material-ui/core';
import ReactApexChart from "react-apexcharts";

const ChartItem008 = () => {
  const patientSeries = [
    {
      name: "Count",
      data: [
        2,
        4,
        5,
        7,
        8,
        9,
        13
      ],
    },
  ];

  const patientOptions = {
    chart : {
      type : 'area',
      height : 200,
      sparkline : {enabled : true}
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    color : ['#006888'],
    title : {
      offsetX : 30,
      offsetY : 20,
      text:'50',
      style: {
        fontSize : '20px',
      }
    },
    subtitle:{
      offsetX: 30,
      offsetY: 50,
      text : 'Total patient'
    },
    stroke: {
      curve: 'straight'
    },
  };

  return (
    <Paper>
      <ReactApexChart 
        type="area"
        series={patientSeries}
        options={patientOptions}
        height="300"
      />
    </Paper>
  );
};

export default ChartItem008;