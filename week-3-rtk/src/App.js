import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./module/counter";

function App() {
  const number = useSelector((state)=>state.counter.number);
  const dispatch = useDispatch();

  // action creator
  const onPlusBtnClickHandler = () => {
    dispatch(addNumber(1));
  };

  const onMinusBtnClickHandler = () => {
    dispatch(minusNumber(1));
  }

  return (
    <div className="App">
      {number}
      <br />
      <button onClick={onPlusBtnClickHandler}>+</button>
      <button onClick={onMinusBtnClickHandler}>-</button>
    </div>
  );
}

export default App;
