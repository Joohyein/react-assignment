import React from 'react'

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const TOGGLE = 'TOGGLE';

export interface todoListState {
    id?:number,
    title:string,
    content:string,
    isComplete:boolean,
}

export const initialState:{cnt:number, todos: todoListState[]} = {
    cnt:0,
    todos: [],
}

export const addtodo = (payload:todoListState):{type:string, payload:todoListState} =>{
    return {
        type:ADD,
        payload,
    }
}
export const removetodo = (payload:todoListState):{type:string, payload:todoListState} =>{
    return {
        type:ADD,
        payload,
    }
}
export const toggletodo = (payload:todoListState):{type:string, payload:todoListState} =>{
    return {
        type:ADD,
        payload,
    }
}

const todos = (state = initialState, action:{type:string, payload:todoListState}) => {
    switch(action.type){
        case ADD:
            return {cnt:state.cnt+1, todos:[...state.todos, {...action.payload, id:state.cnt}]};
        case REMOVE:
            return {cnt:state.cnt, todos:[...state.todos]};
        case TOGGLE:
            return {cnt:state.cnt, todos:[...state.todos]};
    }

}


export default todos