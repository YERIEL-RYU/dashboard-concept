import React from 'react';
import { Divider, Paper } from '@material-ui/core';
import styled from "styled-components";

const ContentCount = styled.div`
  font-size: xx-large;
  font-weight: bolder;
  color: #3f51b5;
  padding-bottom: 5px;
`;


const ContentTitle = styled.div`
  font-size: larger;
  font-weight: 500;
  color: #5f5f5f;
`;
const CountItem11 = () => {
  return (
    <Paper style={{ height: '100%', backgroundColor: 'white' }}>
      <div style={{ padding: '17px 20px', textAlign: 'center' }}>
        <ContentCount >33</ContentCount>
        <ContentTitle >Total Patient</ContentTitle>
      </div>
      <Divider />
      <div style={{ padding: '17px 20px', textAlign: 'center' }}>
        <ContentCount>5</ContentCount>
        <ContentTitle>Total Condition</ContentTitle>
      </div>
      <Divider />
      <div style={{ padding: '17px 20px', textAlign: 'center' }}>
        <ContentCount>5</ContentCount>
        <ContentTitle>Total Condition</ContentTitle>
      </div>
      <Divider />
      <div style={{ padding: '17px 20px', textAlign: 'center' }}>
        <ContentCount>5</ContentCount>
        <ContentTitle>Total Condition</ContentTitle>
      </div>
    </Paper>
  );
};

export default CountItem11;