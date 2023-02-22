import styled from 'styled-components';
import {AiFillHome} from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header({children}:any) {
  return (
      <StHeader><StLink to={'/'}><StIcon /></StLink>{children}</StHeader>
  )
}

export default Header;


const StHeader = styled.div`
  width:100%;
  height: 68px;
  position: fixed;
  background-color: white;
  box-shadow: 0px 0px 5px 0px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 800;
`;
const StLink = styled(Link)`
  position:fixed;
  left:32px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`
const StIcon = styled(AiFillHome)`
  font-size:32px;
`;