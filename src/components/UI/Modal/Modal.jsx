import React from 'react';
import "./Modal.css";
import Auxx from "../../../hook/Auxx";
import Backdrop from '../Backdrop/Backdrop';

function Modal(props) {
  return (
    <Auxx>
      <Backdrop show={props.show} clicked={props.modalClose} />
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
    </Auxx>
  )
}

export default Modal
