import React from 'react'
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from '../module/todos';

const rootReducer = combineReducers({
    todos,
});
const store = createStore(
    combineReducers({todos})
);

export default store;