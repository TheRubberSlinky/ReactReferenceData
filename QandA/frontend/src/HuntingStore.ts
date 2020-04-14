import { createStore } from 'redux';
import rootReducer from './reducers/HuntReducer';

const store = createStore(rootReducer);

export default store;
