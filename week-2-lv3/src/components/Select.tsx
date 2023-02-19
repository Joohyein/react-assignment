import styled from 'styled-components';
import useSelect from '../hook/useSelect';

function Select() {
  const selectList = ["리액트", "자바", "스프링", "리액트네이티브"];
  const selectListRight = ["리액트", "자바"];
  const [selected, changeValue] = useSelect();
  const [selectedRight, changeValueRight] = useSelect();

  return (
    <StContainer>
      <StBox>
        <StSelector onChange={changeValue} value={selected}>
          {selectList.map((item)=> (
            <option value={item} key={item}>
            {item}
          </option>
          ))}
        </StSelector>
      </StBox>
      
      <StSelector onChange={changeValueRight} value={selectedRight}>
        {selectListRight.map((item)=> (
          <option value={item} key={item}>
          {item}
        </option>
        ))}
      </StSelector>
    </StContainer>
  )
}

export default Select;

const StContainer = styled.div`
  display: flex;
  gap:16px;
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