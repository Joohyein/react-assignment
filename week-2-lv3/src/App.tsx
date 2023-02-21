import styled from "styled-components";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Select from "./components/Select";
import { MdArrowForwardIos } from "react-icons/md";
import {AiOutlineBell} from "react-icons/ai"

function App() {
  const whL = "200px";
  const whM = "150px";
  const whS = "100px";
  const htL = "56px";
  const htM = "52px";
  const htS = "42px";
  return (
    <StContainer>
      <StBox>
        <h1>Button</h1>
        <div>
          <Button 
            width={whL} 
            height={htL} 
            bgColor={"white"} 
            border={"2px solid green"} 
            onClick={()=>alert("버튼을 만들어보세요")}
          >Large Primary Button <StIcon /></Button>
          <Button width={whM} height={htM} bgColor={"green"} border={"none"} textColor={"white"}>Medium</Button>
          <Button width={whS} height={htS} bgColor={"green"} border={"none"} textColor={"white"}>Small</Button>
        </div>
        <div>
          <Button 
            width={whL} 
            height={htL} 
            bgColor={"white"} 
            border={"2px solid pink"} 
            textColor={"brown"}
          >Large Negative Button <StIconBell /><StDot></StDot> </Button>
          <Button width={whM} height={htM} bgColor={"pink"} border={"none"} textColor={"brown"}>Medium</Button>
          <Button width={whS} height={htS} bgColor={"pink"} border={"none"} textColor={"brown"}>Small</Button>
        </div>
      </StBox>
      <StBox>
        <h1>Input</h1>
        <Input />
      </StBox>
      <StBox>
        <h1>Modal</h1>
        <Modal />
      </StBox>
      <StBoxSelect>
        <h1>Select</h1>
        <Select />
      </StBoxSelect>
    </StContainer>
  );
}

export default App;

const StContainer = styled.div`
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;
const StBox = styled.div`
  
`;
const StIcon = styled(MdArrowForwardIos)`
  margin-left: 10px;
  vertical-align: middle;
`;
const StIconBell = styled(AiOutlineBell)`
  font-size:18px;
  margin-left: 10px;
  vertical-align: middle;
`;

const StBoxSelect = styled.div`
  border: solid 3px gray;
  padding: 20px;
  padding-bottom: 60px;
  /* overflow: hidden; */
`;

const StDot = styled.div`
  width:6px;
  height: 6px;
  background-color: tomato;
  border-radius: 50%;
  position: absolute;
  top:18px;
  right:18px;
`