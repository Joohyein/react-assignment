import React from 'react';
import Layout from '../components/ui/Layout';
import Header from '../components/ui/Header';
import Books from '../featurs/bookList/components/Books';

function BookList() {
  return (
    <Layout>
        <Header>BookList</Header>
        <Books />
    </Layout>
  )
}

export default BookList;