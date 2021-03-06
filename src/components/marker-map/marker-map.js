import React from 'react';
import PropTypes from 'prop-types';
import MapMarker from '../map-marker/map-marker';
import './marker-map.css';
import Map from './map.jpg';

const MarkerMap = ({ markers, onMarkerClick }) => (
  <div className="property-map__map">
    {markers.map(marker =>
      <MapMarker
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
