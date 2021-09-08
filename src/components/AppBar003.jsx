import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core';

const AppBar003 = () => {
  return (
    <div id="title" style={{ backgroundColor: 'white', color: '#3f51b5', alignItems: 'center', fontSize: 'large', display: 'flex', justifyContent: 'space-between', height: '60px', margin: '5px 0', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <DehazeIcon />
        <div style={{ paddingLeft: '20px' }}>
          Dashboard
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Avatar style={{ backgroundColor: '#3498db', fontSize: 'x-large', fontWeight: '550' }}>Y</Avatar>
        <div style={{ alignSelf: 'center', padding: '0 5px' }}>
          <ArrowDropDownIcon />
        </div>
        <div>
          <div style={{ color: 'black', textAlign: 'end' }}>yeriel 님</div>
          <div style={{ color: '#999999', fontSize: 'small' }}>ADMINISTRATOR</div>
        </div>
      </div>
    </div>
  );
};

export default AppBar003;