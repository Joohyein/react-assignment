import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todos:[],
    cnt:0,
    isLoading: false,
    isError: false,
    error: null,
};
// isError: true -> error객체를 채워준다.

// thunk 함수
export const __getTodos = createAsyncThunk(
    "getTodos",
    async(payload, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:4000/todos");
            console.log("response : ", response);

            // promise객체가 resolve된 경우(네트워크 요청이 성공한 경우) -> dispatch해주는 기능을 가진 API(기능이 끝나고 나서 리듀서로 보내주는 역할)
            thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            console.log("error : ", error)
            thunkAPI.rejectWithValue(error);
        }
        
    }
)
// thunkAPI.dispatch를 이용해서 reducers로 state를 변경하도록 변경했는데
// thunkAPI.fulfillWithValue or thunkAPI.rejectwithValue 이 두 가지를 이용해서 extraReducer로 보내준다.
// 오류가 날 수 있기 때문에 try, catch문으로 묶어준다.


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
    },
    extraReducers: {},
})

export default todosSlice.reducer;
export const {addTodo, deleteTodo, onToggleTodo} = todosSlice.actions;