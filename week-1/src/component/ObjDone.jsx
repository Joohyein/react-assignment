const ObjDone = ({item, btnClickRemoveHandler, btnClickCancelHandler}) => {
    return (
      <div className="doneBox">
        <div className="content">
          <div className="content__title">{item.title}</div>
          <div className="content__content">{item.content}</div>
        </div>
        <div className="buttons">
          <button onClick={()=>btnClickRemoveHandler(item.id)}>삭제</button>
          <button onClick={()=>btnClickCancelHandler(item.id)}>취소</button>
        </div>
      </div>
    )
  }

export default ObjDone;