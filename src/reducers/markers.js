const markers = (state = [], action) => {

  this.randomNumber = (max, min) => (
    Math.floor(Math.random()*(max-min+1)+min)
  );

  switch (action.type) {
    case 'ADD_MARKER':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          active: false,
          latitude: this.randomNumber(95, 5),
          logitude: this.randomNumber(95, 5)
        }
      ]
    case 'MARKER_ACTIVE':
      return state.map(marker =>
        (marker.id === action.id)
          ? {...marker, active: !marker.active}
          : marker
      )
    default:
      return state
  }
}

export default markers;
