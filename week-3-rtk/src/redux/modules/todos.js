import {createSlice, current} from "@reduxjs/toolkit";

// 상세 페이지에서 특정 Todo만 조회하는 action creator
// export const getTodoByID = (payload) => {
//   return {
//     type: GET_TODO_BY_ID,
//     payload,
//   };
// };

// initial state
const initialState = {

  todos: [
    {
      id: "1",
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

// const initialState = [
//   {
//     id:1,
//     title:'title',
//     body:'content',
//     isDone:false,
//   }
// ]

const todosSlice = createSlice({
  name:"todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      // console.log(current(state));
    },
    deleteTodo: (state, action) => {
      return {todos : [...state.todos.filter((item)=>item.id!==action.payload)]}

    },
    toggleStatusTodo: (state, action) => {
      const toggleArr = [...state.todos.map((item)=>item.id === action.payload ? {...item, isDone: !item.isDone} : item)]
      return {todos: toggleArr};
    },
    getTodoByID: ((state, action) => {
      return state.filter((item) => item.id === action.payload)
    })
  },
});

export default todosSlice.reducer;
export const {addTodo, deleteTodo, toggleStatusTodo, getTodoByID} = todosSlice.actions;

// addTodo - 불변성을 안지킨 로직
// deletTodo - 불변성을 지킨 로직