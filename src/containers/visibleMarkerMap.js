import { connect } from 'react-redux';
import { toggleMarker, setMarkerActive } from '../actions';
import MarkerMap from '../components/markerMap';

const getVisibleMarkers = (markers, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return markers
    case 'SHOW_COMPLETED':
      return markers.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return markers.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  markers: getVisibleMarkers(state.markers, state.visibilityFilter)
})

const mapDispatchToProps = {
  // onMarkerClick: toggleMarker
  onMarkerClick: setMarkerActive
}

const VisibleMarkerMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkerMap)

export default VisibleMarkerMap;
