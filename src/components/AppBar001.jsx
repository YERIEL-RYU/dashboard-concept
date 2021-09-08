import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const AppBar001 = () => {
  return (
    <div id="title" style={{ backgroundColor: 'white', color: '#3f51b5', alignItems: 'center', fontSize: 'large', display: 'flex', justifyContent: 'space-between', height: '60px', margin: '5px 0', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <DehazeIcon />
        <div style={{ paddingLeft: '20px' }}>
          Dashboard
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ color: 'black' }}>yeriel 님</div>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
};

export default AppBar001;