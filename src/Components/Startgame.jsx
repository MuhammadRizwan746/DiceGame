import styled from 'styled-components'

const Startgame = ({setIsClicked}) => {
    const ClickHandel = ()=>{
        setIsClicked(prev=>!prev)
    }
  return (
    <>
        <Container >
            <div className='images'> 
                <img src="/images/dices 1.png" alt="" /> 
            </div>
            <div className='tage'>
                <div>
                    <h1>Dice Game</h1>
                </div>
                <div>
                    <Button onClick={ClickHandel}>Play Now</Button>
                </div>
                
            </div>
        </Container>
    </>
  )
};

export default Startgame;

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: auto 0;
   .images{
    width: 75%;
    height: 70%;
   }
   .tage{
     display: flex; 
     flex-direction: column;  
    align-items: end;
   }
   .tage h1{
    font-size: 70px;
    white-space: nowrap;
    margin: 0 auto;
   }
`;
export const Button = styled.button`
    box-shadow: 0 2px 2px 0 black;
    background-color: Black;
    color: white;
    padding: 10px 40px;
    border: 2px solid transparent;
    font-size: 18px;
    border-radius: 3px; 
    transition: 0.3 background-color ease-in;
   &:hover{
    color: black;
     background-color: transparent; 
    border: 2px solid black;
    transition: 0.3s background-color ease-in;
   }
`;

export const OutlineButton = styled.button`
    box-shadow: 0 2px 2px 0 black;
    background-color: transparent;
    color: black;
    padding: 10px 40px;
    border: 2px solid black;
    font-size: 18px;
    border-radius: 3px; 
    transition: 0.3 background-color ease-in;
   &:hover{
    color: white;
     background-color: black; 
    border: 2px solid black;
    transition: 0.3s background-color ease-in;
   }
`;