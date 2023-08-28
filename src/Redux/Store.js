import { createStore } from 'redux';
import combineReducers from './Reducer/Index';

const store = createStore(combineReducers);

export default store;
