import {createStore} from 'redux';
import reducer from './reducer';

/**
 * the store requires reducer
 * that returns the state of the application
 */
const store = createStore(reducer);
export default store;
