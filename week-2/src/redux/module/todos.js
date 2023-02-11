const ADD_TODO = "ADD";
const DELETE_TODO = "DELETE";
const ONTOGGLE_TODO = "ONTOGGLE"

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    }
}
export const onToggleTodo = (payload) => {
    return {
        type: ONTOGGLE_TODO,
        payload,
    }
}

const initialState = {
    cnt:0,
    todos: [
        // {
        //     id: 1,
        //     title: "react study",
        //     content: "content",
        //     isComplete:false,
        // },
    ],
};

const todos = (state= initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                cnt: state.cnt+1,
                todos: [...state.todos, {...action.payload,id:state.cnt}],
            }
        case DELETE_TODO:
            return {
                cnt: state.cnt,
                todos: action.payload,
            }
        case ONTOGGLE_TODO:
            return {
                cnt: state.cnt,
                todos: action.payload,
            }
        default:
            return state;
    }
}

export default todos;