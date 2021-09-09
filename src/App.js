import React from 'react';
import styled from "styled-components";
import BoardItem01 from './components/BoardItem01';
import BoardItem02 from './components/BoardItem02';
import ContentItem01 from './components/ContentItem01';
import CountItem01 from './components/CountItem01';
import CountItem02 from './components/CountItem02';
import CountItem03 from './components/CountItem03';
import CountItem04 from './components/CountItem04';
import CountItem05 from './components/CountItem05';
import CountItem06 from './components/CountItem06';
import CountItem07 from './components/CountItem07';
import CountItem08 from './components/CountItem08';
import CountItem09 from './components/CountItem09';
import CountItem10 from './components/CountItem10';
import CountItem11 from './components/CountItem11';
import CountItem12 from './components/CountItem12';
import TimelineItem01 from './components/TimelineItem01';

import AppBar from './components/AppBar';
import AppBar001 from './components/AppBar001';
import AppBar002 from './components/AppBar002';
import AppBar003 from './components/AppBar003';
import AppBar004 from './components/AppBar004';
import AppBar005 from './components/AppBar005';
import BoardItem03 from './components/BoardItem03';
import ChartItem001 from './components/ChartItem001';
import ChartItem002 from './components/ChartItem002';
import ChartItem003 from './components/ChartItem003';
import ChartItem004 from './components/ChartItem004';
import ChartItem005 from './components/ChartItem005';
import ChartItem006 from './components/ChartItem006';
import ChartItem007 from './components/ChartItem007';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 60px 1fr;
  height: 100vh;
  overflow: hidden;
  grid-template-areas:
    'sidenav header'
    'sidenav main'
    'sidenav main';
`;


const BoardContainer = styled.div`
  /* grid-area: main; */
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: 175px 210px 175px 180px 180px 180px;
  padding: 30px;
  /* overflow-y: scroll; */
  grid-gap: 30px;
  background-color: #eeeeee;
`;

const App = () => {
  return (
    <AppContainer >
      <AppBar ie="title"/>
      <div id="side-nav" style={{backgroundColor:'#2c3e50', gridRow:'1/3'}}></div>
      <div style={{gridArea:'main', overflowY:'scroll', backgroundColor:'#eeeeee'}}>
        <AppBar001 />
        <AppBar002 />
        <AppBar003 />
        <AppBar004 />
        <AppBar005 />
        <BoardContainer >
          <CountItem01 />
          <CountItem03 />
          <CountItem02 />
          <CountItem04 />
          <CountItem05 />
          <CountItem06 />
          <CountItem07 />
          <CountItem08 />
          <CountItem09 />
          <CountItem10 />
          <div style={{gridRow:'4/6', gridColumn:'1/3'}}>
            <ContentItem01/>
          </div>
          <div style={{gridRow:'3/6', gridColumn:'4/5'}}>
            <TimelineItem01 />
          </div>
          <div style={{gridRow:'4/6', gridColumn:'3/4'}}>
            <CountItem11 />
          </div>
          <div style={{gridRow:'3/4', gridColumn:'3/4'}}>
            <CountItem12 />
          </div>
          <div style={{gridRow:'6/8', gridColumn:'1/3'}}>
            <BoardItem01 />
          </div>
          <div style={{gridRow:'6/8', gridColumn:'3/5'}}>
            <BoardItem02 />
          </div>
          <div style={{gridRow:'8/10', gridColumn:'1/3'}}>
            <BoardItem03 />
          </div>
          <div style={{gridRow:'8/10', gridColumn:'3/5'}}>
            <ChartItem001 />
          </div>
          <div style={{gridRow:'10/11', gridColumn:'1/3'}}>
            <ChartItem002 />
          </div>
          <div style={{gridRow:'10/11', gridColumn:'3/4'}}>
            <ChartItem003 />
          </div>
          <div style={{gridRow:'10/11', gridColumn:'4/5'}}>
            <ChartItem004 />
          </div>
          <div style={{gridRow:'11/12', gridColumn:'1/2'}}>
            <ChartItem005 />
          </div>
          <div style={{gridRow:'11/12', gridColumn:'2/3'}}>
            <ChartItem006 />
          </div>
          <div style={{gridRow:'11/12', gridColumn:'3/4'}}>
            <ChartItem007 />
          </div>
        </BoardContainer>
      </div>
    </AppContainer>
  );
};

export default App;