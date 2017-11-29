import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {obtenerLocalStorage} from './redux/actions/actionCreators.js';
import { createLogger } from 'redux-logger';

import rootReducer from './redux/reducers/index.js';

const loggerMiddleware = createLogger({predicate: (getState, action)=> __DEV__});

function configureStore(){
  const enchancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(rootReducer, enchancer);
};

const store = configureStore()

export default store;