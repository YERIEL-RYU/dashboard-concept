import React from 'react';
import { Paper } from '@material-ui/core';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const CountItem09 = () => {
  return (
    <Paper style={{ padding: '10px', color: '#333333', display: 'flex', flexDirection: 'column', margin: 'auto 0', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 'x-large', padding: '7px', fontWeight: '500' }}>Total Patient</div>
        <SupervisedUserCircleIcon style={{ color: '#3f51b5', fontSize: '3rem' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 'xx-large', padding: '10px' }}>33</div>
        <div style={{ padding: '0 10px', fontSize: 'small', color: '#3498db', display: 'flex' }}>
          + 5
          <div style={{ color: '#999999', marginLeft: '10px' }}>
            since yesterday
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default CountItem09;