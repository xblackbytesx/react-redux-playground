import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button className={`${props.class}`} type={`${props.type}`}>
      {props.children}
    </button>
  )
}

export default Button;
