import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Todo() {
  const param = useParams();

  const data = useSelector((state)=>{
    return state.todos.todos;
  })
  const work = data.find((el)=>String(el.id) === param.id);
  // console.log(work);
  
  return (
    <div>
        <div className='container'>
            <p>ID : {work.id}</p>
            <Link to={`/`}><button>이전으로</button></Link>
        </div>
        <div className='container'>
            <div className='title'>{work.title}</div>
            <div className='content'>{work.content}</div>
        </div>
    </div>
  )
}

export default Todo