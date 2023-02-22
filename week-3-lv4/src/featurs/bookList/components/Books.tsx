import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { removeBook } from '../../../axios/api';
import { Link } from 'react-router-dom';
import {GrBasket} from 'react-icons/gr';

function Books({book}:any) {

  const queryClient = useQueryClient();

  const removeMutaion = useMutation(removeBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });

  // 삭제버튼 클릭 시 호출되는 함수
  const removeClickHandler = () => {
    removeMutaion.mutate(book.id);
  }

  console.log(book);
  
  return (
    <StMain>
      <StContainer>
        <StBook>
          <StContent>
            <StLink to={`/bookDetail/${book.id}`}>상세페이지</StLink>
            <StUserName>작성자 : {book.userName}</StUserName>
            <StTitle>책 제목 : {book.bookTitle}</StTitle>
            <StReport>한 줄 감상평 : {book.bookReport}</StReport>
          </StContent>
          <StIcon onClick={removeClickHandler}/>
        </StBook>
      </StContainer>
    </StMain>
    
  )
}

export default Books;
const StMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
`;
const StContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`;

const StUserName = styled.h3`
  font-size:12px;
`;
const StReport = styled.h3`
  font-size:24px;
`
const StTitle = styled.h3`
  font-size:32px;
`;
const StBook = styled.div`
  background-color: white;
  margin: 32px 32px;
  padding: 32px;
  display: flex;
  gap:12px;
  width:100%;
  border:3px solid lightgray;
`;
const StContent = styled.div`
  width: 100%
`;

const StLink = styled(Link)`
  text-decoration: none;
  color:black;
  cursor:pointer;
  &:hover, &:visited{
    color: green;
  }
`;
const StIcon = styled(GrBasket)`
  font-size:24px;
`