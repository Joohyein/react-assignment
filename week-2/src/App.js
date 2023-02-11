import './App.css';
import Router from './shared/Router';
import styled from 'styled-components';

function App() {
  return(
    <StBox>
      <Router />

    </StBox>
  )
}

export default App;

const StBox = styled.div`
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
`