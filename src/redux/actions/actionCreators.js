import { Platform } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export function ubicacionActual(location){
  return{
    type: 'UBI_ACTUAL',
    location: location.coords,
  }
};

export function errMessage(error){
  return{
    type: 'ERROR_PERMISO',
    error,
  }
}

export function getLocationAsync() {
  return async (dispatch) => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if(status !== "granted"){
      return dispatch(errMessage)
    }
    let location = await Location.getCurrentPositionAsync({});
    return dispatch(ubicacionActual(location))
    }
}
