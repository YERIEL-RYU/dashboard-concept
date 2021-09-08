import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';

const AppBar = () => {
  return (
    <div id="title" style={{ backgroundColor: 'white', color: '#3f51b5', alignItems: 'center', fontSize: 'large', padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <DehazeIcon />
        <div style={{ paddingLeft: '20px' }}>
          Dashboard
        </div>
      </div>
      <div style={{ color: 'black' }}>yeriel 님</div>
    </div>
  );
};

export default AppBar;