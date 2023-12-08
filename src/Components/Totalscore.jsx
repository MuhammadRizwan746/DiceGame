import styled from "styled-components";

const Totalscore = ({score}) => {
  return (
    <ScoredContainer>
        <h1 className={score<0 ? 'less':'greater'}>{score}</h1>
        <p>Total Score</p>   
    </ScoredContainer>  
  )
}

export default Totalscore;

const ScoredContainer = styled.div`
    text-align: center;
    max-width: 90px;
    .less{
        font-size: 50px;
        line-height: 12px;
        color:red ;
    }
    .greater{
        font-size: 50px;
        line-height: 12px;
        color:black;
    }

    p {
        font-size: 20px;
        white-space: nowrap;
    }
`;