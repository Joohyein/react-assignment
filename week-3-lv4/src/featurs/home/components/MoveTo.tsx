import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {IoIosArrowForward} from "react-icons/io";

function MoveTo() {

  return (
    <StMain>
        <StContainer>
        <StLink to={`/enroll`}>
            <StBox>
                <h3>책 등록</h3>
                <StIcon />
            </StBox>
        </StLink>
        <StLink to={"/booklist"}>
            <StBox>
                <h3>책 목록</h3>
                <StIcon />
            </StBox>
        </StLink>
    </StContainer>
    </StMain>
    
  )
}

export default MoveTo;

const StMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const StContainer = styled.div`
    width: 700px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
`;
const StBox = styled.div`
    background-color: white;
    border: 2px solid lightgray;
    border-radius: 15px;
    height: 168px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
        &:hover{
            color:green;
        }
        font-size:24px;
        color:#1b1b1c;
    }
`;
const StLink = styled(Link)`
    text-decoration: none;
    color: black;
    cursor: pointer;
`;
const StIcon = styled(IoIosArrowForward)`
  font-size:32px;
`;