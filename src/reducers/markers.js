const markers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MARKER':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_MARKER':
      return state.map(marker =>
        (marker.id === action.id)
          ? {...marker, completed: !marker.completed}
          : marker
      )
    default:
      return state
  }
}

export default markers
