function contactosLista(state=[], action){
  switch(action.type){
    case 'AGREGAR_CONT':
      return[
        ...state,
        action.id,
      ]
    case 'REMOVE_CONT':
      let i = action.index
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1),
      ]
    default:
      return state
  }
}

export default contactosLista;