import React from 'react';
import PropTypes from 'prop-types';

const MarkerListItem = ({ onClick, active, text }) => (
  <li
    onClick={onClick}
    className={`list__item ${active ? `list__item--active` : ``}`}
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
