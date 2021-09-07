import React from 'react';
import styled from "styled-components";

const BoardContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: #eeeeee;
`;

const App = () => {
  return (
    <div style={{display:'grid', gridTemplateColumns:'280px 1fr', gridTemplateRows:'60px 1fr', height:'100vh'}}>
      <div id="side-nav" style={{backgroundColor:'#2c3e50', gridRow:'1/3'}}>
      </div>
        <div id="title" style={{height:'60px', backgroundColor:'white', color:'#3f51b5',alignItems:'center', fontSize:'large', padding:'20px'}}>Dashboard</div>
      <div id="board" style={{display:'flex', flexDirection:'column', width:'100%'}}>
        <BoardContainer >
          <div style={{}}>
            test1
          </div>
          <div>
            test2
          </div>
          <div>
            test3
          </div>
          <div>
            test4
          </div>
          <div style={{gridColumn:'1/5'}}>
            test1
          </div>
          <div>
            test1
          </div>
          <div>
            test1
          </div>
          <div>
            test1
          </div>
          
        </BoardContainer>
      </div>
    </div>
  );
};

export default App;