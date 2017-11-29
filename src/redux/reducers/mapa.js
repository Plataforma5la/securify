export default function mapa(state={
    latitudeDelta: null,
    longitudeDelta: null,
    latitude: null,
    logintude: null,
}, action) {
    switch(action.type){
      case 'UBI_ACTUAL':
        return {...action.ubiActual, latitudeDelta: 0.0142, longitudeDelta: 0.0121 };
      default:
        return state;
    }
}