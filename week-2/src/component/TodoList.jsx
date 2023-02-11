
const TodoList = ({item, removeBtnClickHandler, onToggle}) => {
    // console.log(item); // undefined

    return (
        <div className="container">
            <div className="titleAndContent">
                <div className="todo-title">{item.title}</div>
                <div className="todo-content">{item.content}</div>
            </div>
            <div className="buttons">
                <button onClick={()=>removeBtnClickHandler(item.id)}>삭제</button>
                {!item.isComplete ? <button onClick={()=>onToggle(item.id)}>완료</button> : <button onClick={()=>onToggle(item.id)}>취소</button>}
            </div>
        </div>
    )
}

export default TodoList; 