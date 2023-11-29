import React, { useState } from 'react';
import { Offcanvas, Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import "./mini-cart.scss";

const MiniCart = React.memo(({ show, handleClose }) => {
  console.log("MiniCart Rendered");
  const cartItems = useSelector(state => state.cart.items);
  console.log("Cart Items:", cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  console.log("Total Quantity:", totalQuantity);
  
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace('CHF ', '').replace(',', '.')); // String değeri uygun bir sayı formatına çevir
    return total + itemPrice * item.quantity;
  }, 0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className='mini-cart-header'>Sepetinizde {totalQuantity} Ürün var</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container className='mini-cart'>
          <Row>
            <ul>
              {cartItems.map((item, index) => (
                <li >
                  <Row className='d-flex justify-content-between align-items-center'>
                    <Col md={6} className='d-flex gap-3 align-items-center justify-content-center'>
                      <img src={item.image_url} alt={item.name} width={50} />
                    </Col>
                    <Col md={6}>
                      <div>{item.name}</div>
                      <div>Price: {item.price} - Quantity: {item.quantity}</div>
                    </Col>
                  </Row>
                </li>
              ))}
            </ul>
          </Row>
         {/* Yan kaydırma çubuğunu ekleyin */}
      {scrollPosition > 0 && (
        <div className="scroll-indicator" onClick={() => setScrollPosition(0)}>
          Yukarı Git
        </div>
      )}
        
          <Row className='gap-1'>
            <p> Toplam Fiyat: <span>{totalPrice.toFixed(2)} CHF</span></p>
            <Button className='mini-cart-btn' variant="primary" onClick={() => alert('Sepeti Göster butonuna tıklandı.')}>
              Sepeti Göster
            </Button>
            <Button className='mini-cart-btn' variant="primary" onClick={() => alert('Ödeme Yap butonuna tıklandı.')}>
              Ödeme Yap
            </Button>
          </Row>
           
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
});

export default MiniCart;



