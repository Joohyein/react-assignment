import { StContainerForm, StInput, StLabel } from './LoginFormStyle';
import { StButton } from '../MoveTo/MoveToStyle';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../../../hook/useInput';
import { useMutation } from 'react-query';
import { addInfo } from '../../../axios/api';

function LoginForm() {
  const navigate = useNavigate();

  const mutaion = useMutation(addInfo, {
    onSuccess: () => {
      navigate("/");
    },
    onError: () => {}
  });

  const [userId, changeUserId] = useInput((e)=>e);
  const [userPw, changeUserPw] = useInput((e)=>e);

  // const [errorMsg, setErrorMsg] = useState(null);

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
    const newInfo = {
      id: userId,
      password: userPw
    };
    mutaion.mutate(newInfo);
  }

  // const jwtToken = await Login(loginPayload)


  const keyDownHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {return submitHandler};
  }

  return (
    <StContainerForm onSubmit={submitHandler}>
      <StLabel htmlFor='id'> ID 
        <StInput 
          id="id"
          type="text"
          placeholder='아이디를 입력하세요'
          value={userId}
          onChange={changeUserId}
        />
      </StLabel>
      <StLabel htmlFor='pw'> PW 
        <StInput
          id="pw"
          type="password"
          placeholder='비밀번호를 입력하세요'
          value={userPw}
          onChange={changeUserPw}
          onKeyDown={keyDownHandler}
        />
      </StLabel>
      <StButton type='submit'> 로그인 </StButton>
    </StContainerForm>
  )
}

export default LoginForm;