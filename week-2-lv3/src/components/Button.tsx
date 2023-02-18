import styled from "styled-components";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button<{
    height:string, 
    bgColor:string, 
    width:string,
    border:string,
    textColor?:string,
  }>`
  width:${props=>props.width};
  height:${props=>props.height};
  margin: 10px;
  border: ${props=>props.border};
  background-color: ${(props)=> props.bgColor};
  cursor: pointer;
  border-radius: 10px;
`;

export default Button;
