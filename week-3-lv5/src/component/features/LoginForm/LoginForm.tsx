import { StContainerForm, StInput, StLabel } from './LoginFormStyle';
import { StButton } from '../MoveTo/MoveToStyle';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../../../hook/useInput';
import { useMutation } from 'react-query';
import axios from "axios";
import { Cookies } from 'react-cookie';
import {useCookies} from 'react-cookie';

function LoginForm() {
  const navigate = useNavigate();

  const [userId, changeUserId, resetId] = useInput((e)=>e);
  const [userPw, changeUserPw, resetPw] = useInput((e)=>e);
  const [status, setStatus] = useState("인증 되기 전");
  const [data, setData] = useState([]);
  const [cookies, setCookies] = useCookies(['user']);

  const BASE_URL = "http://3.38.191.164";

  // const [errorMsg, setErrorMsg] = useState(null);
  // const cookies = new Cookies;

  const submitHandler = async (e:any) => {
    e.preventDefault()
    console.log('111')
    if( userId === ""){
      alert ("아이디를 입력해주세요");
      return;
    }
    if( userPw === "") {
      alert("비밀번호를 입력해주세요");
      return;
    }
    await axios.post(
      `${BASE_URL}/login`,
      {
        id: userId,
        password : userPw,
      }, {withCredentials: true}
    ).then(response => {
      setCookies('user', response.data.id);
    }).catch(error => {
      console.log(error)
    });
    resetId();
    resetPw();
    // console.log("response", response);
    // if(response.status === 200) setStatus("인증 완료");
  };

  const getData = async () => {
    const response = await axios.get(`${BASE_URL}/`, { withCredentials: true,});
    console.log("response", response);
    setData(response.data.data);
  };
  
  // const getData = async()=> {
  //   const accessToken = cookies.get("accessToken");
  //   console.log("accessToken", accessToken);
  //   const response = await axios.get(`${BASE_URL}/user`,{
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  // };

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
      <button onClick={getData}> 리스트 요청 </button>
    </StContainerForm>
  )
}

export default LoginForm;