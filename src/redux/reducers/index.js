import { combineReducers } from 'redux';

// reducers 

import ubicacionActual from './mapa.js';
import errMessMap from './errMessMap.js';
import contactosCelular from './contactosCelular.js';
import contactosLista from './contactosAgregados.js'

const rootReducer = combineReducers({ ubicacionActual, errMessMap, contactosCelular, contactosLista});

export default rootReducer;