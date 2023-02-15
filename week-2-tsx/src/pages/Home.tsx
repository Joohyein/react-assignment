import React,{useState, useRef} from "react";

function Home() {
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

  return (
    <div>
      <div className="inputContainer">
        <div>
          <input onChange={onChangeTitle} placeholder="제목" />
          <input onChange={onChangeContent} placeholder="내용" />
        </div>
        <button>추가</button>
      </div>
      <div className="todoListContainer">
        <h3>Doing</h3>
        <div className="doingBox">

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
