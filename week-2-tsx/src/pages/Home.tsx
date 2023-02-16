import React,{useState, useRef} from "react";
import { addtodo, removetodo, toggletodo, todoListState } from "../redux/module/todos";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  // input ---------------------------
  const [todo, setTodo] = useState({
      title:'',
      content:'',
      isComplete:false,
  })
  const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>):void => {
    const {name, value} = event.currentTarget;
    setTodo({...todo, [name]:value});
  }

  // useSelector, usedispatch ----------
  const data = useSelector((state: {todos: {cnt: number, todos: todoListState[]}})=>{
    return state.todos.todos;
  });
  const dispatch = useDispatch();
 
  // add todo ----------------------------
  const addBtnClickHandler = () => {
    if(todo.title === '' || todo.content === '') return;
    dispatch(addtodo({...todo}));
    setTodo({...todo, title:'', content:''});
  };

  return (
    <div>
      <div className="inputContainer">
        <div>
          <input name='title' value={todo.title} onChange={onChangeHandler} placeholder="제목" />
          <input name='content' value={todo.content} onChange={onChangeHandler} placeholder="내용" />
        </div>
        <button onClick={addBtnClickHandler}>추가</button>
      </div>
      <div className="todoListContainer">
        <h3>Doing</h3>
        <div className="doingBox">
          {data.filter((item:todoListState)=>item.isComplete===false).map((item:todoListState)=>
            (<div key={item.id}>
              <div>title: {item.title}</div>
              <div>content: {item.content}</div>
              <div>ID: {item.id}</div>
            </div>)
          )}
        </div>
        <h3>Done</h3>
        <div className="doneBox">

        </div>
      </div>     
    </div>
  );
}

export default Home;

// style ----------------------------------------------
