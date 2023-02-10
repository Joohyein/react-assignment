import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const data = {
  hyein: {
    id: new Date(),
    name:'혜인',
  },
};
const Works = () => {
  const {params} = useParams();
  console.log(params);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{
        navigate("/")
      }}>
        Home으로 이동
      </button>
    </div>
  )
}

export default Works