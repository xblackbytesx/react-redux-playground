import React from 'react';
import PropTypes from 'prop-types';

const ListMarker = ({ onClick, active, text }) => (
  <li
    onClick={onClick}
    className={`list__item ${active ? `list__item--active` : ``}`}
  >
    {text}
  </li>
)

ListMarker.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default ListMarker;
