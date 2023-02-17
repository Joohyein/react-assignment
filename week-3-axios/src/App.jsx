import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const  [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title:'',
  })
  const [targetID, setTargetID] = useState('');
  const [content, setContent] = useState('');

  // 조회 함수
  const fetchTodos = async() => {
    const {data} = await axios.get('http://localhost:4000/todos');
    console.log('data: ', data);
    setTodos(data);
  }

  // 추가 함수
  const onSubmitHandler = async () => {
    axios.post("http://localhost:4000/todos", inputValue);
    // fetchTodos();
    setTodos([...todos, inputValue]);
  }

  // 삭제 함수
  const onDeleteBtnClickHandler = async (id) => {
    axios.delete(`http://localhost:4000/todos/${id}`);
    setTodos(todos.filter((item)=>item.id!==id));
  }

  // 수정 함수
  const onUpdateBtnClickHandler = async () => {
    axios.patch(`http://localhost:4000/todos/${targetID}`, {
      title: content,
    })
    setTodos(todos.map((item)=>item.id == targetID ? {...item, title:content} : item));
  }

  useEffect(() => {
    fetchTodos();
  }, [])
  return (
    <>
    <div className="patch">
      <input value={targetID} onChange={(e)=>setTargetID(e.target.value)} type="text" placeholder="수정할 아이디" />
      <input value={content} onChange={(e)=>setContent(e.target.value)} type="text" placeholder="수정할 내용" />
      <button onClick={onUpdateBtnClickHandler}> 수정 </button>
    </div>
      <div className="input">
        <form onSubmit={(e)=>{
          e.preventDefault();
          onSubmitHandler();
        }}>
          <input type="text" value={inputValue.title} onChange={(e)=>setInputValue({title:e.target.value})} />
          <button type="submit" > 추가 </button>
        </form>
      </div>
      <div className="data">
        {
          todos?.map((item)=>{
            return (
              <div key={item.id}>
              {item.id} : {item.title}
              &nbsp;<button onClick={()=>onDeleteBtnClickHandler(item.id)}> 삭제 </button>
              </div>
            )
          })
        }
      </div>
    </>
    
  );
}

export default App;
