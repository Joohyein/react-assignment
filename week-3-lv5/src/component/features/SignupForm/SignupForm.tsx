import { StContainerForm, StInput, StLabel, StIdBox, StPwBox } from "./SignupFormStyle";
import { StButton } from "../MoveTo/MoveToStyle";
import useInput from "../../../hook/useInput";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useCookies } from "react-cookie";

function SignupForm() {
  const navigate = useNavigate();

  const [userId, changeUserId ] = useInput((e)=>e);
  const [userPw, changeUserPw ] = useInput((e)=>e);
  const [cookies, setCookies] = useCookies(['user']);

  const BASE_URL = "http://3.38.191.164";

  const submitHandler = async (e:any) => {
    console.log(111);
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
    axios.post(`${BASE_URL}/register`, body, {
      withCredentials: true,
    })
    .then((res) => {
      setCookies('user', res.data.id);
      console.log(res);
      alert("회원가입 성공");
      // navigate('/login');
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  const keyDownHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {return submitHandler};
  }

  return (
    <StContainerForm onSubmit={submitHandler}>
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
      <StPwBox>
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
        {/* <StLabel> 비밀번호 확인  
          <StInput placeholder="비밀번호를 입력해주세요" />
        </StLabel> */}
      </StPwBox>
      <StButton type="submit"> 회원가입 </StButton>
    </StContainerForm>
  )
}

export default SignupForm;