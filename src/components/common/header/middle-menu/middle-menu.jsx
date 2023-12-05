import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Offcanvas, Row } from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import { FiHeart } from 'react-icons/fi';
import { MdShoppingBasket } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import MiniCart from '../../../common/mini-cart/mini-cart';
import { useSelector } from 'react-redux';
import './middle-menu.scss';
const theme = createTheme({
  palette: {
    success: {
      main: 'rgb(111, 117, 49)',
    },
  },
});

const MiddleMenu = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
const favoriItems = useSelector(state => state.favori.items);
  const [showMiniCart, setShowMiniCart] = useState(false);

  const handleShowMiniCart = () => setShowMiniCart(true);
  const handleHideMiniCart = () => setShowMiniCart(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ThemeProvider theme={theme}>
     
    
     <div>
        <Container>
      
        <Row className='middle-menu'>
          <Col xs={4} md={2} className='logo-col' >
            <Link to='/'>
              <img src='/logo.svg' alt='logo' className='logo' />
            </Link>
          </Col>
          <Col xs={4} md={8} className='search-col '>
          <Row className='search-icon'>
          <Offcanvas placement='top' show={show} onHide={handleClose} className='search-offcanvas' style={{  height: '150px' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Body>
          <div className='search-container-offcanvas'>
            <InputGroup>
            
              <Form.Control placeholder='Rechercher dans la boutique' aria-label='Rechercher dans la boutique' />
              <Button className='search-btn'>
              <IoIosSearch color='black' size={20} />
               
              </Button>
            </InputGroup>
            </div>
            </Offcanvas.Body>
        </Offcanvas.Header>
        </Offcanvas>
        <IoIosSearch   size={40} onClick={handleShow} />
          </Row>
          

          <div className='search-container'>
            <InputGroup>
            
              <Form.Control placeholder='Rechercher dans la boutique' aria-label='Rechercher dans la boutique' />
              <Button className='search-btn'>
              <IoIosSearch color='black' size={20} />
               
              </Button>
            </InputGroup>
            </div>
        
            
          </Col>
          <Col xs={4} md={2} className='icon-col '>
              <Link to='/favori'>
            <Badge  badgeContent={favoriItems.length} showZero color='success'>
              <FiHeart  size={40} className='icon' />
            </Badge>
            </Link>
            <Badge badgeContent={totalQuantity} showZero color='success'>
              <MdShoppingBasket onClick={handleShowMiniCart} size={40} className='icon' />
            </Badge>
          </Col>
        </Row>
      
        </Container>
       </div>
       
     
     
      <MiniCart show={showMiniCart} handleClose={handleHideMiniCart} style={{ width: '80%' }}/>
    </ThemeProvider>
  );
};

export default MiddleMenu;

