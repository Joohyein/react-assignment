import styled from 'styled-components';
import useInput from '../hook/useInput';
import Button from './Button';

function Input() {

  const [name, changeName ] = useInput();
  const [price, changePrice ] = useInput();

  const onClickBtnHandler = () => {
    alert(`{name: ${name}, price: ${price}}`);
  };
  
  const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") onClickBtnHandler();
  };

  return (
    <StBox>
      <StLabel>이름 : <input type="text" value={name} onChange={changeName} /></StLabel>
      <StLabel>가격 : <input type="text" value={price} onChange={changePrice} onKeyDown={onKeyDown} /></StLabel>
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
