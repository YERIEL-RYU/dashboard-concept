import React from 'react';
import { Paper } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const CountItem05 = () => {
  return (
    <Paper style={{ padding: '20px', color: '#333333', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ fontSize: "x-large" }}>
        TOTAL PATIENT
      </div>
      <div style={{ fontSize: 'xxx-large', fontWeight: 'bolder', padding: '20px 0', textAlign: 'center' }}>
        33
      </div>
      <div style={{ color: '#3498db', textAlign: 'right', fontSize: 'large' }}>
        <ArrowUpwardIcon fontSize='large' style={{ paddingTop: '15px' }} /> 5
      </div>
    </Paper>
  );
};

export default CountItem05;