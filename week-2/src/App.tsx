import { useRef, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './context/TodoItem';

  interface Todo {
    id:number;
    title: string;
    content: string;
    completed: boolean;
  }

  // 배열 안에 투두라는 객체 인터페이스가 들어간다.
  // e.currentTarget.value - 자료형이 하나!
const App = () => {
  //redux store로 부터 state를 가져옴
  const data = useSelector((state:any)=>{
    return state;
  });
  // action을 dispatch할 때 사용하는 훅
  const dispatch = useDispatch();

  // useRef
  const idRef = useRef(0);
  const pointerRef = useRef('');

  // input - title, content
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [obj, setObj] = useState<Todo[]>([]);

  // const titleChangeHandler = (e) => {
  //   setTitle(e.target.value);
  // }
  // const contentChangeHandler = (e) => {
  //   setContent(e.target.value);
  // }

  const addBtnClickHandler = () => {
    const info:Todo = {
      id:idRef.current++,
      title,
      content,
      completed:false,
    }
    setObj(obj.concat());
  };

  return (
    <div>
      <div className='topBar'>
        <h3>Todo List</h3>
        <div className='inputBox'>
          <label><input value={title} id="title" onChange={e=>setTitle(e.target.value)} /></label>
          <label><input value={content} id="content" onChange={e=>setContent(e.target.value)} /></label>
        </div>
        <button onClick={addBtnClickHandler}>추가하기</button>
      </div>

      <div className="container">
        <div className='working'>
          {data.map((item)=>{
            return (
              <>
              <TodoItem />
              </>
            )
          })}
        </div>
        <div className='done'>

        </div>
      </div>
    </div>
  );
}

export default App;

