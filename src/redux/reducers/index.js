import { combineReducers } from 'redux';

// reducers 

import ubicacionActual from './mapa.js';
import errMessMap from './errMessMap.js';
import setCoords from './coords.js';


const rootReducer = combineReducers({ ubicacionActual, errMessMap,setCoords});

export default rootReducer;