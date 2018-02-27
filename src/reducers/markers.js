const markers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MARKER':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          active: true
        }
      ]
    case 'TOGGLE_MARKER':
      return state.map(marker =>
        (marker.id === action.id)
          ? {...marker, completed: !marker.completed}
          : marker
      )
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
