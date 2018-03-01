import React from 'react';
import PropTypes from 'prop-types';

const MarkerMapItem = ({ onClick, active, latitude, logitude, text }) => {
  
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
      <div class='pin'></div>
      <div class='pulse'></div>
    </div>
  )
}

MarkerMapItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  latitude: PropTypes.number.isRequired,
  logitude: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default MarkerMapItem;
