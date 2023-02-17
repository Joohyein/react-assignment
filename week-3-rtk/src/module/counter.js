import { createSlice } from "@reduxjs/toolkit";

// action value
// const ADD_NUMBER = "ADD_NUMBER";
// const MINUS_NUMBER = "MINUS_NUMBER";

// export const addNumber = (payload) => {
//     return {
//         type: ADD_NUMBER,
//         payload,
//     };
// };

// export const minusNumber = (payload) => {
//     return {
//         type: MINUS_NUMBER,
//         payload,
//     };
// };

const initialState = {
    number: 0,
};

// <Reducer>
// const counter = (state = initialState, action) => {
//     switch (action.type){
//         case ADD_NUMBER:
//             return {
//                 number: state.number + action.payload,
//             };
//         case MINUS_NUMBER:
//             return {
//                 number: state.number - action.payload,
//             };
//         default:
//             return state;
//     }
// }

// <redux toolkit>
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addNumber: (state, action) => {
            state.number = state.number + action.payload;
        },
        minusNumber: (state, action) => {
            state.number = state.number - action.payload;
        },
    },
});

export default counterSlice.reducer;
export const {addNumber, minusNumber} = counterSlice.actions;