import React from 'react';
import Layout from '../components/ui/Layout';
import Header from '../components/ui/Header';
import MoveTo from '../features/books/components/MoveTo';

function Home() {
  return (
    <Layout>
        <Header>Home</Header>
        <MoveTo />
    </Layout>
  )
}

export default Home;