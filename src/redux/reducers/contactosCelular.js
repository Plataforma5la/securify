export default function contactosCelular(state = [], action) {
  switch(action.type){
    case 'REC_CONTACTOS':
      return action.contactos;
    default:
      return state;
  }
}