import React, {useState} from "react";
import "App.css";
import ObjWorking from "component/ObjWorking";

export default function App() {
  const [obj, setObj] = useState([]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  }
 
  // 추가버튼
  const btnClickAddHandler = (e) => {
    if(!title && !content) return;
    const info = {
      id: Date.now(),
      title,
      content,
      isComplete:false,
    };
    setObj(obj.concat(info));
    setTitle('');
    setContent('');
    console.log(obj);
  };
  // state -> obj 변환, 비동기!!

  // 삭제버튼
  const btnClickRemoveHandler = (id) => {
    const newObj = obj.filter((item) => item.id !== id);
    setObj(newObj);
  };
  
  // toggle 
  const onToggle = (id) => {
    const tmpObj = obj.map((item)=>item.id === id ? {...item, isComplete: !item.isComplete} : item);
    setObj(tmpObj);
  } 

  return (
    <div className="container">
      <div className="topBar">
        My Todo List
      </div>

      <div className="inputBox">
        <div className="inputBox__input">
          <label for="title">제목 <input type="text" id="title" value={title} onChange={titleChangeHandler} /></label>
          <label for="content">내용 <input type="text" id="content" value={content} onChange={contentChangeHandler} /></label>
        </div>        
        <button onClick={btnClickAddHandler}> 추가 </button>
      </div>

      <div className="working">
        {
          <ObjWorking 
            item={obj} 
            key={obj.id}
            btnClickRemoveHandler={btnClickRemoveHandler} 
            onToggle={onToggle}
          />
        }
      </div>
    </div>
  );
};


