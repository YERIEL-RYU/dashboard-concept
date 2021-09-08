import React from 'react';
import { Paper } from '@material-ui/core';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const CountItem04 = () => {
  return (
    <Paper style={{ padding: '10px', color: '#333333', display: 'flex', flexDirection: 'row', margin: 'auto 0', justifyContent: 'space-between' }}>
      <div style={{ alignSelf: 'center' }}>
        <SupervisedUserCircleIcon style={{ fontSize: '120px', color: '#3f51b5' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px' }}>
        <div style={{ fontSize: 'x-large', padding: '7px' }}>Total Patient</div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <div style={{ textAlign: 'right', padding: '0 10px', fontSize: 'small', color: '#3498db', alignSelf: 'center' }}>
            + 5
          </div>
          <div style={{ fontSize: 'xx-large', textAlign: 'right', padding: '10px' }}>33</div>
        </div>
      </div>
    </Paper>
  );
};

export default CountItem04;