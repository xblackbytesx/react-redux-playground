import React from 'react';
import PropTypes from 'prop-types';
import ListMarker from '../list-marker/list-marker';
import './marker-list.css';

const MarkerList = ({ markers, onMarkerClick }) => (
  <div className="property-map__list">
    {
      (markers.length <= 0)
      ? <div className="property-map__list__empty">
          <h2>Je hebt nog geen locaties toegevoegd</h2>
          <p>Gebruik het invoerveld hierboven om een locatie toe te voegen</p>
        </div>

      : <ul>
          {markers.map(marker =>
            <ListMarker
              key={marker.id}
              {...marker}
              onClick={() => onMarkerClick(marker.id)}
            />
          )}
        </ul>
    }
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
