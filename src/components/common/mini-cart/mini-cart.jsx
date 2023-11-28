import React from 'react';
import { Offcanvas, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import "./mini-cart.scss";

const MiniCart = ({ show, handleClose }) => {
  const cartItems = useSelector(state => state.cart.items);
console.log(cartItems)
console.log(cartItems)
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      
        <ul>
          {cartItems.map((item, index) => (
            <ul key={index}>
            <li>
            <Row>
            <Col><img src={item.image_url} alt={item.name} width={50}/></Col>
            <Col>{item.name}</Col>
            Price:{item.price} - Miktar: {item.quantity}
            </Row>
            
                
                </li>
            </ul>
          ))}
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MiniCart;
