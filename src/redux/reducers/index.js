import { combineReducers } from 'redux';

// reducers 

import mapa from './mapa.js';
import errMessMap from './errMessMap.js'


const rootReducer = combineReducers({ mapa, errMessMap});

export default rootReducer;