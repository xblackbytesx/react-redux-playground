import { combineReducers } from 'redux'
import markers from './markers'
import visibilityFilter from './visibilityFilter'

const markerApp = combineReducers({
  markers,
  visibilityFilter
})

export default markerApp
