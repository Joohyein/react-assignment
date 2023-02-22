import React from 'react'
import Layout from '../component/ui/Layout/Layout';
import Header from '../component/ui/Header/Header';
import MoveTo from '../component/MoveTo/MoveTo';

function Home() {
  return (
    <Layout>
        <Header />
        <MoveTo />
    </Layout>
  )
}

export default Home;