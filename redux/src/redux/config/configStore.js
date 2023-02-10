// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import users from "../modules/users";

// reduce들을 모아서 하나로 만들어 놓은 기본 reduce
const rootReducer = combineReducers({
    counter,
    users,
});
const store = createStore(rootReducer);

// 이렇게 만든 store를 애플리케이션에 주입해주는 과정이 필요하다.
export default store;