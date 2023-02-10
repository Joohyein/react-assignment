import { createStore } from 'redux';
import reducer from '../module/reducer';

const store = createStore(reducer);

export default store;
