import thunk from 'redux-thunk';
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import favListReducer from './fav-list/reducer';

export const rootReducer = combineReducers({
  favList: favListReducer,
});
// const store = createStore(reducers,{},applyMiddleware(ReduxThunk));

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
