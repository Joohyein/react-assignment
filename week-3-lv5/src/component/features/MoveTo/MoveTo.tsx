import { useNavigate } from "react-router-dom";
import { StContainer, StButton, StBtnBox } from "./MoveToStyle";

function MoveTo() {
  const navigate = useNavigate();

  return (
    <StContainer>
      <StBtnBox>
        <StButton onClick={()=>navigate("/login")}>로그인</StButton>
        <StButton onClick={()=>navigate("/signup")}>회원가입</StButton>
      </StBtnBox>
    </StContainer>
  )
}

export default MoveTo;