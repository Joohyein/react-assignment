import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./App.css";
import { pluseOne, minusOne, plusN, minusN } from "./redux/modules/counter";

export default function App() {

  const [number, setNumber] = useState(0);

  const counter = useSelector((state)=>{
    return state.counter;
  })

  // useEffect(()=>{
  //   console.log(number);
  // },[number]);

  const data = useSelector((state)=>{
    return state.counter;
  });

  const dispatch = useDispatch();

  return (
    <>
    <div>현재 카운트 : {data.number}</div>
    <div>
      <input 
        type="number" 
        value={number}
        onChange={(e)=>{
          setNumber(+e.target.value);
          // 구조분해할당으로 변환해보기
          // const {value} = e.target;
          // setNumber(value);
        }}
      />
    </div>
    <button onClick={()=>{
      // dispatch(pluseOne());
      dispatch(plusN(number));
      // dispatch({
      //   type: "PLUS_N",
      //   payload: 3,
      // })
    }}>+</button>
    <button onClick={()=>{
      dispatch(minusN(number));
    }}>-</button>
    </>
  );
};
