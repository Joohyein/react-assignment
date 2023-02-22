import React from 'react';
import StLayout from './styles';

interface Props  {
    children : React.ReactNode,
}

function Layout({children}:Props) {
  return (
    <StLayout>{children}</StLayout>
  )
}

export default Layout;