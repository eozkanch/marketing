import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import "./mini-cart.scss"

const MiniCart = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
       
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MiniCart;
