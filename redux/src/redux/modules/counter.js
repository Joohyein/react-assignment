const ONE = "1"; 
const TWO = '2';
const PLUS_N = '3';
const MINUS_N = '4';
// action creator를 쓰기 때문에 export해줄 필요가 없다.

// action creator : action value를 리턴하는 함수
export const pluseOne = () => {
    return {
        type: ONE,
    };
};
export const minusOne = () => {
    return {
        type: TWO,
    };
};
export const plusN = (payload) => {
    return {
        type: PLUS_N,
        payload,
    }
}
export const minusN = (payload) => {
    return {
        type: MINUS_N,
        payload,
    }
}

// 초기 상태값(state)
const initialState = {
    number: 0
};

// 리듀서 : state에 변화를 일어키는 함수
// 1. state를 action의 type에 따라 변경하는 함수
// input : state, action
const counter = (state=initialState, action) => {
    switch(action.type){
        case ONE:
            return {
                number: state.number + 1,
            };
        case TWO:
            return {
                number: state.number - 1,
            };
        case PLUS_N:
            return {
                number: state.number + action.payload,
            }
        case MINUS_N:
            return {
                number: state.number - action.payload,
            }
        default:
            return state;
    }
};

export default counter;