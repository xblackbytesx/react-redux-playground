import React from 'react'
import PropTypes from 'prop-types'
import Marker from './Marker'

const MarkerList = ({ markers, onMarkerClick }) => (
  <ul>
    {markers.map(marker =>
      <Marker
        key={marker.id}
        {...marker}
        onClick={() => onMarkerClick(marker.id)}
      />
    )}
  </ul>
)

MarkerList.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onMarkerClick: PropTypes.func.isRequired
}

export default MarkerList
