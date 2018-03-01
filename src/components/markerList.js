import React from 'react';
import PropTypes from 'prop-types';
import MarkerListItem from './markerListItem';

const MarkerList = ({ markers, onMarkerClick }) => (
  <div className="property-map__list">
    <ul>
      {markers.map(marker =>
        <MarkerListItem
          key={marker.id}
          {...marker}
          onClick={() => onMarkerClick(marker.id)}
        />
      )}
    </ul>
  </div>
)

MarkerList.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onMarkerClick: PropTypes.func.isRequired
}

export default MarkerList;
