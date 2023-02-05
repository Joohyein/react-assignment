import React, {useState} from "react";
import "App.css";
import Obj from "component/Obj";
import Button from "component/Button";

export default function App() {
  const [obj, setObj] = useState([
    {id:1, age:21, name:'짱구'}, 
    {id:2, age:23, name:'훈이'}, 
    {id:3, age:22, name:'철수'},
    {id:4, age:20, name:'유리'}, 
    {id:5, age:22, name:'맹구'}
	]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }
  const btnClickHandler = () => {
    const info = {
      id: (obj.length + 1),
      age,
      name,
    };
    setObj([...obj, info]);
    // 불변성유지
  };
  const clickremovebtnhandler = (id) => {
    const newObj = obj.filter((item)=> item.id !== id);
    setObj(newObj);
  }
  
  return (
    <div>
      <div>
        이름 :&nbsp;<input 
        value={name}
        onChange={nameChangeHandler} 
        /><br />
        나이 : <input 
        value={age}
        onChange={ageChangeHandler}
        /><br />
        <Button btnClickHandler={btnClickHandler}> add </Button>
      </div>
      <div className="content">     
        {
          obj.map((item)=>{
            return (
              <div>
                <Obj 
                  key={item.id}
                  item={item}
                  clickremovebtnhandler={clickremovebtnhandler}
                />
               </div>
          )})
        }
      </div>
    </div>
    
  );
};
