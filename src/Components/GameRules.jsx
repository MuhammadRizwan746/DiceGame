import React from 'react'
import styled from 'styled-components';

const GameRules = () => {
  return (
    <Box>
      <h2>Here is, how to play game?</h2>
      <p>1. Select any number</p>
      <p>2. Click on dice image</p>
      <p>3. After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
      <p>4. If you get wrong guess then dice face point will be dedcuted </p>
    </Box>
  )
}

export default GameRules;

const Box =styled.div`
    margin-top: 10px;
    width: 794px;
    height: 200px;
    padding: 5px 20px;
    gap: 15px;
    background-color: #FBF1F1;
;
`;