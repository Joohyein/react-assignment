
const ObjWorking = ({item, btnClickRemoveHandler, btnClickDoneHandler}) => {
    return (
      <div className="workingBox">
        <div className="content">
          <div className="content__title">{item.title}</div>
          <div className="content__content">{item.content}</div>
        </div>
        <div className="buttons">
          <button onClick={()=>btnClickRemoveHandler(item.id)}> 삭제 </button>
          <button onClick={()=>{
            btnClickDoneHandler(item.id);
            // btnClickRemoveHandler(item.id);
            }}> 완료 </button>
        </div>
      </div>
    )
  };

  export default ObjWorking;
