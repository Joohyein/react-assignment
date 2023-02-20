import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import { useOutsideClickClose } from '../hook/useOutsideClick';
import Button from './Button';

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenOutside, setModalOpenOutside] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };
  const showModalOutside = () => {
    setModalOpenOutside(true);
  }
  const modalRef = useOutsideClickClose(()=>{setModalOpenOutside(false)}); 

  return (
    <div>
      <Button 
        width={"100px"} 
        height={"42px"} 
        bgColor={"green"} 
        border={"none"} 
        textColor={"white"}
        onClick={showModal}
      >modal open</Button>
      {modalOpen ? 
        <StContainer>
          <h3>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</h3>
          <StBtnBox>
            <button onClick={()=>setModalOpen(false)}>닫기</button>
            <button onClick={()=>setModalOpen(false)}>확인</button>
          </StBtnBox>
        </StContainer> 
        : null
      }
      <Button 
            width={"200px"} 
            height={"56px"} 
            bgColor={"white"} 
            border={"2px solid pink"} 
            textColor={"brown"}
            onClick={showModalOutside}
      >open modal
      </Button>
      {modalOpenOutside ?
        <StModalOutside ref={modalRef}>
          <h3>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</h3>
          <StBtnClose onClick={()=>setModalOpenOutside(false)}>X</StBtnClose>
        </StModalOutside> 
        : null
      }
    </div>
  )
}

export default Modal;

const StContainer = styled.div`
  width:398px;
  height: 268px;
  z-index: 999;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: whitesmoke;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding:20px;

  h3 {
    font-size: 14px;
  }
`;
const StBtnBox = styled.div`
  display: flex;
  gap:12px;
  button {
    padding: 16px 34px;
    background-color: black;
    color:white;
    border:none;
    border-radius: 8px;
    cursor: pointer;
  }
`;
const StModalOutside = styled.div`
  width:298px;
  height: 188px;
  z-index: 999;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: whitesmoke;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:20px;

  h3 {
    font-size: 14px;
    height: 20px;
  }
`
const StBtnClose = styled.button`
  background-color: black;
  color:white;
  width:30px;
  height: 30px;

  border:none;
  border-radius: 50%;
  cursor: pointer;

`