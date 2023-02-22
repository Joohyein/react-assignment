import { StContainerForm, StInput, StLabel, StIdBox } from "./SignupFormStyle";
import { StButton } from "../MoveTo/MoveToStyle";
import useInput from "../../../hook/useInput";
import { useMutation, useQueryClient } from 'react-query';
import { addInfo } from '../../../axios/api';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function SignupForm() {
  const navigate = useNavigate();

  const [userId, changeUserId ] = useInput((e)=>e);
  const [userPw, changeUserPw ] = useInput((e)=>e);

  const submitHandler = async (e:any) => {
    e.preventDefault();
    if(userId === ""){
      alert ("아이디를 입력해주세요");
      return;
    }
    if( userPw === "") {
      alert("비밀번호를 입력해주세요");
      return;
    }
    const body = {
      id: userId,
      password: userPw,
    };
    axios.post(`/register`, body, {
      withCredentials: true,
    })
    .then((res) => {
      alert("회원가입 성공");
      navigate('/login');
    })
    .catch((error)=>{
      alert()
    })
  }

  const keyDownHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {return submitHandler};
  }

  return (
    <StContainerForm>
      <StIdBox>
        <StLabel> 아이디 
          <StInput 
            id="id"
            type="text"
            placeholder='아이디를 입력하세요'
            value={userId}
            onChange={changeUserId}
          />
        </StLabel>
        <StButton> 중복확인 </StButton>
      </StIdBox>
      <StLabel> 비밀번호 
        <StInput 
          id="pw"
          type="password"
          placeholder='비밀번호를 입력하세요'
          value={userPw}
          onChange={changeUserPw}
          onKeyDown={keyDownHandler}
        />
      </StLabel>
      <StLabel> 비밀번호 확인  <StInput /></StLabel>
      <StButton onClick={()=>navigate('/login')}> 회원가입 </StButton>
    </StContainerForm>
  )
}

export default SignupForm;
