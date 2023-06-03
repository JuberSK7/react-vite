import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../redux/reducer';
import saga from '../redux/saga';
import _ from 'lodash';
import { saveState, loadState } from './localStorage';

const sagaMiddleware = createSagaMiddleware();   
const initialState = loadState();
const middleware = [
  sagaMiddleware
];


const store = configureStore({
    reducer : rootReducer,
    middleware : middleware,
    preloadedState: initialState
  });
/* 
export const store = configureStore({
  middleware: [thunk, routerMiddleware(history)],
  reducer: rootReducer(history),
  preloadedState,
});
,
  initialState,
  applyMiddleware(...middleware) */

sagaMiddleware.run(saga);


store.subscribe(_.throttle(() => {
  saveState({
    login: store.getState().login
  });
}, 2000));

export default store;