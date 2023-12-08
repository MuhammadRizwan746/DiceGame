
const RoleDice = ({currentDice,roleDice}) => {
    
  return (
    <div onClick={roleDice}>
      <img src={`./images/dice_${currentDice}.png`} alt={`dice_${currentDice}`}/>
    </div>
  );
};

export default RoleDice;
