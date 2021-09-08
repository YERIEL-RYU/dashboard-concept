import React from 'react';
import { Paper } from '@material-ui/core';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const CountItem07 = () => {
  return (
    <Paper style={{ padding: '10px', color: '#333333', display: 'flex', flexDirection: 'row', margin: 'auto 0', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px' }}>
        <div style={{ fontSize: 'x-large', padding: '7px' }}>Total Patient</div>
        <div style={{ fontSize: 'xx-large', padding: '10px' }}>33</div>
        <div style={{ padding: '0 10px', fontSize: 'small', color: '#3498db', display: 'flex' }}>
          + 5
          <div style={{ color: '#999999', marginLeft: '10px' }}>
            since yesterday
          </div>
        </div>
      </div>
      <div style={{ alignSelf: 'center' }}>
        <SupervisedUserCircleIcon style={{ fontSize: '120px', color: '#3f51b5' }} />
      </div>
    </Paper>
  );
};

export default CountItem07;