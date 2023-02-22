import React from 'react';
import Layout from '../components/ui/Layout';
import Header from '../components/ui/Header';
import Books from '../featurs/bookList/components/Books';
import { useQuery } from 'react-query';
import { getBooks } from '../axios/api';
import styled from 'styled-components';


function BookList() {
  const {isLoading, isError, data} = useQuery("books", getBooks); // 쿼리의 이름, api(조회를 해오는 비동기 함수)
  
  if(isLoading) return <h3>Loading...</h3>;
  if(isError) return <h3>오류가 발생하였습니다</h3>

  return (
    <Layout>
        <Header>BookList</Header>
        <StContainer>
          {data.map((item:any)=>{
            return (
              <Books key={item.id} book={item} />
            )
          })}
        </StContainer>
    </Layout>
  )
}

export default BookList;

const StContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top:100px;
`;


// data? -> undefined일 수 있기 때문에 ..?