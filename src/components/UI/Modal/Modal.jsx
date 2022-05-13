import React from 'react';
import "./Modal.css";

function Modal(props) {
  return (
    <div 
      className='Modal'
      style={{
        transition : "all 0.5s ease",
        transform : props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity : props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  )
}

export default Modal
