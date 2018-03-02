import { connect } from 'react-redux';
import { setMarkerActive } from '../actions';
import MarkerList from '../components/marker-list/marker-list';

const getVisibleMarkers = (markers, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return markers
    case 'SHOW_ACTIVE':
      return markers.filter(t => t.active)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  markers: getVisibleMarkers(state.markers, state.visibilityFilter)
})

const mapDispatchToProps = {
  onMarkerClick: setMarkerActive
}

const VisibleMarkerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkerList)

export default VisibleMarkerList;
