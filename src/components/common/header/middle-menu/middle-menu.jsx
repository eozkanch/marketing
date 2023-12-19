import React, { useState } from 'react';
import { Accordion, Button, Col, Container, Form, InputGroup, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import { FiHeart } from 'react-icons/fi';
import { MdShoppingBasket } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
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
  const [searchText, setSearchText] = useState('');
  const handleSearch = (event) => {
    const searchTextValue = event?.target?.value || '';
    setSearchText(searchTextValue);
  };

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
            <Col xs={4} md={3} className='logo-col'>
              <Link to='/'>
                <img src='/Resim1Q.png' alt='logo' className='logo' color='green' />
              </Link>
            </Col>
            <Col xs={1} md={6} className='search-col'>
              <Row className='search-icon'>
                <Offcanvas placement='top' show={isSearchOffcanvasVisible} onHide={hideSearchOffcanvas} className='search-offcanvas' style={{ height: '100px' }}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Body>
                      <div className='search-container-offcanvas'>
                        <InputGroup>
                          <Form.Control placeholder='Rechercher dans la boutique' aria-label='Rechercher dans la boutique'
                            value={searchText} onChange={handleSearch} />
                          <Link to={`/searchresults?query=${encodeURIComponent(searchText ? searchText.trim() : '')}`}>
                            <Button className='search-btn' disabled={!searchText.trim()}>
                              <IoIosSearch color='white' size={20} onClick={handleSearch} />
                            </Button>
                          </Link>
                        </InputGroup>
                      </div>
                    </Offcanvas.Body>
                  </Offcanvas.Header>
                </Offcanvas>
              </Row>

              <div className='search-container'>
                <InputGroup>
                  <Form.Control placeholder='Rechercher dans la boutique' aria-label='Rechercher dans la boutique'
                    value={searchText} onChange={handleSearch} />
                  <Link to={`/searchresults?query=${encodeURIComponent(searchText ? searchText.trim() : '')}`}>
                    <Button className='search-btn' disabled={!searchText.trim()}>
                      <IoIosSearch color='white' size={20} onClick={handleSearch} />
                    </Button>
                  </Link>
                </InputGroup>
              </div>
            </Col>
            <Col xs={6} md={3} className='icon-col'>
              <Link to='/favori'>
                <Button className='favori-btn' variant="primary">
                  <Badge badgeContent={favoriItems.length} showZero >
                    <FiHeart className='icon' color='white' />
                  </Badge>
                </Button>
              </Link>

              <Link to='/favori'>
                <Badge badgeContent={favoriItems.length} showZero color='success' className='favori-badge'>
                  <FiHeart className='icon' color='rgb(111, 117, 49)' />
                </Badge>
              </Link>

              <Button className='favori-btn' variant="primary" onClick={showMiniCart} >
                <Badge badgeContent={totalQuantity} showZero >
                  <MdShoppingBasket onClick={showMiniCart} className='icon' />
                </Badge>
              </Button>

              <Badge badgeContent={totalQuantity} showZero color='success' className='favori-badge'>
                <MdShoppingBasket onClick={showMiniCart} className='icon' />
              </Badge>

              <IoIosSearch className='icon ' id='search' onClick={showSearchOffcanvas} />
              <Button className='favori-btn' variant="primary" onClick={showSearchOffcanvas}>
                <IoIosSearch className='icon ' id='search' onClick={showSearchOffcanvas} />
              </Button>
              <div className='bottom-menu-offcanvas'>
                <Button className='favori-btn' variant="primary" onClick={showHamburgerMenuOffcanvas}>
                  <GiHamburgerMenu color="white" className='icon' onClick={showHamburgerMenuOffcanvas} />
                </Button>
                <Offcanvas show={isHamburgerMenuOffcanvasVisible} onHide={hideHamburgerMenuOffcanvas} style={{ width: '80%' }}>
                  <Offcanvas.Header closeButton></Offcanvas.Header>
                  <Offcanvas.Body>
                    <Accordion defaultActiveKey="0" style={{ border: 'none' }}>
                      <Accordion.Item eventKey="1" style={{ border: 'none' }}>
                        <Accordion.Header >Produits De Boulangerie</Accordion.Header>
                        <Accordion.Body>
                          <NavDropdown.Item as={Link} to={`/collection/baklava`}> Antep Baklavası</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/collection/lokum`}> Lokum</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/collection/kek-pasta`}> Kek & Pasta</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/collection/sekerlemeler`}>Şekerlemeler</NavDropdown.Item>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2" style={{ border: 'none' }}>
                        <Accordion.Header> Épicerie Fine</Accordion.Header>
                        <Accordion.Body>
                          <NavDropdown.Item as={Link} to={`/collection/baharatlar`}> Épices</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/collection/kurutulmus-sebze`}> Légumes séchés</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/collection/sos-nar-eksisi`}> Sauces</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/collection/salcalar`}>pâte de tomate</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/collection/tursu`}>Turşu</NavDropdown.Item>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3" style={{ border: 'none' }}>
                        <Accordion.Header>Boisson</Accordion.Header>
                        <Accordion.Body>
                          <NavDropdown.Item as={Link} to={`/collection/caylar`}>Thés</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/collection/kahveler`}> Cafés</NavDropdown.Item>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4" style={{ border: 'none' }}>
                        <Accordion.Header>Des Noisettes</Accordion.Header>
                        <Accordion.Body>
                          <NavDropdown.Item as={Link} to={`/collection/kuruyemisler`}> Des Noisettes</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/collection/kurutulmus-meyve`}> Fruit Sec</NavDropdown.Item>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5" style={{ border: 'none' }}>
                        <Accordion.Header>Deujeuner</Accordion.Header>
                        <Accordion.Body>
                          <NavDropdown.Item as={Link} to={`/collection/zeytin-peynir`}> Fromage aux olives</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/collection/recel`}> Confiture</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/collection/bal-tahin-pekmez`}>Miel-Tahini-Mélasse</NavDropdown.Item>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6" style={{ border: 'none' }}>
                        <Accordion.Header>Légumineuses</Accordion.Header>
                        <Accordion.Body>
                          <NavDropdown.Item as={Link} to={`/collection/bakliyatlar`}> Légumineuses</NavDropdown.Item>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7" style={{ border: 'none' }}>
                        <Accordion.Header>Cosmétiques et Santé</Accordion.Header>
                        <Accordion.Body>
                          <NavDropdown.Item as={Link} to={`/collection/kozmetik-bakim`}> Cosmétiques et Santé</NavDropdown.Item>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Container>
                      {/* Buraya eklemeler yapabilirsiniz */}
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

