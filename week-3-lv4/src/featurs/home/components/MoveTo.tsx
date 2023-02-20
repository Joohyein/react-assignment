import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MoveTo() {

  return (
    <StContainer>
        <StLink to={`/enroll`}>
            <StBox>
                <h3>책 등록</h3>
            </StBox>
        </StLink>
        <StLink to={"/list"}>
            <StBox>
                <h3>책 목록</h3>
            </StBox>
        </StLink>
    </StContainer>
  )
}

export default MoveTo;

const StContainer = styled.div`
`;
const StBox = styled.div`
    background-color: skyblue;
    height: 168px;
`;
const StLink = styled(Link)`
    
`;