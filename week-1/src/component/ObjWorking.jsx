import Contents from "./ObjDone";

const ObjWorking = ({item, btnClickRemoveHandler, onToggle}) => {
    console.log(item);
    return (
      <div className="workingBox">
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

  export default ObjWorking;
