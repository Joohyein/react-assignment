import { useState } from 'react';
import styled from 'styled-components';
import useInput from '../hook/useInput';
import Button from './Button';

function Input() {

  const [name, changeName ] = useInput();
  // const [price, changePrice ] = useInput();

  const [comma, setComma] = useState("0");

  const changeEnteredNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    
    const numValue:number = Number(value.replaceAll(',', '').replace(/[^0-9]/g, ''));
    setComma(numValue.toLocaleString());
    // setComma(numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')); 
    
 };

  const onClickBtnHandler = () => {
    alert(`{name: ${name}, price: ${comma.replaceAll(",","")}}`);
    setComma("0");
  };
  
  const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") onClickBtnHandler();
  };

  return (
    <StBox>
      <StLabel>이름 : <input type="text" value={name} onChange={changeName} /></StLabel>
      <StLabel>가격 : <input type="text" value={comma} onChange={changeEnteredNum} onKeyDown={onKeyDown} /></StLabel>
      <Button 
        width={"100px"}
        height={"42px" }
        bgColor={"green"}
        border={"none"}
        textColor={"white"}
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
