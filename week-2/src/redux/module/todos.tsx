const initialStateObj = {
    todos: [] as string[],
};
interface AddTodoAction {
    type: "ADD_TODO";
    payload: string;
}
interface RemoveTodoAction {
    type: "REMOVE_TODO";
    payload: number;
}
interface OnToggle {
    type: "ISCOMPLETE";
    payload: boolean;
}

export const addTodo = (title: string): AddTodoAction => ({
    type:'ADD_TODO',
    payload: title,
})
export const removeTodo = (id: number): RemoveTodoAction => ({
    type: "REMOVE_TODO",
    payload: id,
})

type TodoActionTypes = AddTodoAction | RemoveTodoAction | OnToggle;

const todos = (state=[initialStateObj], action:TodoActionTypes) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter((v)=>v.id!==action.payload);
        case 'ISCOMPLETE':
            return 
        default:
            return state;
    }
};

export default todos;