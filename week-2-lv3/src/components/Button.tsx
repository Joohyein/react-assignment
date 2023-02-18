import styled from "styled-components";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button() {
  return (
    <StBox>
      <div>
        <StButtonLarge color="green" onClick={()=>alert("버튼을 만들어보세요")}> Large Primary Button 
        <FontAwesomeIcon icon={faChevronRight} />
        </StButtonLarge>
        <StButton padding="18px 30px" bgColor="green" > Medium </StButton>
        <StButton padding="15px 30px" bgColor="green"> Small </StButton>
      </div>
      <div>
        <StButtonLarge color="pink" onClick={()=>prompt("어렵나요?")}> Large Nagative Button </StButtonLarge>
        <StButton padding="15px 30px" bgColor="pink"> Medium </StButton>
        <StButton padding="15px 30px" bgColor="pink"> Small </StButton>
      </div>
      
    </StBox>
  )
}

export default Button;

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const StButtonLarge = styled.button`
  border: 2px solid ${(props)=>props.color};
  border-radius: 10px;
  padding: 20px 30px;
  background-color: white;
  cursor: pointer;
`;
const StButton = styled.button<{padding:string, bgColor:string}>`
  margin-left: 10px;
  padding: ${(props)=>props.padding};
  border: none;
  border-radius: 8px;
  background-color: ${(props)=> props.bgColor};
  cursor: pointer;
`;
