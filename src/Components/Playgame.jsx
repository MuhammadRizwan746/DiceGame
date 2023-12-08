import styled from 'styled-components';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import Totalscore from './Totalscore';
import { Button } from './Startgame';
import { OutlineButton } from './Startgame';
import { useState } from 'react';
import GameRules from './GameRules';

const Playgame = () => {
  const[score,setScore] = useState(0);
  const [currentDice , setCurrentDice] = useState(1);
  const [selectedNumber,setSelectedNumber]=useState(undefined);
  const [error,setError]=useState('');
  const [reset,setReset]=useState(false);
  const [showRules,setShowrules]=useState(false);

  const genrateRanddomNumber = (min , max)=>{
      return Math.floor(Math.random()*(max - min) + min)
    };
  const nowRoleDice = ()=>{
    if(!selectedNumber){
        setError('You have not select a number !')
        return;
      }
        setCurrentDice(genrateRanddomNumber(1,7))
        
        if(selectedNumber===currentDice){
          setScore((prev)=>prev+currentDice);
        }else{
          setScore((prev)=>prev-currentDice);
        }
        setSelectedNumber(undefined);
    };
    const ResetGame = ()=>{
      setCurrentDice(1);
      setError('');
      setSelectedNumber(undefined);
      setScore(0);
    };
    const ruleshandler = ()=>{
      setShowrules((prev)=>!prev);
    };

  return (
    <div>
      <Top>
        <Totalscore score={score}/>
          <div className='text'>
            <p className='error'>{error}</p>
            <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} setError={setError}/>
            <p>Select a Number</p>
           
          </div>
      </Top>
      <DiceCards>
        <RoleDice currentDice={currentDice} roleDice={nowRoleDice}/>
        <div><h3>Click on dice to roll</h3></div>
      </DiceCards>
     
      <BTN>
        <OutlineButton onClick={ResetGame}>Reset Game</OutlineButton>
        <Button onClick={ruleshandler}>{showRules? 'Hide' : 'Show'} Rules</Button>
      </BTN>
      {showRules && <GameRules/>}
    </div>
  );
};

export default Playgame;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .error{
    color: red;
  }
  .text{
    display: flex;
    flex-direction: column;
    align-items: end;
    p{
      font-weight: 800px;
    }
  }
`;
 
const DiceCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BTN = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;