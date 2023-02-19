import React from 'react';
import styled from 'styled-components';

function Layout({children}:any) {
  return (
    <StLayout>
        {children}
    </StLayout>
  )
}

export default Layout;

const StLayout = styled.div`
    
`