export default function errMapa(state = '', action) {
  switch(action.type){
    case 'ERROR_PERMISO':
      return action.errMessageMap;
    default: 
      return ''
  }
}