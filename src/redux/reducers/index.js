import { combineReducers } from 'redux';

// reducers 

import ubicacionActual from './mapa.js';
import errMessMap from './errMessMap.js';
import contactosCelular from './contactosCelular.js'

const rootReducer = combineReducers({ ubicacionActual, errMessMap, contactosCelular});

export default rootReducer;