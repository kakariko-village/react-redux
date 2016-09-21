/**
 * Compile all reducers into 1 object
 */
import {combineReducers} from 'redux';
import UserReducer from './reducer-users'; // store all reducers into UserReducer


const allReducers = combineReducers({
    users: UserReducer // We can use this users object anywhere of our project

});

export default allReducers;