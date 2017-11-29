import { combineReducers } from 'redux';

// reducers 

import ubicacionActual from './mapa.js';
import errMessMap from './errMessMap.js'


const rootReducer = combineReducers({ ubicacionActual, errMessMap});

export default rootReducer;