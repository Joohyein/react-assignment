import React, {useState} from "react";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const addClickButton = () => {
    if(!title) return;
    const info = {
      id: Math.random(),
      title,
    };
    setTodo(todo.concat(info));
    setTitle('');
  }

  return (
    <div className="main">
      <div>
        <input value={title} onChange={titleChangeHandler} required/>
        <button onClick={addClickButton}>추가하기</button>
      </div>
      <span>Todo List</span>
      <div className="todoList">
        {<TodoBox item={todo} key={todo.id} />}
      </div>
    </div>
  );
};

const TodoBox = ({item}) => {
  return (
    <>
      <div className="container">
        {
          item.map((item)=>
            <div className="container__box">{item.title}</div>
          )
        }
      </div>
    </>
  )
}
