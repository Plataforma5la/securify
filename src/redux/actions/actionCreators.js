import { Platform } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { uniqBy } from 'lodash';

// Funcion ubicacion actual
export function ubicacionActual(location){
  return{
    type: 'UBI_ACTUAL',
    location: location.coords,
  }
};

// Funcion error mensaje
export function errMessage(error){
  return{
    type: 'ERROR_PERMISO',
    error,
  }
};

// Buscar ubicacion
export function getLocationAsync() {
  return async (dispatch) => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if(status !== "granted"){
      return dispatch(errMessage)
    }
    let location = await Location.getCurrentPositionAsync({});
    return dispatch(ubicacionActual(location))
    }
};

// Funcion contactos
export function contactosFn(contactos){
  return{
    type: 'REC_CONTACTOS',
    contactos,
  }
};

// Contactos celular
export function showFirstContactAsync(){
  return async (dispatch) => {
    const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    if (permission.status !== 'granted') {
      return dispatch(errMessage('error permisos contactos'))      
    }
    const contactsResponse = await Expo.Contacts.getContactsAsync({
      fields: [
        Expo.Contacts.PHONE_NUMBERS,
      ],
      pageSize: 300,
      pageOffset: 0,
    });
    const contacts = uniqBy(contactsResponse.data, 'id');
    if (contacts.length > 0) {
      return dispatch(contactosFn(contacts))
    }
  }
};

// Agregar contactos lista

export function agregarLista(id){
  return {
    type: 'AGREGAR_CONT',
    id,
  }
};

// Borrar contacto lista

export function borrarLista(index){
  return {
    type: 'REMOVE_CONT',
    index,
  }
};