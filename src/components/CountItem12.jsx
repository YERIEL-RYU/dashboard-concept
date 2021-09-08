import { Paper } from '@material-ui/core';
import React from 'react';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const CountItem12 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }}>
      <Paper style={{ height: '100%', marginRight: '15px', backgroundColor: '#268ed4', color: '#3db2ff', width: '100%' }}>
        <ItemContainer >
          <SupervisedUserCircleIcon style={{ fontSize: '4rem' }} />
          <div style={{ fontSize: 'xx-large', fontWeight: 'bolder', alignSelf: 'center' }}>33</div>
        </ItemContainer>
        <div style={{ textAlign: 'end', padding: '20px', fontSize: 'larger', fontWeight: 'bold' }}>Total patient</div>
      </Paper>
      <Paper style={{ height: '100%', marginLeft: '15px', backgroundColor: '#006400', color: '#00a500', width: '100%' }}>
        <ItemContainer >
          <SupervisedUserCircleIcon style={{ fontSize: '4rem' }} />
          <div style={{ fontSize: 'xx-large', fontWeight: 'bolder', alignSelf: 'center' }}>33</div>
        </ItemContainer>
        <div style={{ textAlign: 'end', padding: '20px', fontSize: 'larger', fontWeight: 'bold' }}>Total patient</div>
      </Paper>
    </div>
  );
};

export default CountItem12;