const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

export const addNumber = (payload) => {
    return {
        type: ADD_NUMBER,
        payload,
    };
};

export const minusNumber = (payload) => {
    return {
        type: MINUS_NUMBER,
        payload,
    };
};

const initialState = {
    number: 0,
};

const counter = (state = initialState, action) => {
    switch (action.type){
        case ADD_NUMBER:
            return {

            };
        case MINUS_NUMBER:
            return {
                
            };
        default:
            return state;
    }
}

export default counter;