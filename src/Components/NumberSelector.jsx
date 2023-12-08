import styled from "styled-components";

function NumberSelector({selectedNumber,setSelectedNumber,setError}) {
    const arr = [1,2,3,4,5,6];

    const numberSelectorHandler = (value)=>{
      setSelectedNumber(value);
      setError('');
    } 
  return (
    <NumberSelectorBar>
    {
       arr.map((value,i)=>(
         <Box isSelected={value==selectedNumber} onClick={()=>numberSelectorHandler(value)} key={i}>{value}</Box>
        ))}
    </NumberSelectorBar>
  )
}

export default NumberSelector;

const NumberSelectorBar = styled.div`
  display: flex;
  gap: 10px;
`;

const Box = styled.button`
    height: 70px;
    width: 70px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    background-color:${({isSelected}) => isSelected ? 'black' : 'transparent' } ;
    color:${({isSelected}) => isSelected ? 'white' : 'black' } ;
`;