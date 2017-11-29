export default function ubicacionActual(state={
    latitudeDelta: 0.0142,
    longitudeDelta: 0.0121,
    latitude: null,
    logintude: null,
}, action) {
  switch(action.type){
   case 'UBI_ACTUAL':
      return {...action.location, latitudeDelta: 0.0142, longitudeDelta: 0.0121 };
    default:
      return state;
  }
}