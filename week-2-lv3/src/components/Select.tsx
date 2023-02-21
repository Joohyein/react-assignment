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
  const [isOpenRight, setIsOpenRight] = useState(false);
  const [item, setItem] = useState("");
  const [itemRight, setItemRight] = useState("");

  const onToggleList = () => {
    setIsOpen(!isOpen);
  };
  const onToggleListRight = () => {
    setIsOpenRight(!isOpenRight);
  }

  const selectRef = useOutsideClickClose(()=>{setIsOpen(false)}); 
  const selectRefRight = useOutsideClickClose(()=>{setIsOpenRight(false)}); 

  return (
    <StBox>
    <StContainer ref={selectRef}>
      <div onClick={onToggleList} className="dropbody" >
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
        isOpen?
        <StSelector>
        {isOpen ? selectList.map((item)=><div key={item.id} className='menu' onClick={()=>{
          setItem(item.value);
          console.log(item.value);
          onToggleList();
          }}>{item.value}</div> 
          ): 
          null
        }
      </StSelector>
        :null
      }
    
      </StContainer>

      <StContainer ref={selectRefRight}>
      <div onClick={onToggleListRight} className="dropbody" >
      {
        itemRight? 
        (
          <div>{itemRight}</div>
        ) : 
        (
          <div >선택하세요.</div>
        )
      }
      </div>
      
      {
        isOpenRight?
        <StSelector>
        {isOpenRight ? selectList.map((item)=><StMenu key={item.id} onClick={()=>{
          setItemRight(item.value);
          console.log(item.value);
          onToggleListRight();
          }}>{item.value}</StMenu> 
          ): 
          null
        }
      </StSelector>
        :null
      }
    </StContainer>

    </StBox>

  )
}

export default Select;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:300px;
  padding:.8em .5em;
  border : 1px solid lightgray;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
`;
const StSelector = styled.div`
  display: flex;
  flex-direction: column;
  width:300px;
  position:absolute;
  top:50px;
  background-color: white;

  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 8px;
  border:1px solid lightgray;
  box-sizing: border-box;

  &::-ms-expand{
    display:none;/*for IE10,11*/
  }
  div {
    border-bottom: 1px solid lightgray;
    padding:8px;
  }
`;

const StMenu = styled.div`
  cursor: pointer;
`

// 화살표 
const StBox = styled.div`
  /* background:url("../image/arrow.png") no-repeat right 24px center; */
  display: flex;
`;

// 화살표 모양 바꾸기 어케해??