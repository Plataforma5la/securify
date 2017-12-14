import { Platform } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import Polyline from '@mapbox/polyline';

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

export function setCoords(coords){
 return {
   type: 'SET_COORDS',
   coords,
 }
}

export function getLocationAsync() {
  return async (dispatch) => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if(status !== "granted"){
      return dispatch(errMessage)
    }
    // let location = await Location.getCurrentPositionAsync({});
    // let location = await 
    Location.watchPositionAsync({ enableHighAccuracy: true, timeInterval: 20000, distanceInterval: 30 },location =>{return dispatch(ubicacionActual(location))})
    // return dispatch(ubicacionActual(location))
    }
}

export  function getDirections(startLoc, destinationLoc) {
  return async (dispatch)=> {
    try {
    if (destinationLoc){
    let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&mode=walking&region=ar&key=AIzaSyCMON2_6RV1GtJanT-wfFU2Ps0pCSV7Mcc`)
    let respJson = await resp.json();
    let tiempoEstimado=respJson.routes[0].legs[0].duration.value
    console.log('Tieeeempo Estimaaaaado: ',tiempoEstimado);
    let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
    let coords = points.map((point, index) => {
        return  {
            latitude : point[0],
            longitude : point[1]
        }
    })
      return dispatch(setCoords(coords))
    }else{
      return dispatch(setCoords([]))
    }
  } catch(error) {    
    alert(error)
    return error
  }
}
}