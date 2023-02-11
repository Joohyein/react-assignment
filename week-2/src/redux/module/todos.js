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
                todos: [...state.todos, action.payload],
            }
        case DELETE_TODO:
            return {
                todos: action.payload,
            }
        case ONTOGGLE_TODO:
            return {
                todos: action.payload,
            }
        default:
            return state;
    }
}

export default todos;