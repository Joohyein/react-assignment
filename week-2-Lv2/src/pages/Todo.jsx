import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Todo() {
  const param = useParams();

  const data = useSelector((state)=>{
    return state.todos.todos;
  })
  const work = data.find((el)=>String(el.id) === param.id);
  
  // return (
  //     <StBox>
  //         <StContainer>
  //             <p>ID : {work.id}</p>
  //             <div className='title'>{work.title}</div>
  //             <div className='content'>{work.content}</div>
  //             <Link to={`/`}><StBtn>이전으로</StBtn></Link>
  //         </StContainer>
  //     </StBox>
  // )
  return (
    <div>
      <div className='container'>
        <p>ID : {work.id}</p>
        <div className='title'>{work.title}</div>
        <div className='content'>{work.content}</div>
        <button>이전으로</button>
      </div>
    </div>
  )
}

export default Todo

// const StBox = styled.div`
//   width:500px;
//   height:100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
// const StContainer = styled.div`
//   background-color: #ffffff;
//   box-shadow: 0px 0px 5px 0px gray;
//   width:300px;
//   height: 300px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   padding: 30px;
// `;
// const StBtn = styled.button`
//   background-color: white;
//   border: 2px solid black;
//   padding:10px;
//   border-radius: 5px;
// `