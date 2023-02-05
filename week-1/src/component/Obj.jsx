
const Obj = ({item, clickremovebtnhandler}) => {
    return(
        <div className="box">
        {item.age}, {item.name}
        <button onClick={()=>clickremovebtnhandler(item.id)}> x </button>
        </div>
    )
};

export default Obj;