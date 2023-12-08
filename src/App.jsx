import React, { useState } from 'react'
import styled from 'styled-components';
import Playgame from './Components/Playgame';
import './App.css';
import Startgame from './Components/Startgame';

const App = () => {
  const [isClicked,setIsClicked] = useState(false);

  return (
    <Main>
      { isClicked ? <Playgame/> : <Startgame setIsClicked={setIsClicked}/> }
    </Main>

  )
};

export default App;

const Main = styled.div`
    margin:0 auto;
    width: 80%;
`;
