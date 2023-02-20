import { useState } from 'react';
import styled from 'styled-components';
import { useOutsideClickClose } from '../hook/useOutsideClick';

function Select() {
  const selectList = [
    { value: "리액트", id:1},
    { value: "자바", id:2},
    { value: "스프링", id:3},
    { value: "리액트네이티브", id:4}
  ];
  // const [selected, changeValue] = useSelect();
  // const [selectedRight, changeValueRight] = useSelect();

  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(null);

  const onToggleList = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const selectRef = useOutsideClickClose(()=>{setIsOpen(false)}); 

  return (
    <StContainer >
      <div ref={selectRef} onClick={onToggleList} className="dropbody" style={{backgroundColor:"yellowgreen", padding:"20px"}}>
      {
        item? 
        (
          <div>{item}</div>
        ) : 
        (
          <div >선택하세요.</div>
        )
      }
      </div>
      {
        isOpen ? 
        <div className='menu' style={{backgroundColor:"green", padding:"20px"}}>얖</div> :
        null
      }
    </StContainer>
  )
}

export default Select;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:16px;
  div {
    width: 300px
  }
`;
const StSelector = styled.select`
  width:240px;
  padding:.8em .5em;

  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 8px;
  border:1px solid lightgray;
  box-sizing: border-box;

  overflow: hidden;
  &::-ms-expand{
    display:none;/*for IE10,11*/
  }
  option {
    background: pink;
    color:black;
  }
`;

// 화살표 
const StBox = styled.div`
  background:url("../image/arrow.png") no-repeat right 24px center;
`;

// 화살표 모양 바꾸기 어케해??