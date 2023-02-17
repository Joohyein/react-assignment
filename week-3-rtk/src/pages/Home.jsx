import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from "../component/TodoList"
import { addTodo, deleteTodo, onToggleTodo } from '../redux/module/todos';
import styled from 'styled-components';
import { __getTodos } from '../redux/module/todos';
import { useEffect } from 'react';

function Home() {
  // thunk -------------------
  useEffect(()=>{
    dispatch(__getTodos());
    console.log("thunk")
  },[]);
  // -------------------------
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const data = useSelector((state)=>state.todos.todos)

  const addBtnClickHandler = () => {
    if(!title || !content) return;
    dispatch(
        addTodo({
            title,
            content,
        })
    )
    setTitle('');
    setContent('');
    inputFocus.current.focus();
  }

  const removeBtnClickHandler = (id) => {
    dispatch(deleteTodo(id))
  };
  const onToggle = (id) => {
    dispatch(onToggleTodo(id))
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      addBtnClickHandler();
    }
  };

  const inputFocus = useRef();

  return (
    <StContainer>
      <StH3>Todo List</StH3>
      <StInputBox>
        <StInput>
          <StLabel htmlFor='title'>제목 <input value={title} id='title' onChange={(e)=>setTitle(e.target.value)} ref={inputFocus} /></StLabel>
          <StLabel htmlFor='content'>내용 <input value={content} id='content' onChange={((e)=>setContent(e.target.value))} onKeyPress={onKeyPress}/></StLabel>
        </StInput>
        <StBtn onClick={addBtnClickHandler}>추가하기</StBtn>
      </StInputBox>
      <StTodoBox>
        <h3>Doing</h3>
        <StTodoList>
          {
            data.filter((el)=>!el.isComplete).map((el)=>
            <TodoList 
              item={el}
              key={el.id}
              removeBtnClickHandler={removeBtnClickHandler}
              onToggle={onToggle}
            />
          )}
        </StTodoList>
        <h3>Done</h3>
        <StTodoList>
          {
            data.filter((el)=>el.isComplete).map((el)=>
            <TodoList
              item={el}
              key={el.id}
              removeBtnClickHandler={removeBtnClickHandler}
              onToggle={onToggle}
            />
          )}
          
        </StTodoList>
        
      </StTodoBox>
    </StContainer>
  );
}

export default Home;

// style ----------------------------------------------

const StContainer = styled.div`
  width: 1000px;
  height: 800px;
  display:flex;
  flex-direction: column;
  align-items: center;
`;
const StH3 = styled.h3`
  background-color: #ffffff;
  width:100%;
  padding:20px;
  box-shadow: inset;
`;
const StInputBox = styled.div`
  background-color: #204383;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  padding:20px;
`
const StInput = styled.div`
  color:white;
`
const StLabel = styled.label`
  margin-right: 20px;
`
const StBtn = styled.button`
  border: 2px solid white;
  background-color: #204383;
  color:white;
  padding:5px 10px;
  border-radius: 5px;
  cursor: pointer;
`
// Doing, Done Todolist style --------------------------------
const StTodoBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const StTodoList = styled.div`
  display: flex;
  margin:10px;
  flex-wrap: wrap;
`