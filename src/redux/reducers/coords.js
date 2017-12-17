export default function setCoords(state=[],action) {
  switch (action.type){
    case 'SET_COORDS':
      return action.coords;
    default:
      return state;
  }
}