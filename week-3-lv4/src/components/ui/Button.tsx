import styled from "styled-components";

interface Props {
    bgColor: "black" | "white";
    textColor: "white" | "black";
    width: "short" | "long";
};

const StButton = styled.button<Props>`
  background-color: ${({bgColor})=>{
    if(bgColor === "black") return "black";
    if(bgColor === "white") return "white";
  }};
  color: ${({textColor})=>{
    if(textColor === "white") return "white";
  }};
  width: ${({width})=> {
    if(width === "long") return "100%";
    if(width === "short") return "100px";
  }};
  height: 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 0px 5px 0px lightgray;
`;

export default StButton;