import React from 'react';
import "./Button.css";

function Button(props) {
  return (
    <button className={`Button ${props.btnType}`} onClick={props.clicked}>
      {props.children}
    </button>
  )
}

export default Button
