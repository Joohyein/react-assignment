import { useState } from 'react';
import styled from 'styled-components';
import useInput from '../hook/useInput';
import Button from './Button';

function Input() {
  const [name, changeName, resetName ] = useInput((e)=>e);
  const [price, changePrice, resetPrice ] = useInput((v) => {
      const onlyNumber = v.replaceAll(',', '');
      if(Number(onlyNumber).toLocaleString() !== "NaN") {
        return Number(onlyNumber).toLocaleString();
      } 
    });
    
  // const [comma, setComma] = useState("0");

//   const changeEnteredNum = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value: string = e.target.value;
    
//     const numValue:number = Number(value.replaceAll(',', '').replace(/[^0-9]/g, ''));
//     setComma(numValue.toLocaleString());
//     // setComma(numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')); 
//  };

  const onClickBtnHandler = () => {
    alert(`{name: ${name}, price: ${price.replaceAll(",","")}}`); // 콤마가 없는 금액 표시
    resetName("");
    resetPrice("0");
  };
  
  const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") onClickBtnHandler();
  };

  
  return (
    <StBox>
      <StLabel>이름 : <input type="text" value={name} onChange={changeName} /></StLabel>
      <StLabel>가격 : <input type="text" value={price} onChange={changePrice} onKeyDown={onKeyDown} /></StLabel>
      <Button 
        width="small"
        height="small"
        bgColor="green"
        border="none"
        textColor="white"
        onClick={onClickBtnHandler}
      > 저장 </Button>
    </StBox>
  )
}

export default Input;

const StBox = styled.div`
  
`;
const StLabel = styled.label`
  margin-right: 20px;
  input {
    width:250px;
    height:36px;
    border-radius: 8px;
    border:1px solid lightgray;
  }
`;
