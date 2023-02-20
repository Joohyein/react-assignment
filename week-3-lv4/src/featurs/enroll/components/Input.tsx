import React from 'react';
import styled from 'styled-components';

function Input() {
  return (
    <StContainer>
      <StLabel>작성자 이름 <input /></StLabel>
      <StLabel>책 제목 <input /></StLabel>
      <StLabel>한 줄 독후감 <input /></StLabel>
    </StContainer>
  )
}

export default Input;

const StContainer = styled.div`
  
`;

const StLabel = styled.label`
  
`