import styled from "styled-components";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Select from "./components/Select";

function App() {
  return (
    <StContainer>
      <StBox>
        <h1>Button</h1>
        <Button />
      </StBox>
      <StBox>
        <h1>Input</h1>
        <Input />
      </StBox>
      <StBox>
        <h1>Modal</h1>
        <Modal />
      </StBox>
      <StBox>
        <h1>Select</h1>
        <Select />
      </StBox>
    </StContainer>
  );
}

export default App;

const StContainer = styled.div`
  padding: 20px 30px;
`;
const StBox = styled.div`
  
`;
