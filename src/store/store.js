import { createStore, combineReducers } from 'redux';
import basketReducer from './features/basketReducer';

const store = createStore(
  combineReducers({
    basket: basketReducer,
  })
);

export default store;
