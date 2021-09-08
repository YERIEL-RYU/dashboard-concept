import React from 'react';
import styled from "styled-components";
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
  grid-area: main;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows:repeat(5,1fr);
  grid-template-columns: repeat(4,1fr);
  height: 100%;
  padding: 30px;
  overflow-y: scroll;
  grid-gap: 30px;
  background-color: #eeeeee;
`;

const App = () => {
  return (
    <AppContainer >
      <div id="title" style={{backgroundColor:'white', color:'#3f51b5',alignItems:'center', fontSize:'large', padding:'20px'}}>Dashboard</div>
      <div id="side-nav" style={{backgroundColor:'#2c3e50', gridRow:'1/3'}}></div>
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
          <div style={{gridRow:'4/6', gridColumn:'1/5', backgroundColor:'whitesmoke'}}>
            test
          </div>
      </BoardContainer>
    </AppContainer>
  );
};

export default App;