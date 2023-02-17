import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const  [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title:'',
  })

  // get요청을 할 때 id가 들어온다.
  const fetchTodos = async() => {
    const {data} = await axios.get('http://localhost:4000/todos');
    console.log('data: ', data);
    setTodos(data);
  }

  // 제출하면 발생하는 핸들러 : submit을 눌렀을 때 post요청
  // 새로고침 안하고 갱신이 되었으면 좋겠다? -> state도 같이 렌더링 시켜줘야 한다. 컴포넌트(화면)도 렌더링 시켜줘야 한다.
  // -> todos를 변경해줘야 한다.(setTodo)
  const onSubmitHandler = async () => {
    axios.post("http://localhost:4000/todos", inputValue);
    // fetchTodos();
    setTodos([...todos, inputValue]);
  }

  const onDeleteBtnClickHandler = async (id) => {
    axios.delete(`http://localhost:4000/todos/${id}`);
    setTodos(todos.filter((item)=>item.id!==id));
  }

  useEffect(() => {
    // db로부터 값을 가져올 것이다. 
    fetchTodos();
  }, [])
  return (
    <>
      <div className="input">
        <form onSubmit={(e)=>{
          e.preventDefault();

          // 버튼 클릭 시, input에 들어있는 값(state)을 이용하여 DB에 저장(post 요청)
          onSubmitHandler();
        }}>
          <input type="text" value={inputValue.title} onChange={(e)=>setInputValue({title:e.target.value})} />
          <button type="submit" >add</button>
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
