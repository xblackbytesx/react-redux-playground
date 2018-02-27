let nextMarkerId = 0

export const addMarker = (text) => ({
  type: 'ADD_MARKER',
  id: nextMarkerId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleMarker = (id) => ({
  type: 'TOGGLE_MARKER',
  id
})

export const setMarkerActive = (id) => ({
  type: 'MARKER_ACTIVE',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
