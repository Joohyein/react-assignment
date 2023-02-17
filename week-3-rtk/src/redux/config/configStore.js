import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos.js";

const store = configureStore({
  reducer: {
    todos:todos,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;
