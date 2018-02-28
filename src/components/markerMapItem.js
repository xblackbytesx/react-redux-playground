import React from 'react';
import PropTypes from 'prop-types';

const MarkerMapItem = ({ onClick, active, text }) => (
  <div
    onClick={onClick}
    className={
      active
      ? 'active'
      : null
    }
  >
    {text}
  </div>
)

MarkerMapItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default MarkerMapItem;
