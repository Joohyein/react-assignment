import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/module/action';
import TodoItem from './context/TodoItem';

const App = () =>{
  const todos = useSelector((state: any)=> state.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  return (
    <div>
      {todos.map((v:any)=>(
        <TodoItem key={v.id} title={title} id={v.id} />
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => dispatch(addTodo(title))}>Add Todo</button>
    </div>
  )
}
export default App;