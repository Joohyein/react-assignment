import React from 'react';
import styled from 'styled-components';

function Header({children}:any) {
  return (
    <StHeader>{children}</StHeader>
  )
}

export default Header;

const StHeader = styled.div`
  
`;