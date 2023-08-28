import { combineReducers } from 'redux';
import inputReducer, {pagingReducer} from './Reducer';

export default combineReducers({
  input: inputReducer,
  page: pagingReducer
});
