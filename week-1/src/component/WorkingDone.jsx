import Contents from "./Contents";

const TodoList = ({item, btnClickRemoveHandler, onToggle}) => {
    console.log(item);
    return (
      <div>
        <h3>Working</h3>
        <div className="content">
          {item.filter((item)=>!item.isComplete).map((item)=>
            <Contents 
                item={item} 
                key={item.id} 
                btnClickRemoveHandler={btnClickRemoveHandler} 
                onToggle={onToggle}
            />
          )}
        </div>
        <h3>Done</h3>
        <div className="content">
            {item.filter((item)=>item.isComplete).map((item)=>
                <Contents 
                    item={item} 
                    key={item.id} 
                    btnClickRemoveHandler={btnClickRemoveHandler} 
                    onToggle={onToggle}
                />
            )}
        </div>
      </div>
    )
  };

  export default TodoList;
