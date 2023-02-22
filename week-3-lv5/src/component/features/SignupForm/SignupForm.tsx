import { StContainer, StInput, StLabel, StIdBox } from "./SignupFormStyle";
import { StButton } from "../MoveTo/MoveToStyle";

function SignupForm() {
  return (
    <StContainer>
      <StIdBox>
        <StLabel> 아이디 <StInput /></StLabel>
        <h3> 중복확인 </h3>
      </StIdBox>
      <StLabel> 비밀번호 <StInput /></StLabel>
      <StLabel> 비밀번호 확인  <StInput /></StLabel>
      <StButton> 회원가입 </StButton>
    </StContainer>
  )
}

export default SignupForm;