import { Link } from 'react-router-dom';

const TodoList = ({item, removeBtnClickHandler, onToggle}) => {
    return (
        <div className="container">
            <div className="titleAndContent">
                <Link to={`/todo/${item.id}`}>상세페이지</Link>
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