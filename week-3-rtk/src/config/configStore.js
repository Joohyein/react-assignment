import {createStore} from "redux";
import { combineReducers } from "redux";
import counter from "../module/counter";

const rootReducer = combineReducers({
    counter: counter,
});

const store = createStore(rootReducer);
export default store;