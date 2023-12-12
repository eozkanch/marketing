import React, { useState } from 'react';
import { Accordion, Badge, Button, Col, Container, Dropdown, Form, InputGroup, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FiHeart } from 'react-icons/fi';
import { IoIosSearch } from 'react-icons/io';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MiniCart from '../../../common/mini-cart/mini-cart';
import './middle-menu.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

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

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const favoriItems = useSelector((state) => state.favori.items);

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
          <Row className="middle-menu">
            <Col xs={4} md={3} className="logo-col">
              <Link to="/">
                <img src="/Resim1Q.png" alt="logo" className="logo" color="green" />
              </Link>
            </Col>
            <Col xs={1} md={6} className="search-col">
              <Row className="search-icon">
                <Offcanvas
                  placement="top"
                  show={isSearchOffcanvasVisible}
                  onHide={hideSearchOffcanvas}
                  className="search-offcanvas"
                  style={{ height: '100px' }}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Body>
                      <div className="search-container-offcanvas">
                        <InputGroup>
                          <Form.Control
                            placeholder="Rechercher dans la boutique"
                            aria-label="Rechercher dans la boutique"
                            value={searchText}
                            onChange={handleSearch}
                          />
                          <Link to={`/searchresults?query=${encodeURIComponent(searchText ? searchText.trim() : '')}`}>
                            <Button className="search-btn" disabled={!searchText.trim()}>
                              <IoIosSearch color="black" size={20} onClick={handleSearch} />
                            </Button>
                          </Link>
                        </InputGroup>
                      </div>
                    </Offcanvas.Body>
                  </Offcanvas.Header>
                </Offcanvas>
              </Row>

              <div className="search-container">
                <InputGroup>
                  <Form.Control
                    placeholder="Rechercher dans la boutique"
                    aria-label="Rechercher dans la boutique"
                    value={searchText}
                    onChange={handleSearch}
                  />
                  <Link to={`/searchresults?query=${encodeURIComponent(searchText ? searchText.trim() : '')}`}>
                    <Button className="search-btn" disabled={!searchText.trim()}>
                      <IoIosSearch color="white" size={20} onClick={handleSearch} />
                    </Button>
                  </Link>
                </InputGroup>
              </div>
            </Col>
            <Col xs={6} md={3} className="icon-col">
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="favori-dropdown">
                  <Badge badgeContent={favoriItems.length} showZero>
                    <FiHeart className="icon" color="white" />
                  </Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/favori">
                    Favori Ürünler
                  </Dropdown.Item>
                  {/* Diğer favori ürünleri ekleyebilirsiniz */}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="primary" id="cart-dropdown">
                  <Badge badgeContent={totalQuantity} showZero>
                    <MdShoppingBasket className="icon" />
                  </Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={showMiniCart}>Sepetim</Dropdown.Item>
                  {/* Diğer sepet içeriğini ekleyebilirsiniz */}
                </Dropdown.Menu>
              </Dropdown>

              <IoIosSearch className="icon" id="search" onClick={showSearchOffcanvas} />

              <Dropdown>
                <Dropdown.Toggle variant="primary" id="hamburger-menu-dropdown">
                  <GiHamburgerMenu color="white" className="icon" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={showHamburgerMenuOffcanvas}>Hamburger Menü</Dropdown.Item>
                  {/* Diğer menü öğelerini ekleyebilirsiniz */}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </div>

      <MiniCart show={isMiniCartVisible} handleClose={hideMiniCart} style={{ width: '80%' }} />
    </ThemeProvider>
  );
};

export default MiddleMenu;


