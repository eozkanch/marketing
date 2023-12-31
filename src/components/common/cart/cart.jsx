import React from 'react';
import { Container, Row, Col, ButtonGroup, Button, Table, Image } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import "./cart.scss"
import { useDispatch, useSelector } from 'react-redux';
import { removeAllItems, removeItem, increaseItemQuantity, decreaseItemQuantity } from '../../../store/slice/cart/cartSlice';
import { utils } from '../../../utils';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace('CHF ', '').replace(',', '.')); // String değeri uygun bir sayı formatına çevir
    return total + itemPrice * item.quantity;
  }, 0);

  const handleAllDelete = () => {
    utils.functions
      .swalQuestion('Are you sure you want to delete all items?', 'This action cannot be undone!')
      .then((result) => {
        if (result) {
          dispatch(removeAllItems());
        }
      })
      .catch((error) => {
        console.log(error);
        utils.functions.swalToast('Error submitting offer. Please try again later.', 'error');
      });
  };

  const handleDelete = (item) => {
    utils.functions
      .swalQuestion('Are you sure you want to delete all items?', 'This action cannot be undone!')
      .then((result) => {
        if (result && item && item.name) {
        
          dispatch(removeItem(item.name));
        }
      });
  };

  const handleIncrease = (item) => {
    dispatch(increaseItemQuantity(item.name));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseItemQuantity(item.name));
  };

  return (
    <>
      {totalQuantity === 0 ? (
        <h4 className='cart-empty'>Votre panier est vide!</h4>
      ) : (
        <Container>
          <Row className='cart gap-5'>
            <Col md={7}>
              <Row>
                <Col className="cart-header ">
                  <span className="">Mon panier :</span>
                  <span className="">{totalQuantity} produit</span>
                </Col>
              </Row>
              <Row>
                {cartItems.map((item, index) => (
                  <Table  key={index}>
                    <tbody>
                      <tr>
                        <td><Image src={item.image_url} alt={item.name} width={100} thumbnail /></td>
                        <td>
                     
                            <p>{item.name}</p>
                        
                        </td>
                        <td>
                          <ButtonGroup>
                            <Button variant='outline-primary' onClick={() => handleDecrease(item)}>-</Button>
                            <Button variant='outline-primary'>{item.quantity}</Button>
                            <Button variant='outline-primary' onClick={() => handleIncrease(item)}>+</Button>
                          </ButtonGroup>
                        </td>
                        <td>
                          <MdDelete size={40} color="red" onClick={() => handleDelete(item)} />
                        </td>
                        <td>{item.price}</td>
                      </tr>
                    </tbody>
                  </Table>
                ))}
              </Row>
              <Row className="btn-row justify-content-between gap-3">
                <Button href="/collection/tum-urunler" className="btn-cart">Continuer vos achats</Button>
                <Button onClick={handleAllDelete} className="btn-cart">Panier Vide</Button>
              </Row>
            </Col>
            <Col md={4}>
              <Row>
                <Col className='total-header'>
                  <span>Total:</span>
                  <span>CHF {totalPrice}</span>
                </Col>
              </Row>
              <Row>
                <Button>Continuer le paiement</Button>
              </Row>
            </Col>
            <Col md={7}>
              <div>
                <h5>Instructions spéciales pour la commande</h5>
                <input type="text" placeholder="Instructions" />
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Cart;
