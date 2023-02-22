import React from 'react';
import styled from 'styled-components';

interface Props  {
  children : React.ReactNode,
}

function Layout({children}:Props) {
  return (
    <StLayout>
        {children}
    </StLayout>
  )
}

export default Layout;

const StLayout = styled.div`
    
`;