import React from 'react';
import PropTypes from 'prop-types';
import MarkerMapItem from './markerMapItem';

const MarkerMap = ({ markers, onMarkerClick }) => (
  <div>
    {markers.map(marker =>
      <MarkerMapItem
        key={marker.id}
        {...marker}
        onClick={() => onMarkerClick(marker.id)}
      />
    )}
  </div>
)

MarkerMap.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onMarkerClick: PropTypes.func.isRequired
}

export default MarkerMap;
