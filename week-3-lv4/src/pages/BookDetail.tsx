import React from 'react';
import { useParams } from 'react-router-dom';
import { getBooks } from '../axios/api';
import { useQuery } from 'react-query';
import Layout from '../components/ui/Layout';
import Header from '../components/ui/Header';
import Detail from '../features/books/components/Detail';

function BookDetail() {
  const params = useParams();

  const {isLoading, isError, data} = useQuery("books", getBooks);

  if(isLoading) return <h3>Loading...</h3>;
  if(isError) return <h3>오류가 발생하였습니다</h3>

  const book = data.find((v:any)=>String(v.id)=== params.id);

  return (
    <Layout>
      <Header>Detail page</Header>
      <Detail book={book} />
    </Layout>
  )
}

export default BookDetail;




