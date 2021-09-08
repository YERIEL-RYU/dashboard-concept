/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Paper } from '@material-ui/core';

const CountItem08 = () => {
  return (
    <Paper style={{ padding: '10px', color: '#5a6bc7', display: 'flex', flexDirection: 'row', margin: 'auto 0', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px' }}>
        <div style={{ fontSize: 'x-large', padding: '7px', fontWeight: 'bold' }}>R_CDM Guidebook </div>
      </div>
      <div style={{ alignSelf: 'center' }}>
        <img
          src="https://image.freepik.com/free-vector/tiny-people-with-guide-instructions-handbooks-flat-vector-illustration-cartoon-characters-reading-user-manual-guidebook-guidance-help-book-with-instructions-use-concept_74855-10173.jpg"
          style={{ height: '140px' }}
        />
      </div>
    </Paper>
  );
};

export default CountItem08;