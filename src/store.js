import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './redux/reducers/index.js';

const loggerMiddleware = createLogger({predicate: (getState, action)=> __DEV__});

function configureStore(){
  return createStore(rootReducer, applyMiddleware(
    thunkMiddleware,
  ));
};

const store = configureStore()

export default store;