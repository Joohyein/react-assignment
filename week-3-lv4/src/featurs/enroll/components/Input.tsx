import React from 'react';
import styled from 'styled-components';
import useInput from '../../../hook/useInput';
import { addBooks } from '../../../axios/api';
import { useMutation, useQueryClient } from 'react-query';
import StButton from '../../../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';

function Input() {
  const [userName, changeUserName, resetName] = useInput();
  const [bookTitle, changeBookTitle, resetTitle] = useInput();
  const [bookReport, changeBookReport, resetReport] = useInput();

  const navigate = useNavigate();

  // 리액트 쿼리 관련 코드
  const queryClient = useQueryClient();
  const mutation = useMutation(addBooks, {
    onSuccess: () => {
      queryClient.invalidateQueries("books"); // "books"로 읽어온 데이터를 무효화시키고 다시 불러옴
      console.log("성공")
    }
  });


  const submitBtnHandler = async (e:any) => {
    if(userName === "" || bookTitle === "" || bookReport === "") {
      alert("내용을 입력해주세요");
      return;
    }
    e.preventDefault();
    const newBook = {
      userName,
      bookTitle,
      bookReport,
    };
    mutation.mutate(newBook);
    resetName();
    resetTitle();
    resetReport();
    navigate(-1);
  }

  return (
    <StMain>
      <StContainer>
        <StForm onSubmit={submitBtnHandler}>
          <StTop>
            <StLabel htmlFor='userName'>작성자 이름 <input id="userName" maxLength={5} type="text" placeholder='(5자 이내)' value={userName} onChange={changeUserName} /></StLabel>
            <StLabel htmlFor='bookTitle'>책 제목 <input id="bookTitle" maxLength={50} type="text" placeholder='(50자 이내)' value={bookTitle} onChange={changeBookTitle} /></StLabel>
          </StTop>
          
          <StLabel htmlFor='bookReport'>한 줄 독후감 <textarea id="bookReport" maxLength={200} placeholder='내용을 입력하세요(200자 이내)' value={bookReport} onChange={changeBookReport} /></StLabel>
          <StButton width="long" bgColor='black' textColor='white' type="submit">제출</StButton>
        </StForm>
      </StContainer>
    </StMain>
    
  )
}

export default Input;
const StMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px lightgray;
  width: 900px;
  height: 70%;
  padding:32px;
  box-sizing: border-box;
`;
const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 100%;
`;
const StLabel = styled.label`
  /* margin-right: 20px; */
  width: 100%;
  input {
    width:100%;
    height:36px;
    border-radius: 8px;
    border:1px solid lightgray;
  }
  textarea {
    width:100%;
    height:300px;
    border-radius: 8px;
    border:1px solid lightgray;
    padding:24px;
    box-sizing: border-box;
  }
`;
const StTop = styled.div`
  
`;