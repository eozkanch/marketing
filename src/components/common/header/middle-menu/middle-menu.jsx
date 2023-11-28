import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import { FiHeart } from "react-icons/fi";
import { MdShoppingBasket } from "react-icons/md";
import { IoIosSearch } from 'react-icons/io';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './middle-menu.scss';
import { Link } from 'react-router-dom';
import MiniCart from '../../../common/mini-cart/mini-cart';
import { useSelector, useDispatch } from 'react-redux';

const theme = createTheme({
  palette: {
    success: {
      main: 'rgb(111, 117, 49)',
    },
  },
});

const logoStyle = {
  backgroundColor: 'rgb(111, 117, 49)',
  width: '150px',
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '24px',
  fontWeight: 'bold',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  border: '2px solid #fff',
};
const MiddleMenu = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [showMiniCart, setShowMiniCart] = useState(false);

  const handleShowMiniCart = () => setShowMiniCart(true);
  const handleHideMiniCart = () => setShowMiniCart(false);
  return (
    <ThemeProvider theme={theme}>
      <Container fluid>
        <Row className='middle-menu'>
        
          <Col md={3}>
          <Link to='/'>
          <div className='logo-div'>
          <Row>
          <Col>
          <span>L</span>
            <span>E</span>
            <span>S</span>
          </Col></Row>
          <Row>
          <Col>
            <span>N</span>
            <span>O</span>
            <span>T</span>
            <span>R</span>
            <span>E</span>
            </Col>
            </Row>
            
            
          </div>
            </Link>
          </Col>
      
          <Col md={7}>
            <InputGroup>
              <Form.Control placeholder="Rechercher dans la boutique" aria-label="Dollar amount (with dot and two decimal places)" />
              <Button className='search-btn'><IoIosSearch color='white' size={20} /></Button>
            </InputGroup>
          </Col>
          <Col md={2}>
            <Row>
              <Col className='text-end'>
                <Badge badgeContent={0} showZero color="success">
                  <FiHeart size={35}  className='icon'/>
                </Badge>
              </Col>
              <Col>
                <Badge badgeContent={totalQuantity} showZero color="success">
                  <MdShoppingBasket onClick={handleShowMiniCart} size={40} className='icon'/>
                </Badge>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <MiniCart show={showMiniCart} handleClose={handleHideMiniCart} />
    </ThemeProvider>
  );
};

export default MiddleMenu;
