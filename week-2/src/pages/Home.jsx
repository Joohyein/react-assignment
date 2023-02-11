// import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from "../component/TodoList"
import { addTodo, deleteTodo, onToggleTodo } from '../redux/module/todos';

function Home() {
//   const [todos, setTodos] = useState([]);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const data = useSelector((state)=>{
    return state.todos.todos;
  })
//   console.log(data);
  const addBtnClickHandler = () => {
    if(!title || !content) return;
    dispatch(
        addTodo({
            id: Math.random() + Date.now(),
            title,
            content,
            isComplete:false,
        })
    )
    setTitle('');
    setContent('');
  }

  const removeBtnClickHandler = (id) => {
    const removeItem = data.filter((el)=> el.id !== id);
    dispatch(deleteTodo(removeItem))
  };
  const onToggle = (id) => {
    const toggle = data.map((el)=> (el.id === id ? {...el, isComplete: !el.isComplete} : el))
    dispatch(onToggleTodo(toggle))
  };

  return (
    <div>
      <h3>Todo List</h3>
      <div className='inputBox'>
        <div className='inputBox__input'>
          <label htmlFor='title'>제목 <input value={title} id='title' onChange={(e)=>setTitle(e.target.value)} /></label>
          <label htmlFor='content'>내용 <input value={content} id='content' onChange={((e)=>setContent(e.target.value))} /></label>
        </div>
        <button onClick={addBtnClickHandler}>추가하기</button>
      </div>
      <div className='todoBox'>
        <div className="todoList">
          <h3>Doing</h3>
          {
            data.filter((el)=>!el.isComplete).map((el)=>
            <TodoList 
              item={el}
              key={el.id}
              removeBtnClickHandler={removeBtnClickHandler}
              onToggle={onToggle}
            />
          )}
          
        </div>
        <div className="todoList">
          <h3>Done</h3>
          {
            data.filter((el)=>el.isComplete).map((el)=>
            <TodoList
              item={el}
              key={el.id}
              removeBtnClickHandler={removeBtnClickHandler}
              onToggle={onToggle}
            />
          )}
          
        </div>
        
      </div>
    </div>
  );
}

export default Home;
