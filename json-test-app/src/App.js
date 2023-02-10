import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((json)=> {
      setData([...json]);
      console.log(json);
    });
  },[]);
  return (
    <>
    <h3>jsonplaceholder data</h3>
    {data.map((item)=>{
      return(
        <div style={{border: 'solid 2px yellowgreen'}}>
          <ul>
            <li>{item.userId}</li>
            <li>{item.title}</li>
            <li>{item.body}</li>

          </ul>
        </div>
      )
    })}
    </>
  )
}

export default App;
