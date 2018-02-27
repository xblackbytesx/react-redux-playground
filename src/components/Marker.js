import React from 'react'
import PropTypes from 'prop-types'

const Marker = ({ onClick, active, text }) => (
  <li
    onClick={onClick}
    className={
      active
      ? 'active'
      : null
    }
  >
    {text}
  </li>
)

Marker.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Marker
