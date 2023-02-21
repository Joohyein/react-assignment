import styled from "styled-components";

interface Props {
  width : "large" | "medium" |"small";
  height : "large" | "medium" |"small";
  bgColor : "green" | "pink" | "white";
  border : "borderGreen" | "borderPink" | "none";
  textColor : "white" | "brown";
  onClick? : () => void;
}

const Button = styled.button<Props>`
  width: ${({width}) => {
    if(width === "large") return "200px";
    if(width === "medium") return "150px";
    if(width === "small") return "100px"
  
  }};
  height: ${({height})=>{
    if(height === "large") return "56px";
    if(height === "medium") return "52px";
    if(height === "small") return "42px"
    
  }};
  background-color: ${({bgColor})=>{
    if(bgColor === "white") return "white";
    if(bgColor === "green") return "green";
    if(bgColor === "pink") return "pink";
  }};
  border : ${({border})=>{
    if(border === "borderGreen") return "2px solid green";
    if(border === "borderPink") return "2px solid pink";
    if(border === "none") return "none";
  }};
  color : ${({textColor}) => {
    if(textColor === "white") return "black";
    if(textColor === "brown") return "brown";
  }};
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  margin: 10px;
`
export default Button;

