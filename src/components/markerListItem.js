import React from 'react';
import PropTypes from 'prop-types';

const MarkerListItem = ({ onClick, active, text }) => (
  <li
    onClick={onClick}
    className={
      active
      ? 'list__item--active'
      : null
    }
  >
    {text}
  </li>
)

MarkerListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default MarkerListItem;
