import React, {useState} from "react";
import "App.css";
import ObjWorking from "component/ObjWorking";
import ObjDone from "component/ObjDone";

export default function App() {
  const [obj, setObj] = useState([]);
  const [done, setDone] = useState([]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  }
 
  // 추가버튼 : 빈 객체일 때 초기값 따로 추가
  const btnClickAddHandler = (e) => {
    e.preventDefault();
    if(!title && !content) return;
    if(obj.length === 0) {
      const zeroInfo = {
        id: Date.now(),
        title,
        content,
        isComplete:false,
      };
      setObj([...obj,zeroInfo]);
    }
    else{
      const info = {
        id: Date.now(),
        title,
        content,
        isComplete:false,
      };
      setObj([...obj, info]);
    }
    // 추가버튼 클릭하면 input창 비우기
    setTitle('');
    setContent('');
  };

  // 삭제버튼
  const btnClickRemoveHandler = (id) => {
    const newObj = obj.filter((item) => item.id !== id);
    const newDone = done.filter((item) => item.id !== id);
    setObj(newObj);
    setDone(newDone);
  };
  // 완료버튼
  const btnClickDoneHandler = (id) => {
    const doneObj = obj.filter((item)=>item.id === id);
    const deleteObj = obj.filter((item)=> item.id !== id);
    if(done.length === 0){
      setDone(doneObj);
    } else {
      setDone([...done, doneObj[0]]);
    }
    setObj(deleteObj);
  };
  // 취소버튼
  const btnClickCancelHandler = (id) => {
    const doneObj = done.filter((item)=> item.id !== id);
    const cancelObj = done.filter((item)=> item.id === id);
    if(obj.length === 0){
      setObj(cancelObj);
    }else {
      setObj([...obj, cancelObj[0]]);
    }
    setDone(doneObj);
  }
  
  return (
    <div>
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

      <h3>working</h3>
      <div className="working">
        {
          obj.map((item) => {
            return(
              <div>
                <ObjWorking 
                key={item.id} 
                item={item} 
                btnClickRemoveHandler={btnClickRemoveHandler}
                btnClickDoneHandler={btnClickDoneHandler}
                 />
              </div>
            )
          })
        }
      </div>
      <h3>Done</h3>
      <div className="done">
        {
          done.map((item) => {
            return(
              <div>
                <ObjDone 
                key={item.id} 
                item={item}
                btnClickRemoveHandler={btnClickRemoveHandler}
                btnClickCancelHandler={btnClickCancelHandler}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};


