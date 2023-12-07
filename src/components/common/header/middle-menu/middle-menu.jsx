import React, { useState } from 'react';
import { Accordion, Button, Col, Container, Form, InputGroup, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import { FiHeart } from 'react-icons/fi';
import { MdShoppingBasket } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import MiniCart from '../../../common/mini-cart/mini-cart';
import { useSelector } from 'react-redux';
import './middle-menu.scss';
import { GiHamburgerMenu } from "react-icons/gi";

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

  // For MiniCart
  const [isMiniCartVisible, setMiniCartVisibility] = useState(false);
  const showMiniCart = () => setMiniCartVisibility(true);
  const hideMiniCart = () => setMiniCartVisibility(false);

  // For Offcanvas related to the search
  const [isSearchOffcanvasVisible, setSearchOffcanvasVisibility] = useState(false);
  const showSearchOffcanvas = () => setSearchOffcanvasVisibility(true);
  const hideSearchOffcanvas = () => setSearchOffcanvasVisibility(false);

  // For Offcanvas related to the hamburger menu
  const [isHamburgerMenuOffcanvasVisible, setHamburgerMenuOffcanvasVisibility] = useState(false);
  const showHamburgerMenuOffcanvas = () => setHamburgerMenuOffcanvasVisibility(true);
  const hideHamburgerMenuOffcanvas = () => setHamburgerMenuOffcanvasVisibility(false);


  return (
    <ThemeProvider theme={theme}>
      <div>
        <Container>
          <Row className='middle-menu'>
            <Col xs={4} md={2} className='logo-col'>
              <Link to='/'>
                <img src='/Resim1Q.png' alt='logo' className='logo' color='green' />
              </Link>
            </Col>
            <Col xs={1}  md={8} className='search-col'>
              <Row className='search-icon'>
                <Offcanvas placement='top' show={isSearchOffcanvasVisible} onHide={hideSearchOffcanvas} className='search-offcanvas' style={{ height: '100px' }}>
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
              </Row>
            
              <div className='search-container'>
                <InputGroup>
                  <Form.Control placeholder='Rechercher dans la boutique' aria-label='Rechercher dans la boutique' />
                  <Button className='search-btn'>
                    <IoIosSearch color='black' size={25} />
                  </Button>
                </InputGroup>
              </div>
          
            </Col>
            <Col xs={6} md={2} className='icon-col'>
              
              <Link to='/favori'>
                <Badge badgeContent={favoriItems.length} showZero color='success'>
                  <FiHeart className='icon' color='rgb(111, 117, 49)' />
                </Badge>
              </Link>
              <Badge badgeContent={totalQuantity} showZero color='success'>
                <MdShoppingBasket onClick={showMiniCart}   className='icon' />
              </Badge>
              <IoIosSearch className='icon '  id='search' onClick={showSearchOffcanvas} />
              <div className='bottom-menu-offcanvas'>
                <GiHamburgerMenu color="rgb(111, 117, 49)"  className='icon'   onClick={showHamburgerMenuOffcanvas} />
                <Offcanvas show={isHamburgerMenuOffcanvasVisible} onHide={hideHamburgerMenuOffcanvas} style={{ width: '80%' }}>
                  <Offcanvas.Header closeButton></Offcanvas.Header>
                  <Offcanvas.Body>
     
     <Accordion defaultActiveKey="0"  style={{ border: 'none' }}>
      <Accordion.Item eventKey="1" style={{ border: 'none' }}>
        <Accordion.Header >Produits De Boulangerie</Accordion.Header>
        <Accordion.Body>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("baklava")}`}> Antep Baklavası</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("lokum")}`}> Lokum</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kek-pasta")}`}> Kek & Pasta</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("sekerlemeler")}`}>Şekerlemeler</NavDropdown.Item>   
         
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" style={{ border: 'none' }}>
        <Accordion.Header> Épicerie Fine</Accordion.Header>
        <Accordion.Body>
        <NavDropdown.Item href={`/collection/${encodeURIComponent("baharatlar")}`}> Épices</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kurutulmus-sebze")}`}> Légumes séchés</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("sos-nar-eksisi")}`}> Sauces</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("salcalar")}`}>pâte de tomate</NavDropdown.Item>   
              <NavDropdown.Item href={`/collection/${encodeURIComponent("tursu")}`}>Turşu</NavDropdown.Item>   
         
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" style={{ border: 'none' }}>
        <Accordion.Header>Boisson</Accordion.Header>
        <Accordion.Body>
        <NavDropdown.Item href={`/collection/${encodeURIComponent("caylar")}`}>Thés</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kahveler")}`}> Cafés</NavDropdown.Item>  
         
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" style={{ border: 'none' }}>
        <Accordion.Header>Des Noisettes</Accordion.Header>
        <Accordion.Body>
        <NavDropdown.Item href={`/collection/${encodeURIComponent("kuruyemisler")}`}> Des Noisettes</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("kurutulmus-meyve")}`}> Fruit Sec</NavDropdown.Item>
         
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" style={{ border: 'none' }}>
        <Accordion.Header>Deujeuner</Accordion.Header>
        <Accordion.Body>
        <NavDropdown.Item href={`/collection/${encodeURIComponent("zeytin-peynir")}`}> Fromage aux olives</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("recel")}`}> Confiture</NavDropdown.Item>
              <NavDropdown.Item href={`/collection/${encodeURIComponent("bal-tahin-pekmez")}`}>Miel-Tahini-Mélasse</NavDropdown.Item> 
         
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6" style={{ border: 'none' }}>
        <Accordion.Header>Légumineuses</Accordion.Header>
        <Accordion.Body>
        <NavDropdown.Item href={`/collection/${encodeURIComponent("bakliyatlar")}`}> Légumineuses</NavDropdown.Item>
         
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7" style={{ border: 'none' }}>
        <Accordion.Header>Cosmétiques et Santé</Accordion.Header>
        <Accordion.Body>
        <NavDropdown.Item href={`/collection/${encodeURIComponent("kozmetik-bakim")}`}> Cosmétiques et Santé</NavDropdown.Item>
         
        </Accordion.Body>
      </Accordion.Item>
      
      </Accordion>
      <Container>
    
       

      </Container>
      </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <MiniCart show={isMiniCartVisible} handleClose={hideMiniCart} style={{ width: '80%' }} />
    </ThemeProvider>
  );
};

export default MiddleMenu;
