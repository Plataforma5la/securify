import { combineReducers } from 'redux';

import ubicacionActual from './mapa.js';
import errMessMap from './errMessMap.js';
import setCoords from './coords.js';

import contactosCelular from './contactosCelular.js';
import contactosLista from './contactosAgregados.js'

const rootReducer = combineReducers({ ubicacionActual, errMessMap, contactosCelular, contactosLista, setCoords});

export default rootReducer;