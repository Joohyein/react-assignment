import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBooks, reviseBook } from '../axios/api';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import styled from 'styled-components';
import Layout from '../components/ui/Layout';
import Header from '../components/ui/Header';
import useInput from '../hook/useInput';
import StButton from '../components/ui/Button';
import {IoIosArrowBack} from "react-icons/io";

function BookDetail() {
  const params = useParams();
  const navigate = useNavigate();
  
  const [revise, setRevise] = useState(false);
  const [value, changeValue, reset] = useInput();

  const {isLoading, isError, data} = useQuery("books", getBooks);

  useEffect(()=>{
    if(book.length > 1 || book.length <= 0) {
      alert("올바르지 않은 접근입니다. 메인페이지로 이동합니다.")
      navigate("/");
    }
  }, []);

  const queryClient = useQueryClient();
  const mutaion = useMutation(reviseBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    }
  })

  if(isLoading) return <h3>Loading...</h3>;
  if(isError) return <h3>오류가 발생하였습니다</h3>

  const book = data.find((v:any)=>String(v.id)=== params.id);

  const onToggleHandler = (id:string, value:string) => {
    if(value === "") {
      alert("내용을 입력해주세요");
      return;
    }
    setRevise(!revise);
    console.log(revise);
    mutaion.mutate({id, value});
    reset();
  }

  return (
    <Layout>
      <Header>Detail page</Header>
      {
        !revise ? 
        <StContainer>
          <StBox>
            <StTop>
              <StIcon onClick={()=>navigate(-1)} />
              <div>id: {book.id}</div>
            </StTop>
            <StContents>
              <div>작성자 : {book.userName}</div>
              <div>책 제목 : {book.bookTitle}</div>
              <div>감상평 : {book.bookReport}</div>
            </StContents>
            <StButton width='long' bgColor='white' textColor='black' onClick={()=>setRevise(!revise)}>수정</StButton>
          </StBox>
        </StContainer> :
        <StContainer>
           <StBox>
            <StContents>
              <div>작성자 : {book.userName}</div>
              <div>책 제목 : {book.bookTitle}</div>
              <StInput value={value} onChange={changeValue} maxLength={200} placeholder='내용을 입력하세요(200자 이내)' />
            </StContents>
            <StBtnContainer>
              <StButton width="long" bgColor='white' textColor='black' onClick={()=>setRevise(false)}>돌아가기</StButton>
              <StButton width="long" bgColor='white' textColor='black' onClick={()=>onToggleHandler(book.id, value)}>저장</StButton>
            </StBtnContainer>
          </StBox>
        </StContainer>
       
      }
    </Layout>
  )
}

export default BookDetail;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;
const StTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
const StBox = styled.div`
  width: 80%;
  height: 80%;
  box-shadow: 0px 0px 5px 0px lightgray;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StContents = styled.div`
  display: flex;
  flex-direction: column;
  gap:12px;
`;

const StInput = styled.textarea`
  width:100%;
  height: 300px;
  padding: 24px;
`;

const StIcon = styled(IoIosArrowBack)`
  font-size:32px;
  cursor: pointer;
`;
const StBtnContainer = styled.div`
  display: flex;
  gap:12px;
`