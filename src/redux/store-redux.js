import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';
import usersReducer   from './users-reducer';
import authReducer    from './auth-reducer';
import appReducer     from './app-reducer';

let reducers = combineReducers({
  profilePage:  profileReducer,
  dialogsPage:  dialogsReducer,
  friendsBlock: friendsReducer,
  usersPage:    usersReducer,
  auth:         authReducer,
  app:          appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
