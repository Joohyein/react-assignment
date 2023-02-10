import {TodoActionTypes, ADD_TODO, REMOVE_TODO} from './action';

const initialState = {
  todos: [] as string[],
};

const reducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
