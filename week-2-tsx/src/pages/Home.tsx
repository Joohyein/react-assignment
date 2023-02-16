import React,{useState, useRef} from "react";
import { addtodo, removetodo, toggletodo, todoListState } from "../redux/module/todos";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  // input ---------------------------
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const onChangeTitle = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget:{value},
    } = event;
    return setTitle(value);
  }

  const onChangeContent = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: {value},
    } = event;
    setContent(value);
  }
  // useSelector, usedispatch ----------
  const data = useSelector((state: {todos: {cnt: number, todos: todoListState[]}})=>{
    return state.todos.todos;
  });
  const dispatch = useDispatch();

  // add todo ----------------------------
  const addBtnClickHandler = ():void => {
    if(title !== '' && content !== '') return;
    dispatch(addtodo({
      title,
      content,
      isComplete:false,
    }));
    setTitle('');
    setContent('');
    console.log("addbtn", 111);
  }

  return (
    <div>
      <div className="inputContainer">
        <div>
          <input onChange={onChangeTitle} placeholder="제목" />
          <input onChange={onChangeContent} placeholder="내용" />
        </div>
        <button onClick={()=>addBtnClickHandler}>추가</button>
      </div>
      <div className="todoListContainer">
        <h3>Doing</h3>
        <div className="doingBox">
          {data.filter((item:todoListState)=>item.isComplete===false).map((item:todoListState)=>
            (<div key={item.id}>
              <div>{item.title}</div>
              <div>{item.content}</div>
              <div>{item.id}</div>
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
