import React from 'react';
import PropTypes from 'prop-types';
import './map-marker.css';

const MapMarker = ({ onClick, active, latitude, logitude, text }) => {

  var mapItemStyle = {
    top: latitude + '%',
    left: logitude + '%'
  }

  return (
    <div
      onClick={onClick}
      style={mapItemStyle}
      className={`map__item ${active ? `map__item--active` : ``}`}
    >
      <div className='map-marker'></div>
      <div className='marker-pulse'></div>
    </div>
  )
}

MapMarker.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  latitude: PropTypes.number.isRequired,
  logitude: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default MapMarker;
