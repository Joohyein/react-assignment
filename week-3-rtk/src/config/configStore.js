import { configureStore } from "@reduxjs/toolkit";
import {createStore} from "redux";
import { combineReducers } from "redux";
import counter from "../module/counter";

// <ASIS: 일반 리듀서>
// const rootReducer = combineReducers({
//     counter: counter,
// });
// const store: createStore(rootReducer);


// <TODO: Redux Toolkit>
// counter.js에서 가져온 reducer
// counter라는 key를 가진 counter 추가
const store = configureStore({
    reducer: {
        counter: counter,
    }
})
export default store;