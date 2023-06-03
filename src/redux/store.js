import { applyMiddleware, createStore } from 'redux';
import users from './redusers/users';
import thunk from 'redux-thunk';

const store = createStore(users, applyMiddleware(thunk));

export default store;