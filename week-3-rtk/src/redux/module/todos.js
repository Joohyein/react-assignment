import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[],
    cnt:0,
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            state.todos.push({...action.payload, id : state.cnt, isComplete:false});
            state.cnt += 1;
        },
        deleteTodo: (state, action) => {
            const arr = [...state.todos.filter((item)=>item.id!==action.payload)];
            return {cnt:state.cnt, todos:arr};
        },
        onToggleTodo: (state, action) => {
            const arr1 = [...state.todos.map((item)=>item.id === action.payload ? {...item, isComplete:!item.isComplete} : item)];
            console.log(arr1);
            return {cnt:state.cnt, todos:arr1};
        }
    }
})

export default todosSlice.reducer;
export const {addTodo, deleteTodo, onToggleTodo} = todosSlice.actions;