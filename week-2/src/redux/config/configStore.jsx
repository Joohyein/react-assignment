import {createStore } from "redux";
import {combineReducers} from 'redux';
import todos from "../module/todos";

const rootRouter = combineReducers({
    todos,
});
const store = createStore(rootRouter);

export default store;