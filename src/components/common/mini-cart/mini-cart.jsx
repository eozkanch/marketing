import React, { useState } from 'react';
import { Offcanvas, Container, Row, Col, Table, Button, ButtonGroup, Image } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import "./mini-cart.scss";
import { utils } from '../../../utils';

// Eksik olan import ifadelerini ekleyin
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from '../../../store/slice/cart/cartSlice';
import { Link } from 'react-router-dom';

const MiniCart = React.memo(({ show, handleClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace('CHF ', '').replace(',', '.')); // String değeri uygun bir sayı formatına çevir
    return total + itemPrice * item.quantity;
  }, 0);

  const handleDelete = (item) => {
    utils.functions
      .swalQuestion('Bu öğeyi silmek istediğinizden emin misiniz?', 'Bu işlemi geri alamayacaksınız!')
      .then((result) => {
        if (result && item && item.name) {
          console.log(`Silme işlemi başlatılıyor: ${item.name}`);
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
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className='mini-cart-header'>Sepetinizde {totalQuantity} Ürün var</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container className='mini-cart' >
          <Row  className='cart-mini gap-1' style={{ maxHeight: 'auto', overflowY: 'auto' }} >
            {cartItems.map((item, index) => (
              <Table key={index}>
                <tbody>
                  <tr>
                    <td style={{ width: '200px' }}><img src={item.image_url} alt={item.name}  thumbnail /></td>
                    <td  style={{ width: '300px' }}>
                      <div className='mini-cart-product'>
                        <h6>{item.name}</h6>
                        <h6>{item.price}</h6>
                      </div>
                      <tr>
                    <td style={{ width: '300px', height: '30px'}}>
                      <ButtonGroup>
                        <Button size="sm" variant='outline-primary' onClick={() => handleDecrease(item)}>-</Button>
                        <Button size="sm" variant='outline-primary'>{item.quantity}</Button>
                        <Button size="sm" variant='outline-primary' onClick={() => handleIncrease(item)}>+</Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <MdDelete size={30} color="rgb(111, 117, 49)" onClick={() => handleDelete(item)} />
                    </td>
                    
                    </tr>
                    </td>
                    </tr>
                   
                  
                </tbody>
              </Table>
            ))}
          </Row>

          <Row className='gap-1'>
            <p> Toplam Fiyat: <span>{totalPrice.toFixed(2)} CHF</span></p>
            <Button className='mini-cart-btn' variant="primary" as={Link} to='/cart'>
              Sepeti Göster
            </Button>
            <Button className='mini-cart-btn' variant="primary" as={Link} to='/payment' >
              Ödeme Yap
            </Button>
          </Row>

        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
});

export default MiniCart;




