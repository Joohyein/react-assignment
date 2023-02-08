const Contents = ({item, btnClickRemoveHandler, onToggle}) => {
    return (
      <div className="todoBox">
        <div className="titleAndContent">
          <div className="content__title">{item.title}</div>
          <div className="content__content">{item.content}</div>
        </div>
        <div className="buttons">
          <button onClick={()=>btnClickRemoveHandler(item.id)} >삭제</button>
          {!item.isComplete ? <button onClick={()=>onToggle(item.id)} >완료</button> : <button onClick={()=>onToggle(item.id)}>취소</button> }
        </div>
      </div>
    )
  }

export default Contents;